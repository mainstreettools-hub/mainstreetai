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
    return res.status(200).json({ ok: true, message: "You're in! Watch for the MainStreet AI Brief." });
  } catch (e) { return res.status(500).json({ ok: false, message: 'Could not subscribe right now.' }); }
};
