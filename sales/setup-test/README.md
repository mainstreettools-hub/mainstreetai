# Local Setup Service Test (prep only, for Grok Bot review)

Free 2-week setup of ONE tool for a local business Ryan knows. Then $299 one time + a monthly fee if they keep it. Nobody has been contacted. Nothing has been signed up for.

## Files
- `offer.md` – one-page offer from Ryan, with FAQ
- `playbook-ai-receptionist.md` – phone answerer setup, about 1 hour
- `playbook-review-followup.md` – review follow-up setup, about 1 hour (includes a tested script)
- `script.md` – in person, text/phone, follow-up text, Day-14 talk
- `best-fit-businesses.md` – business types ranked, with questions to ask
- `agreement-template.md` – one-page agreement for the paid part (template for Ryan to review, not legal advice)

## Recommended tools (all checked on the vendor's own page, Nov 3, 2026)

| Offer | Main | Backup |
|---|---|---|
| Phone answerer | **Upfirst**: 14 days or 100 calls (whichever first) + 25 texts, no card. Then from $24.95/mo for 30 calls. https://upfirst.ai/pricing | **Smith.ai Free**: 25 calls/mo free with no end date; extras $3 each but off by default. **Card required to sign up.** https://smith.ai/pricing/ai-receptionist |
| Review follow-up | **Google review link + Google Sheets + Gmail script**: $0 forever, no card, 100 emails/day on gmail.com. https://support.google.com/business/answer/16816815 · https://developers.google.com/apps-script/guides/services/quotas | **GatherUp**: 14-day trial, no card. Then $124/mo (or $99/mo yearly). https://gatherup.com/pricing/ |

## Proposed price
- **$299 one time + $49/month** (Ryan's fee), only if they keep it after Day 14.
- The $299 is due on Day 14. A split ($150 + $149 over two months) is OK if the owner asks. The $49/mo starts after Day 14.
- Setups happen in person.
- Reason: it keeps the all-in cost near $75/mo with Upfirst Starter ($49 for reviews), which a small shop can carry, and it pays for real monthly upkeep.
- Tool bills (Upfirst, GatherUp) are paid by the business, directly to the vendor, on the business's own card.

## Open questions for Ryan

Resolved (Nov 3, 2026, approved defaults):
1. ~~Is $49/mo OK?~~ **Resolved: $49/mo.**
2. ~~When is the $299 due?~~ **Resolved: due on Day 14. A split ($150 + $149 over two months) is OK if the owner asks.**
3. ~~In person or screen share?~~ **Resolved: setups happen in person.**
4. ~~Tell busy shops about Upfirst's bill?~~ **Resolved: yes, up front. The line is in `offer.md` and `script.md`: Starter covers 30 calls/mo; past that it's $1.50 per call, or $59.95/mo for 90 calls.**
5. ~~Written agreement for the paid part?~~ **Resolved: draft in `agreement-template.md`, for Ryan to review. Not legal advice.**

Still open:
6. Which 3 businesses does Ryan know, and which offer fits each?
7. How will Ryan collect the $299 and $49/mo (for example a Stripe payment link)? Not set up yet.

## Risks
- **Call forwarding** differs by carrier and is the most likely thing to go wrong. Test before leaving; undo the same day if they say no.
- **Upfirst trial can end early** at 100 calls on a busy or spammy line.
- **Texting rules (A2P 10DLC):** automated business texts in the US need carrier registration. We haven't confirmed how Upfirst handles it, so ask their support first. The review option sends email only; owners text by hand.
- **Google review rules:** ask every customer, no rewards, no screening for happy customers.
- **Dental/medical:** phone option is a poor fit (Upfirst offers a HIPAA agreement only on Enterprise). Offer reviews only, with no health details.
- **OnCrew** (in our tools.json) couldn't be re-checked today (pricing page blocked), so it isn't used.
- The review script is syntax-checked and tested with fake data here, but not yet run in a real Google account. Run the test steps in the playbook first.
