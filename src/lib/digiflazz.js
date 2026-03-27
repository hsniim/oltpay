/**
 * src/lib/digiflazz.js
 * 
 * Helper untuk fetch harga live dari Cloudflare Worker (Digiflazz).
 * Dipakai di semua halaman: pulsa, paket data, game, topup, tagihan.
 * 
 * Strategi:
 * - Fetch harga live dari Worker saat halaman dimuat (client-side)
 * - Cocokkan dengan products.js berdasarkan buyer_sku_code
 * - Fallback ke harga statis jika fetch gagal
 */

export const WORKER_URL = 'https://oltpay.husnovember21.workers.dev';

// ─── Fetch dari Worker ──────────────────────────────────────────────────────
// type: 'prepaid' | 'pasca'
// category: 'Pulsa' | 'Data' | 'Games' | 'e-Wallet' | dll (opsional)
// brand: 'Telkomsel' | 'XL' | dll (opsional)
export async function fetchHargaLive({ type = 'prepaid', category, brand } = {}) {
  const body = { type };
  if (category) body.category = category;
  if (brand)    body.brand    = brand;

  const res = await fetch(WORKER_URL, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(body),
  });

  if (!res.ok) throw new Error(`Worker HTTP ${res.status}`);

  const data = await res.json();
  if (data.result !== 'success') throw new Error(data.error ?? 'Gagal fetch harga');

  // Ubah array menjadi Map: buyer_sku_code → item
  const map = new Map();
  for (const item of data.message) {
    map.set(item.buyer_sku_code, item);
  }
  return map;
}

// ─── Update harga packages dengan data live ─────────────────────────────────
// packages: array dari products.js ({ code, name, desc, price })
// liveMap:  Map dari fetchHargaLive()
// Kembalikan array baru dengan harga_jual dan tersedia dari live
export function applyLiveHarga(packages, liveMap) {
  return packages.map(pkg => {
    const live = liveMap.get(pkg.code);
    if (!live) return { ...pkg, tersedia: true }; // tidak ada di live, pakai statis

    return {
      ...pkg,
      price:              live.harga_jual,        // override harga dengan harga jual
      harga_agen:         live.harga_agen,
      harga_jual:         live.harga_jual,
      harga_jual_display: live.harga_jual_display,
      keuntungan_bersih:  live.keuntungan_bersih,
      keuntungan_display: live.keuntungan_display,
      tersedia:           live.tersedia,
      start_cut_off:      live.start_cut_off,
      end_cut_off:        live.end_cut_off,
    };
  });
}

// ─── Format harga ke Rupiah ─────────────────────────────────────────────────
export function formatRupiah(angka) {
  return `Rp ${Number(angka).toLocaleString('id-ID')}`;
}

// ─── Kategori & Brand mapping untuk Digiflazz ──────────────────────────────
// Sesuaikan jika nama kategori/brand di Digiflazz berbeda
export const CATEGORY_MAP = {
  // Pulsa
  'telkomsel-pulsa':  { category: 'Pulsa', brand: 'Telkomsel' },
  'indosat-pulsa':    { category: 'Pulsa', brand: 'Indosat' },
  'xl-pulsa':         { category: 'Pulsa', brand: 'XL' },
  'tri-pulsa':        { category: 'Pulsa', brand: 'Three' },
  'axis-pulsa':       { category: 'Pulsa', brand: 'AXIS' },
  'smartfren-pulsa':  { category: 'Pulsa', brand: 'Smartfren' },

  // Paket Data
  'telkomsel-data':   { category: 'Data', brand: 'Telkomsel' },
  'indosat-data':     { category: 'Data', brand: 'Indosat' },
  'xl-data':          { category: 'Data', brand: 'XL' },
  'tri-data':         { category: 'Data', brand: 'Three' },
  'axis-data':        { category: 'Data', brand: 'AXIS' },
  'smartfren-data':   { category: 'Data', brand: 'Smartfren' },

  // Game
  'ml':     { category: 'Games', brand: 'Mobile Legends' },
  'ff':     { category: 'Games', brand: 'Free Fire' },
  'pubgm':  { category: 'Games', brand: 'PUBG Mobile' },
  'garena': { category: 'Games', brand: 'Garena' },

  // E-Wallet / Topup
  'dana':       { category: 'E-Wallet', brand: 'Dana' },
  'ovo':        { category: 'E-Wallet', brand: 'OVO' },
  'gopay':      { category: 'E-Wallet', brand: 'GoPay' },
  'shopeepay':  { category: 'E-Wallet', brand: 'ShopeePay' },
};