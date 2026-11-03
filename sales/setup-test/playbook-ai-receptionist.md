# Playbook: AI Phone Answerer (Missed-Call Catch)

Goal: in about 1 hour, set up a phone answerer that picks up the calls the owner misses, then run it free for 14 days.

## Tools (checked Nov 3, 2026)

| | Tool | Free terms | After the trial | Card? | Source |
|---|---|---|---|---|---|
| **Main** | Upfirst | 14 days **or** 100 calls, whichever comes first, plus 25 text messages. Full features. | Starter $24.95/mo for 30 calls ($1.50 per extra call). Premium $59.95/mo for 90 calls ($1 per extra). 20% off yearly. No contract. | **No card needed** | https://upfirst.ai/pricing |
| **Backup** | Smith.ai AI Receptionist, Free plan | 25 real calls a month, free with no end date. Extra calls $3.00 each, but extra calls are **off by default**. | Stays free if they stay under 25 calls/mo. Pro is $150/mo for 75 calls. Month to month; 30 days' notice to cancel. | **Card required to sign up** (Smith.ai says it won't charge unless overages are turned on) | https://smith.ai/pricing/ai-receptionist and https://smith.ai/ai-receptionist (FAQ) |

When to use the backup: the shop gets very few calls and wants $0 forever, or the Upfirst trial ran out early (100 calls) and they still want to finish the test. Watch out: Smith.ai needs a card on file, so the owner must put in **their own** card. Ryan never puts his card on a client's account.

Not used: OnCrew (14-day trial listed in our own tools.json on Nov 2), because its pricing page would not load for us on Nov 3, so we couldn't re-check it.

**Who pays what after Day 14:**
- The tool bill (for example Upfirst $24.95/mo) is paid by the business, straight to Upfirst, on the business's own card.
- Ryan's fee ($299 once + $49/mo) is separate.

---

**Setups happen in person** at the shop, on a weekday (so Upfirst support is open if needed).

**Tell busy shops up front:** Upfirst Starter covers 30 calls a month. Past that it's $1.50 per extra call, or $59.95/mo for 90 calls. If the owner says they get lots of calls, say this before the trial, not on Day 14.

## Before the visit: collect from the owner (about 20 minutes)

Send these questions ahead, or ask them in person. Write the answers in a shared doc.

