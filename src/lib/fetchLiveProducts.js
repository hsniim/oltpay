// src/lib/fetchLiveProducts.js
//
// Helper ini menggantikan import statis dari products.js dengan data live
// dari Cloudflare Worker. Gunakan di semua halaman: pulsa, paket data, game, topup.
//
// PEMAKAIAN DI .astro (Server-Side, build time):
//   import { fetchLiveProducts } from '../lib/fetchLiveProducts.js';
//   const products = await fetchLiveProducts('HARGA', 'PULSA_TELKOMSEL');
//
// PEMAKAIAN DI <script> (Client-Side, runtime):
//   const { fetchLiveClient } = await import('/src/lib/fetchLiveProducts.js');
//   const products = await fetchLiveClient('HARGA', 'PULSA_TELKOMSEL');

const WORKER_URL = import.meta.env.PUBLIC_WORKER_URL
  ?? 'https://oltpay.husnovember21.workers.dev';

// ─── Kalkulasi fallback di sisi klien (jika Worker tidak menambahkan harga_jual) ─
export function hitungHargaJual(hargaAgen) {
  const hargaJual   = Math.round((hargaAgen + 1050) / 0.993);
  const biayaQris   = Math.round(hargaJual * 0.007);
  const keuntungan  = hargaJual - hargaAgen - biayaQris;
  return { hargaJual, biayaQris, keuntungan };
}

// ─── Normalisasi item produk dari PortalPulsa ──────────────────────────────
function normalizeItem(item) {
  const hargaAgen = parseInt(item.price) || 0;

  // Worker sudah hitung — pakai langsung; kalau belum, hitung di sini
  const hargaJual = item.harga_jual
    ? parseInt(item.harga_jual)
    : hitungHargaJual(hargaAgen).hargaJual;

  return {
    code:         item.code,
    name:         item.name  ?? item.code,
    desc:         item.desc  ?? item.description ?? '',
    price:        hargaAgen,           // harga agen (raw)
    harga_jual:   hargaJual,           // harga jual ke konsumen
    harga_jual_display: `Rp ${hargaJual.toLocaleString('id-ID')}`,
    status:       item.status ?? '1',  // '1' = ada stok
    tersedia:     item.status === '1' || item.status === 'available',
  };
}

// ─── Fetch dari Worker (bisa dipanggil SSR maupun CSR) ─────────────────────
export async function fetchLiveProducts(type = 'HARGA', code = '') {
  const res = await fetch(WORKER_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type, code }),
  });

  if (!res.ok) {
    throw new Error(`Worker error: HTTP ${res.status}`);
  }

  const data = await res.json();

  if (data.result !== 'success') {
    throw new Error(data.message ?? 'Gagal mengambil data produk');
  }

  if (!Array.isArray(data.message)) {
    // Untuk response non-array (misal cek saldo), kembalikan as-is
    return data.message;
  }

  return data.message.map(normalizeItem);
}

// ─── Alias untuk client-side (sama, tapi namanya eksplisit) ────────────────
export const fetchLiveClient = fetchLiveProducts;

// ─── Mapping: nama provider di products.js → code PortalPulsa ──────────────
// Sesuaikan setelah cek endpoint HARGA (tanpa code) untuk tahu kode yang berlaku
export const PROVIDER_MAP = {
  // Pulsa
  'telkomsel-pulsa':  'PULSA_TELKOMSEL',
  'indosat-pulsa':    'PULSA_INDOSAT',
  'xl-pulsa':         'PULSA_XL',
  'tri-pulsa':        'PULSA_TRI',
  'axis-pulsa':       'PULSA_AXIS',
  'smartfren-pulsa':  'PULSA_SMARTFREN',

  // Paket data (sesuaikan kode dari PortalPulsa)
  'telkomsel-data':   'DATA_TELKOMSEL',
  'indosat-data':     'DATA_INDOSAT',
  'xl-data':          'DATA_XL',
  'tri-data':         'DATA_TRI',

  // Game
  'ml':     'GAME_ML',
  'ff':     'GAME_FF',
  'pubgm':  'GAME_PUBG',
  'garena': 'GAME_GARENA',

  // E-wallet / Topup
  'dana':       'EWALLET_DANA',
  'ovo':        'EWALLET_OVO',
  'gopay':      'EWALLET_GOPAY',
  'shopeepay':  'EWALLET_SHOPEE',
};

// ─── Merge produk live dengan fallback statis ───────────────────────────────
// Dipakai jika Anda ingin tetap tampilkan produk statis saat API gagal
export function mergeWithStatic(liveProducts, staticPackages) {
  if (!liveProducts || liveProducts.length === 0) return staticPackages;

  const liveMap = new Map(liveProducts.map(p => [p.code, p]));

  return staticPackages.map(pkg => {
    const live = liveMap.get(pkg.code);
    if (!live) return pkg; // produk tidak ada di live, pakai statis
    return {
      ...pkg,
      price:            live.harga_jual,   // ganti harga dengan harga jual live
      harga_jual:       live.harga_jual,
      harga_agen:       live.price,
      harga_jual_display: live.harga_jual_display,
      tersedia:         live.tersedia,
    };
  });
}