const fs=require('fs');const S='https://mainstreetai.tools';
const P='font-family:Arial,Helvetica,sans-serif;';
const pick=(cat,col,name,href,verdict,price)=>`<tr><td style="padding:0 0 14px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e4dfd0;border-left:4px solid ${col};border-radius:8px"><tr><td style="padding:14px 16px;${P}"><div style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${col}">${cat}</div><div style="font-size:17px;font-weight:700;color:#0f172a;margin:4px 0">${name}</div><div style="font-size:14px;line-height:1.5;color:#334155">${verdict}</div><div style="font-size:13px;color:#64748b;margin-top:6px">${price}</div><a href="${href}" style="display:inline-block;margin-top:8px;font-size:14px;font-weight:700;color:#0f766e;text-decoration:none">Read the listing &rarr;</a></td></tr></table></td></tr>`;
const html=`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>MainStreet AI Brief #2</title></head>
<body style="margin:0;padding:0;background:#f6f4ee">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">A real business phone line for $15 a month, three free-to-start tools, and the answer sheet to write before you set up any AI.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f4ee"><tr><td align="center" style="padding:24px 12px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px">
<tr><td style="background:#0f172a;border-radius:12px 12px 0 0;padding:28px 28px 26px;${P}">
<div style="font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#5eead4">MainStreet AI Brief &middot; Issue #2</div>
<div style="font-size:26px;line-height:1.25;font-weight:700;color:#ffffff;margin-top:8px">Get your cell number off the side of the truck</div>
<div style="font-size:14px;color:#cbd5e1;margin-top:8px">October 2026 &middot; Prices checked against vendor sites</div></td></tr>
<tr><td style="background:#ffffff;padding:24px 28px;${P}font-size:15px;line-height:1.6;color:#1e293b">
<p style="margin:0 0 12px">Hey there,</p>
<p style="margin:0 0 12px">A lot of small shops still run the whole business off the owner's personal cell. It works until you hire someone, go on vacation, or miss a call in the middle of a job and never find out who it was.</p>
<p style="margin:0">This week's pick fixes that without a big phone bill. Plus three tools you can start on a free plan, and one thing to write down before you let any AI talk to your customers.</p></td></tr>
<tr><td style="background:#ffffff;padding:0 28px 24px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdfa;border:1px solid #99f6e4;border-top:4px solid #f97316;border-radius:10px"><tr><td style="padding:20px;${P}">
<div style="font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#0f766e">Tool of the week</div>
<div style="font-size:22px;font-weight:700;color:#0f172a;margin:6px 0 4px">Quo (formerly OpenPhone)</div>
<div style="font-size:13px;color:#9a3412;font-weight:700;margin-bottom:10px">Business Phone &amp; AI Answering</div>
<p style="margin:0 0 10px;font-size:15px;line-height:1.6;color:#1e293b">A business phone line that runs on the phone you already carry, with a shared inbox so your team sees every call and text, and an AI agent that picks up when nobody can. Good for solo operators and small teams who want one number customers can always reach.</p>
<p style="margin:0 0 6px;font-size:14px;line-height:1.6;color:#1e293b"><b>Price:</b> Starter $15/user/mo billed annually ($19 month-to-month), Business $23 ($33), Scale $35 ($47). AI call credits included on every plan, with more sold in tiers. <span style="color:#64748b">(Checked on Quo's site, Oct 2026.)</span></p>
<p style="margin:0 0 6px;font-size:14px;line-height:1.6;color:#1e293b"><b>Good:</b> a full business phone line, a shared team inbox, free trial. Setup takes about 30 minutes.</p>
<p style="margin:0 0 14px;font-size:14px;line-height:1.6;color:#1e293b"><b>Watch for:</b> AI calls are billed through credits, so check how many your plan includes before you lean on the AI agent.</p>
<a href="${S}/tools/quo-formerly-openphone.html" style="display:inline-block;background:#0d9488;color:#ffffff;font-weight:700;font-size:15px;text-decoration:none;padding:12px 20px;border-radius:8px">See the full Quo listing</a>
<div style="margin-top:10px;font-size:13px"><a href="${S}/compare/ai-phone-receptionists-compared.html" style="color:#0f766e">Want a dedicated AI receptionist instead? Compare them here</a></div>
</td></tr></table></td></tr>
<tr><td style="background:#ffffff;padding:0 28px 10px;${P}"><div style="font-size:18px;font-weight:700;color:#0f172a;margin-bottom:12px">3 quick picks you can start free</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
${pick('Field Service &amp; Scheduling','#f97316','ServiceM8',S+'/tools/servicem8.html','Quotes, scheduling and invoices from an iPhone, priced by how many jobs you run. Best on Apple devices.','Free for 1 user and 30 jobs/mo; Starter $29/mo for 50 jobs. Unlimited users on paid plans.')}
${pick('AI Bookkeeping &amp; Invoicing','#8b5cf6','Zoho Books',S+'/tools/zoho-books.html','Full accounting with solid automation, and free if you\'re under $50K in revenue.','Free under $50K revenue; Standard $20/mo ($15/mo billed annually, 3 users).')}
${pick('Website Chat &amp; Workflows','#ec4899','Crisp',S+'/tools/crisp.html','Website chat and a shared inbox at a flat price per workspace, not per person. AI answers are on the higher plans.','Free $0; Mini $45/mo per workspace (4 seats); Essentials $95 (10 seats).')}
</table></td></tr>
<tr><td style="background:#ffffff;padding:4px 28px 24px;${P}">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fffbeb;border:1px solid #fde68a;border-radius:10px"><tr><td style="padding:18px 20px;font-size:14px;line-height:1.6;color:#1e293b">
<div style="font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#b45309;margin-bottom:6px">Do this first</div>
<b>Write your answer sheet before you set up any AI.</b> A phone agent or chat bot can only repeat what you give it. Spend 15 minutes on one page that covers:
<ol style="margin:8px 0 8px 20px;padding:0"><li>Your hours and the towns or zip codes you serve.</li><li>What you charge for a service call or estimate, or the exact words to use if you don't quote over the phone.</li><li>What counts as an emergency, and who gets called when one comes in.</li><li>How someone books, and what you need from them (address, photos, best callback time).</li></ol>
Paste it into whatever tool you try. If a question isn't on the sheet, the AI shouldn't be guessing at it. <a href="${S}/leaking-jobs.html" style="color:#0f766e;font-weight:700">Check if your website is leaking jobs</a>
</td></tr></table></td></tr>
<tr><td style="background:#ffffff;padding:0 28px 26px;${P}font-size:15px;line-height:1.6;color:#1e293b">
<p style="margin:0 0 12px">Browse all 42 tools at <a href="${S}" style="color:#0f766e;font-weight:700">mainstreetai.tools</a>. Got a tool you want me to look at? Hit reply. See you next week.</p>
<p style="margin:0">Ryan Hovis<br><span style="color:#64748b">Founder, MainStreetAI</span></p></td></tr>
<tr><td style="background:#0f172a;padding:18px 28px;border-radius:0 0 12px 12px;${P}font-size:14px;color:#cbd5e1">
Make an AI tool for local businesses? This spot is open. <a href="${S}/sponsor.html" style="color:#5eead4;font-weight:700">Sponsor the Brief &rarr;</a></td></tr>
<tr><td align="center" style="padding:18px 12px;${P}font-size:12px;line-height:1.6;color:#64748b">
You're getting this because you signed up at mainstreetai.tools.<br>MainStreetAI &middot; 1545 Monument Avenue, Gastonia NC 28052<br>
<a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#64748b">Unsubscribe</a> &middot; <a href="mailto:mainstreettools@gmail.com" style="color:#64748b">Contact</a></td></tr>
</table></td></tr></table></body></html>`;
fs.writeFileSync(__dirname+'/issue-002.html',html);
