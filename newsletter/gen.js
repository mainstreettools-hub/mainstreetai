const fs=require('fs');const S='https://mainstreetai.tools';
const P='font-family:Arial,Helvetica,sans-serif;';
const pick=(cat,col,name,href,verdict,price)=>`<tr><td style="padding:0 0 14px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e4dfd0;border-left:4px solid ${col};border-radius:8px"><tr><td style="padding:14px 16px;${P}"><div style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${col}">${cat}</div><div style="font-size:17px;font-weight:700;color:#0f172a;margin:4px 0">${name}</div><div style="font-size:14px;line-height:1.5;color:#334155">${verdict}</div><div style="font-size:13px;color:#64748b;margin-top:6px">${price}</div><a href="${href}" style="display:inline-block;margin-top:8px;font-size:14px;font-weight:700;color:#0f766e;text-decoration:none">Read the listing &rarr;</a></td></tr></table></td></tr>`;
const html=`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>MainStreet AI Brief #1</title></head>
<body style="margin:0;padding:0;background:#f6f4ee">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">The scheduling app I'd pick for most crews, three tools worth a look, and a 10-minute test before you pay for an AI receptionist.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f4ee"><tr><td align="center" style="padding:24px 12px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px">
<tr><td style="background:#0f172a;border-radius:12px 12px 0 0;padding:28px 28px 26px;${P}">
<div style="font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#5eead4">MainStreet AI Brief &middot; Issue #1</div>
<div style="font-size:26px;line-height:1.25;font-weight:700;color:#ffffff;margin-top:8px">AI tools that actually help a local service business</div>
<div style="font-size:14px;color:#cbd5e1;margin-top:8px">October 2026 &middot; Prices checked against vendor sites</div></td></tr>
<tr><td style="background:#ffffff;padding:24px 28px;${P}font-size:15px;line-height:1.6;color:#1e293b">
<p style="margin:0 0 12px">Hey there,</p>
<p style="margin:0 0 12px">Thanks for signing up. I started MainStreetAI because most "best AI tools" lists are written for tech companies, not for the person running a plumbing outfit or a three-chair clinic. Every week I'll send one tool worth your time, a few quick picks, and one thing you can try before spending money.</p>
<p style="margin:0">Short and useful. If it isn't, hit reply and tell me.</p></td></tr>
<tr><td style="background:#ffffff;padding:0 28px 24px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdfa;border:1px solid #99f6e4;border-top:4px solid #f97316;border-radius:10px"><tr><td style="padding:20px;${P}">
<div style="font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#0f766e">Tool of the week</div>
<div style="font-size:22px;font-weight:700;color:#0f172a;margin:6px 0 4px">Jobber</div>
<div style="font-size:13px;color:#9a3412;font-weight:700;margin-bottom:10px">Field Service &amp; Scheduling</div>
<p style="margin:0 0 10px;font-size:15px;line-height:1.6;color:#1e293b">Quoting, scheduling, dispatch, invoicing and getting paid, all in one app built for home-service crews. If you're still running jobs off a whiteboard and texts, this is the easiest place to start.</p>
<p style="margin:0 0 6px;font-size:14px;line-height:1.6;color:#1e293b"><b>Price:</b> Core $29/mo billed annually ($49 month-to-month), Connect $99 ($139), Grow $149 ($199) for one user. Extra users $29/mo. Card fees 2.9% + 30&cent;. <span style="color:#64748b">(Checked on Jobber's site, Oct 2026.)</span></p>
<p style="margin:0 0 6px;font-size:14px;line-height:1.6;color:#1e293b"><b>Good:</b> published pricing, easy for crews to learn, free trial.</p>
<p style="margin:0 0 14px;font-size:14px;line-height:1.6;color:#1e293b"><b>Watch for:</b> add-ons like the AI receptionist cost extra. Setup takes about 1&ndash;3 days.</p>
<a href="${S}/tools/jobber.html" style="display:inline-block;background:#0d9488;color:#ffffff;font-weight:700;font-size:15px;text-decoration:none;padding:12px 20px;border-radius:8px">See the full Jobber listing</a>
<div style="margin-top:10px;font-size:13px"><a href="${S}/compare/jobber-vs-housecall-pro.html" style="color:#0f766e">Torn between Jobber and Housecall Pro? Read the comparison</a></div>
</td></tr></table></td></tr>
<tr><td style="background:#ffffff;padding:0 28px 10px;${P}"><div style="font-size:18px;font-weight:700;color:#0f172a;margin-bottom:12px">3 quick picks</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
${pick('AI Phone Receptionist','#3b82f6','Rosie',S+'/tools/rosie.html','A cheap way to stop missing calls while you\'re on a job.','From $49/mo for 250 minutes; $149/mo for 1,000 minutes.')}
${pick('AI Bookkeeping &amp; Invoicing','#8b5cf6','Wave',S+'/tools/wave.html','Free invoicing and books for solo operators who don\'t need much more.','Starter $0; Pro $19/mo. Payment processing fees extra.')}
${pick('Website Chat &amp; Workflows','#ec4899','Tidio',S+'/tools/tidio.html','Answers the same five website questions so you don\'t have to.','Free plan (50 conversations); Lyro AI from $32.50/mo.')}
</table></td></tr>
<tr><td style="background:#ffffff;padding:4px 28px 24px;${P}">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fffbeb;border:1px solid #fde68a;border-radius:10px"><tr><td style="padding:18px 20px;font-size:14px;line-height:1.6;color:#1e293b">
<div style="font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#b45309;margin-bottom:6px">Try this before you buy</div>
<b>Test an AI receptionist in 10 minutes.</b> During the free trial, call it yourself from a different phone and play three real customers:
<ol style="margin:8px 0 8px 20px;padding:0"><li>Someone with an emergency ("water's coming through my ceiling"). Does it flag it as urgent or transfer you?</li><li>Someone asking a price you don't quote over the phone. Does it make something up?</li><li>Someone who wants Tuesday at 2. Does the booking actually land on your calendar?</li></ol>
Then read the transcript or message it sent you. If you'd be embarrassed for a customer to hear any of it, keep looking. <a href="${S}/compare/ai-phone-receptionists-compared.html" style="color:#0f766e;font-weight:700">Compare AI receptionists</a>
</td></tr></table></td></tr>
<tr><td style="background:#ffffff;padding:0 28px 26px;${P}font-size:15px;line-height:1.6;color:#1e293b">
<p style="margin:0 0 12px">Browse all 40 tools at <a href="${S}" style="color:#0f766e;font-weight:700">mainstreetai.tools</a>. See you next week.</p>
<p style="margin:0">Ryan Hovis<br><span style="color:#64748b">Founder, MainStreetAI</span></p></td></tr>
<tr><td style="background:#0f172a;padding:18px 28px;border-radius:0 0 12px 12px;${P}font-size:14px;color:#cbd5e1">
Make an AI tool for local businesses? This spot is open. <a href="${S}/sponsor.html" style="color:#5eead4;font-weight:700">Sponsor the Brief &rarr;</a></td></tr>
<tr><td align="center" style="padding:18px 12px;${P}font-size:12px;line-height:1.6;color:#64748b">
You're getting this because you signed up at mainstreetai.tools.<br>
<a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#64748b">Unsubscribe</a> &middot; <a href="mailto:mainstreettools@gmail.com" style="color:#64748b">Contact</a></td></tr>
</table></td></tr></table></body></html>`;
fs.writeFileSync(__dirname+'/issue-001.html',html);
