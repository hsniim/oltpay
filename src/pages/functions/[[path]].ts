import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({
    status: "ok",
    message: "API portalpulsa aktif di /functions! Gunakan POST untuk harga/inquiry."
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};

export const POST: APIRoute = async ({ request }) => {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const body = await request.json();
    const { type, params = {} } = body;

    const form = new URLSearchParams();
    form.append('key', import.meta.env.PORTALPULSA_KEY ?? '');
    form.append('secret', import.meta.env.PORTALPULSA_SECRET ?? '');
    if (import.meta.env.PORTALPULSA_PIN) {
      form.append('pin', import.meta.env.PORTALPULSA_PIN);
    }
    form.append('type', type);

    Object.entries(params).forEach(([k, v]) => {
      form.append(k, String(v));
    });

    const response = await fetch('https://portalpulsa.com/api/connect/', {
      method: 'POST',
      body: form,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('PortalPulsa Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
};