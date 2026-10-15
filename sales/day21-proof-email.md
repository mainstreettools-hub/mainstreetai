# Day-21 proof email (sponsors on a free or discounted first month)

Goal: about 9 days before the first full-price charge (day ~21 of a 30-day cycle), send the sponsor a short, honest 3-bullet summary of what their placement got. Never invent or round up numbers. If data is thin, say so.

## Who gets it
- Any sponsor whose first month was free or discounted (for example the FOUNDING49 code on Featured Spot, or any agreed founding discount).
- Find them in Stripe: subscriptions with a coupon or trial; note `current_period_end` (convert to ET). Send on period_end minus 9 days.

## Checklist (day ~21)
1. List the sponsor's pages: category page, matching guides, solutions and compare pages, their /tools page, and home page if Featured.
2. Google Search Console > Performance > Search results. Filter Page "contains" each URL (or use a regex). Date range: sponsorship start to today. Record impressions and clicks exactly as shown.
3. Bing Webmaster Tools > Search Performance, same pages and dates (optional third data point).
4. AI crawler hits: Vercel dashboard > Logs (or Observability), filter by path and user agents GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, PerplexityBot, Google-Extended, Bingbot. Count requests per agent. If log retention doesn't cover the whole window, say which dates the count covers.
5. Outbound clicks to their site, only if we actually track them (Vercel Analytics). If we don't, leave it out.
6. Sanity check: every number in the email matches a screenshot or export saved to `sales/proof/<sponsor>-<date>/`.
7. Send from mainstreettools@gmail.com. Don't offer discounts, extensions or refunds without Ryan. Note it in the Monday update.

## Template

Subject: Your first 3 weeks on MainStreetAI

Hi {first_name},

Quick update before your first full month starts on {billing_date}. Here's what your {placement} has done since {start_date}:

- Google Search: your sponsored pages showed up {impressions} times in search results and got {clicks} clicks (Search Console, {start_date}–{today}).
- AI assistants: crawlers from {list_of_bots} fetched your pages {crawler_hits} times, so they're being read by ChatGPT, Claude and others.
- Placement: your banner and pinned card are live on {n_pages} pages, including {top_page_url}.

{honest_context_line}

Your plan renews at ${price}/mo on {billing_date}. If you'd like to change anything about your banner or copy, just reply. If you'd rather cancel before then, reply and I'll take care of it.

Ryan Hovis
Founder, MainStreetAI
https://mainstreetai.tools

## If data is thin (use as {honest_context_line})
- "The site is new, so these numbers are early. Search impressions usually build over the first 2–3 months as Google indexes the pages."
- If a number is zero, say zero. Don't drop the bullet to hide it; replace it with what we can honestly report (pages indexed, date crawled).
- Never estimate, extrapolate or project future traffic.
