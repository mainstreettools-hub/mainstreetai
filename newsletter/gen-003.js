const fs=require('fs');const S='https://mainstreetai.tools';
const P='font-family:Arial,Helvetica,sans-serif;';
const pick=(cat,col,name,href,verdict,price)=>`<tr><td style="padding:0 0 14px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e4dfd0;border-left:4px solid ${col};border-radius:8px"><tr><td style="padding:14px 16px;${P}"><div style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${col}">${cat}</div><div style="font-size:17px;font-weight:700;color:#0f172a;margin:4px 0">${name}</div><div style="font-size:14px;line-height:1.5;color:#334155">${verdict}</div><div style="font-size:13px;color:#64748b;margin-top:6px">${price}</div><a href="${href}" style="display:inline-block;margin-top:8px;font-size:14px;font-weight:700;color:#0f766e;text-decoration:none">Read the listing &rarr;</a></td></tr></table></td></tr>`;
const html=`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>MainStreet AI Brief #3</title></head>
<body style="margin:0;padding:0;background:#f6f4ee">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">Free online booking for appointment-based shops, three more free-to-start tools, and five things to set before you turn booking on.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f4ee"><tr><td align="center" style="padding:24px 12px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px">
<tr><td style="background:#0f172a;border-radius:12px 12px 0 0;padding:28px 28px 26px;${P}">
<div style="font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#5eead4">MainStreet AI Brief &middot; Issue #3</div>
<div style="font-size:26px;line-height:1.25;font-weight:700;color:#ffffff;margin-top:8px">Let customers book without calling you</div>
<div style="font-size:14px;color:#cbd5e1;margin-top:8px">October 2026 &middot; Prices checked against vendor sites</div></td></tr>
<tr><td style="background:#ffffff;padding:24px 28px;${P}font-size:15px;line-height:1.6;color:#1e293b">
<p style="margin:0 0 12px">Hey there,</p>
<p style="margin:0 0 12px">Plenty of customers would rather book online than leave a voicemail and wait for a callback. If the only way to get on your schedule is to reach you by phone, some of them just book with whoever lets them pick a time.</p>
<p style="margin:0">This week's pick gives you a booking page for $0. Plus three more tools you can start on a free plan, and five settings to get right before you share your booking link.</p></td></tr>
<tr><td style="background:#ffffff;padding:0 28px 24px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdfa;border:1px solid #99f6e4;border-top:4px solid #f97316;border-radius:10px"><tr><td style="padding:20px;${P}">
<div style="font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#0f766e">Tool of the week</div>
<div style="font-size:22px;font-weight:700;color:#0f172a;margin:6px 0 4px">Square Appointments</div>
<div style="font-size:13px;color:#9a3412;font-weight:700;margin-bottom:10px">Online Booking &amp; Payments</div>
<p style="margin:0 0 10px;font-size:15px;line-height:1.6;color:#1e293b">Online booking, reminders and payments for appointment-based businesses. Customers pick a time from your booking page, get reminders before they show up, and can pay through Square. Good for clinics, salons and solo practitioners who spend too much time trading texts to set up a time.</p>
<p style="margin:0 0 6px;font-size:14px;line-height:1.6;color:#1e293b"><b>Price:</b> Free $0/mo per location; Plus $49/mo per location; Premium $149/mo per location. Card processing fees extra. <span style="color:#64748b">(Checked on Square's site, Oct 2026.)</span></p>
<p style="margin:0 0 6px;font-size:14px;line-height:1.6;color:#1e293b"><b>Good:</b> free to start, payments built in. Setup takes about 1&ndash;2 hours.</p>
<p style="margin:0 0 14px;font-size:14px;line-height:1.6;color:#1e293b"><b>Watch for:</b> it isn't built for dispatching crews. If you send trucks to job sites, a field-service app fits better.</p>
<a href="${S}/tools/square-appointments" style="display:inline-block;background:#0d9488;color:#ffffff;font-weight:700;font-size:15px;text-decoration:none;padding:12px 20px;border-radius:8px">See the full Square Appointments listing</a>
<div style="margin-top:10px;font-size:13px"><a href="${S}/compare/best-ai-tools-for-clinics" style="color:#0f766e">Run a clinic? See the tools we'd look at first</a></div>
</td></tr></table></td></tr>
<tr><td style="background:#ffffff;padding:0 28px 10px;${P}"><div style="font-size:18px;font-weight:700;color:#0f172a;margin-bottom:12px">3 quick picks you can start free</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
${pick('Website Chat &amp; Workflows','#ec4899','HubSpot (free CRM + chat)',S+'/tools/hubspot-free-crm-chat','A free CRM with website chat, forms and an AI assistant, so every lead lands in one place instead of five inboxes.','Free CRM tools; Starter $20/seat/mo when you want automation.')}
${pick('Website Chat &amp; Workflows','#0ea5e9','Zapier',S+'/tools/zapier','Connects your apps so a new booking or web form can create the customer, the job and the invoice without retyping.','Free plan $0; Professional from $19.99/mo; Team from $69/mo. Price rises with task volume.')}
${pick('AI Bookkeeping &amp; Invoicing','#8b5cf6','QuickBooks Online',S+'/tools/quickbooks-online','The accounting software almost every accountant already knows, now with AI-assisted categorizing.','Free plan $0 (1 user, 2 invoices/mo); Simple Start $38/mo list price. 30-day trial.')}
</table></td></tr>
<tr><td style="background:#ffffff;padding:4px 28px 24px;${P}">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fffbeb;border:1px solid #fde68a;border-radius:10px"><tr><td style="padding:18px 20px;font-size:14px;line-height:1.6;color:#1e293b">
<div style="font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#b45309;margin-bottom:6px">Do this first</div>
<b>Set these five things before you share a booking link.</b> Online booking only saves time if the calendar matches how you really work. Before you send anyone the link:
<ol style="margin:8px 0 8px 20px;padding:0"><li>Block your real hours, including lunch and the time you need to drive between stops.</li><li>Set how long each service actually takes, not how long you wish it took.</li><li>Decide how far ahead people can book, and how late they can cancel.</li><li>Turn on reminders so no-shows get a nudge the day before.</li><li>Book a fake appointment yourself from your phone to see what a customer sees.</li></ol>
Then put the link on your website, your Google Business Profile and your voicemail greeting. <a href="${S}/leaking-jobs" style="color:#0f766e;font-weight:700">Check if your website is leaking jobs</a>
</td></tr></table></td></tr>
<tr><td style="background:#ffffff;padding:0 28px 26px;${P}font-size:15px;line-height:1.6;color:#1e293b">
<p style="margin:0 0 12px">Browse all 42 tools at <a href="${S}" style="color:#0f766e;font-weight:700">mainstreetai.tools</a>. Got a tool you want me to look at? Hit reply. See you next week.</p>
<p style="margin:0">Ryan Hovis<br><span style="color:#64748b">Founder, MainStreetAI</span></p></td></tr>
<tr><td style="background:#0f172a;padding:18px 28px;border-radius:0 0 12px 12px;${P}font-size:14px;color:#cbd5e1">
Make an AI tool for local businesses? This spot is open. <a href="${S}/sponsor" style="color:#5eead4;font-weight:700">Sponsor the Brief &rarr;</a></td></tr>
<tr><td align="center" style="padding:18px 12px;${P}font-size:12px;line-height:1.6;color:#64748b">
You're getting this because you signed up at mainstreetai.tools.<br>MainStreetAI &middot; 1545 Monument Avenue, Gastonia NC 28052<br>
<a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#64748b">Unsubscribe</a> &middot; <a href="mailto:mainstreettools@gmail.com" style="color:#64748b">Contact</a></td></tr>
</table></td></tr></table></body></html>`;
fs.writeFileSync(__dirname+'/issue-003.html',html);
