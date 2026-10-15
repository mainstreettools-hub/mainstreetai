// Vercel serverless function: POST /api/subscribe {email}
// Requires env vars RESEND_API_KEY and RESEND_AUDIENCE_ID. Fails gracefully without them.
module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, message: 'Method not allowed' });
  let body = req.body || {};
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }
  const email = String(body.email || '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ ok: false, message: 'Please enter a valid email.' });
  const key = process.env.RESEND_API_KEY, aud = process.env.RESEND_AUDIENCE_ID;
  if (!key || !aud) return res.status(503).json({ ok: false, message: 'Newsletter signup opens soon — thanks for your patience!' });
  try {
    const r = await fetch(`https://api.resend.com/audiences/${aud}/contacts`, {
      method: 'POST', headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, unsubscribed: false })
    });
    if (!r.ok) return res.status(502).json({ ok: false, message: 'Could not subscribe right now. Please try again later.' });
    const link = 'https://mainstreetai.tools/downloads/ai-receptionist-checklist.pdf';
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST', headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: 'MainStreet AI Brief <brief@mainstreetai.tools>', to: [email], reply_to: 'mainstreettools@gmail.com',
          subject: "Your AI Receptionist Buyer's Checklist",
          html: `<div style="font-family:Arial,sans-serif;max-width:560px;color:#1c2333;line-height:1.5"><h2 style="color:#0f1b33">Thanks for joining the MainStreet AI Brief</h2><p>Here's the checklist you asked for: questions to ask, red flags, a 10-minute test call script, pricing gotchas and a setup list.</p><p><a href="${link}" style="background:#f5a524;color:#0f1b33;padding:10px 16px;border-radius:8px;text-decoration:none;font-weight:bold">Download the checklist (PDF)</a></p><p>Once a week you'll get one short email on AI tools that are actually worth it for local service businesses. Reply anytime with a question or a tool you want reviewed.</p><p>Ryan Hovis<br>Founder, MainStreetAI<br><a href="https://mainstreetai.tools">mainstreetai.tools</a></p></div>`,
          text: `Thanks for joining the MainStreet AI Brief.\n\nYour AI Receptionist Buyer's Checklist: ${link}\n\nOnce a week you'll get one short email on AI tools worth it for local service businesses. Reply anytime.\n\nRyan Hovis\nFounder, MainStreetAI`
        })
      });
    } catch (e) { /* welcome email is best-effort */ }
    return res.status(200).json({ ok: true, message: "You're in! The checklist is also on its way to your inbox." });
  } catch (e) { return res.status(500).json({ ok: false, message: 'Could not subscribe right now.' }); }
};