1. Business name exactly as customers know it, and the website (Upfirst uses the website to start training).
2. Hours, including after-hours and weekend rules.
3. Service area (towns, counties, or ZIP codes they cover, and ones they don't).
4. Top services, and anything they **don't** do.
5. The 5 to 10 questions callers ask most, with the owner's real answers. (Example: "Do you charge to come out?" "Do you work on tankless water heaters?")
6. Prices: what the answerer **may** say, and what it must **never** quote. Default: no prices, just "the owner will give you a quote."
7. **The handoff rule:** what counts as urgent, and who gets the alert. Example: "No heat, no AC with a baby or elderly person, water leak = text the owner right away. Everything else = summary is fine."
8. **Safety line:** for gas smell, fire, sparking or flooding, the answerer tells the caller to hang up and call 911 or the gas company first. Never give repair advice.
9. Booking: does the owner want callers booked on a calendar (Google, Outlook, Calendly, Square, Acuity), or just "take a message and I'll call back"? For the test, **message-only is simpler.** Add booking later if they keep it.
10. Who gets call summaries: phone number for texts and/or email.
11. Phone carrier and phone type for the business line (cell plan like Verizon/AT&T/T-Mobile, a landline, or a VoIP app like Google Voice, RingCentral or Grasshopper). This decides how forwarding works.
12. A second phone to test with (yours is fine).

---

## Setup steps (about 1 hour)

### Account (10 min)
1. On the owner's computer or phone, go to https://upfirst.ai and click **Try for free**. Sign up with the **owner's** business email, not Ryan's. Do not enter a card (none is asked).
2. Enter the business website when asked. Upfirst uses it as a starting point.
3. Pick a voice. Pick the greeting. Suggested greeting:
   "Thanks for calling [Business]. This is [Business]'s assistant. [Owner] is on a job right now. How can I help?"
4. Turn on the short "this call may be recorded" line if the setting is there. (North Carolina lets one side of a call record it, but callers may be in other states. Saying it out loud is the safe choice.)

### Teach it the business (20 min)
5. In the knowledge base, add hours, service area, services, and "things we don't do."
6. Add the FAQ answers from the owner, word for word where you can.
7. Set the questions it must ask every caller: name, callback number, address or town, what they need, and how urgent it is.
8. Set the "never" rules: never quote prices, never promise a time, never give repair or medical advice, never say it's a person.
9. Set notifications: text and/or email summary to the owner after every call. Set the urgent rule to alert the owner right away (or warm-transfer to the owner's cell, if they want that).
10. Choose coverage: **overflow / unanswered calls only** for this test. The owner's phone still rings first.
11. Turn on spam blocking (it's on every plan).

### Forwarding (10 min)
12. Upfirst gives you a phone number. **Keep the owner's number.** You forward unanswered calls to the Upfirst number. No porting.
13. Set **conditional call forwarding** ("forward when no answer / busy / unreachable") on the business line to the Upfirst number. How depends on the carrier:
    - Look up the exact steps on the carrier's own help page, or the forwarding guide inside Upfirst. Codes are different for each carrier and can change, so don't guess.
    - VoIP apps (Google Voice, RingCentral, Grasshopper and so on) usually have a forwarding setting in the app instead of a dial code.
    - Write down how to turn it **off**, so you can undo it on Day 14.
14. If possible, set the ring time before it forwards to about 20 to 25 seconds, so the owner still has a fair chance to answer.

### Test (15 min)
15. From a second phone, call the business number and **don't answer** on the owner's phone. Confirm Upfirst picks up.
16. Run 5 test calls:
    - A normal question ("What are your hours?")
    - A job request ("My AC stopped working, can someone come out?")
    - A price question (it should NOT quote)
    - An urgent call (it should alert the owner right away)
    - A safety call ("I smell gas") (it should tell them to call 911 / the gas company)
17. Check that each summary showed up by text/email, and that names and numbers are right.
18. Fix any wrong answers in the knowledge base. Call again.
19. Test calls count toward the 100-call trial. Keep it to about 10.

### Go live (5 min)
20. Tell the owner: "It's live. Your phone rings first. If you don't pick up, it answers."
21. Write down: go-live date, Day 7 date, Day 14 date, trial end date.
22. Save a short "how to undo" note for the owner: how to turn forwarding off.

---

## 2-week check-in plan

| Day | What to do |
|---|---|
| Day 1 | Read every call summary. Fix wrong answers that day. |
| Day 3 | 5-minute text or call with the owner: "Anything it said that you didn't like?" |
| Day 7 | Pull the numbers so far (below). Check how close the trial is to 100 calls. |
| Day 10 | Fix anything still off. Ask the owner if they want booking added. |
| Day 12 | Make the Day-14 one-page report. |
| Day 14 | Day-14 talk (see script.md). Use the 14-day call count to show which Upfirst plan they'd likely need. $299 is due today (or $150 now + $149 next month if they ask). $49/mo starts after today. Then keep it on (owner picks a plan with **their** card) or turn it off and undo forwarding the same day. |

**Watch the trial limit:** the trial ends at 14 days **or** 100 calls. A busy shop, or a lot of spam, could use 100 calls before Day 14. (Upfirst says spam, calls under 15 seconds, and calls where nobody speaks don't count.) If it's close by Day 7, tell the owner.

## How to measure it (for Day 14)

Use Upfirst's call log and analytics. Count, for the 14 days:

1. **Calls the answerer picked up** (not spam). These are calls the owner didn't answer.
2. **Real leads:** calls asking for work or a quote.
3. **Leads the owner called back**, and how many turned into a booked job. (Ask the owner. Write their answer, don't guess.)
4. **After-hours calls** caught (nights and weekends).
5. **Urgent alerts** sent.
6. **Problems:** wrong answers, angry callers, hang-ups.

Simple Day-14 line: "In 14 days it picked up [X] calls you missed. [Y] were people asking for work. You told me [Z] became jobs."

Do not make up a dollar value. If the owner wants one, ask them what an average job is worth to them and do the math in front of them.

## Pitfalls

- **Forwarding is the hardest part.** Some cell plans or business lines handle "no answer" forwarding differently. Test it before you leave.
- **Undo it cleanly.** If they say no, turn off forwarding the same day. A dead forward means lost calls.
- **Texting rules (A2P 10DLC):** in the US, business texting sent by software from a regular 10-digit number has to be registered with the carriers (brand + campaign). The trial includes 25 texts. Before anyone counts on the answerer **texting customers**, ask Upfirst support whether they handle this registration and how long it takes. Summary texts to the owner are a smaller worry, but ask about those too. Source: https://www.twilio.com/docs/sms/a2p-10dlc
- **Dental and medical offices:** Upfirst lists HIPAA business associate agreements (BAAs) only on its Enterprise plan. For a dental office, keep the answerer to hours, directions and "we'll call you back." Don't let it collect health details. Better yet, offer them the review option instead.
- **Card on file:** never put Ryan's card on a client's account. If a tool needs a card, it's the owner's card or we pick another tool.
- **Accounts belong to the owner.** Sign up with the owner's email so they keep control if they leave.
- **Upfirst support hours:** real people Monday to Friday, 9 a.m. to 6 p.m. Eastern. Plan setup for a weekday.
- **Don't oversell.** It takes messages and answers simple questions. It won't run the business.
