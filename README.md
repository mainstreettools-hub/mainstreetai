# MainStreetAI
Plain-English directory of AI tools for local service businesses.
- Data: `data/tools.json` (40 listings) · Config (base URL, Stripe links, featured partners): `config.js`
- Build: `node build.js` → `dist/` · Preview: `node serve.js 8080`
- Newsletter: `api/subscribe.js` (Vercel function; set RESEND_API_KEY, RESEND_AUDIENCE_ID)
- Deploy: Vercel reads `vercel.json` (build `node build.js`, output `dist`).
