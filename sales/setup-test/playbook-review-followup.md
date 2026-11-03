# Playbook: Automatic Review Follow-Up

Goal: in about 1 hour, set up a simple system that asks every customer for a Google review after a job, with one reminder, and run it free for 14 days.

## Tools (checked Nov 3, 2026)

| | Tool | Free terms | After the trial | Card? | Source |
|---|---|---|---|---|---|
| **Main** | Google review link + Google Sheets + Gmail (Apps Script) | Free. No trial clock. A free gmail.com account can send email to **100 recipients a day** from a script. | Still $0 a month. | **No card** | Review link: https://support.google.com/business/answer/16816815 · Script limits: https://developers.google.com/apps-script/guides/services/quotas |
| **Backup** | GatherUp (Local Businesses plan) | 14-day free trial with full access: connect a customer list, send requests, see reviews come in. | $124/mo month to month, or $99/mo billed yearly (1 location). Includes 300 texts and 3,000 emails a month per location. | **No card to start** ("nothing bills until you're ready to continue") | https://gatherup.com/pricing/ |

When to use the backup: the shop wants **automatic texts** and a dashboard, already has a customer list or job software to connect, and can afford about $99 to $124 a month after the trial. Most small shops in this test should start with the main option.

Also checked, not picked: NiceJob Starter ($95/mo, 14-day trial; https://get.nicejob.com/pricing). It's a fine tool, but the page doesn't say whether the trial needs a card, and it costs about the same as GatherUp.

**Who pays what after Day 14:**
- Main option: no tool bill. The business pays only Ryan's fee ($299 once + $49/mo).
- GatherUp: the business pays GatherUp directly on its own card. Ryan's fee is separate.

---

## Google's rules (read these first)

From Google's review policy (https://support.google.com/contributionpolicy/answer/7400114):
- **Ask everyone.** Don't only ask happy customers. Don't screen people first ("rate us 1 to 5, and if you pick 5 we'll send the Google link"). That's called review gating, and Google doesn't allow it.
- **No rewards.** No discount, gift, or entry into a drawing for a review.
- **Don't tell people what to write**, and don't pressure them to review while they're standing there.
- **Staff can't be given a review quota.**

Our emails follow all of this: same message to every customer, one reminder, then stop.

---

## Before the visit: collect from the owner (about 15 minutes)

1. Does the business have a **verified Google Business Profile**? Who can log in to it? (You need this for the review link.)
2. The owner's Google account (Gmail) they want the emails to come from. The emails should come from **the business**, not from Ryan.
3. How they track finished jobs today: job software (Jobber, Housecall Pro, Square, etc.), a paper book, texts, or nothing.
4. Who will add customers to the sheet after each job, and when (end of day is easiest).
5. Do they usually have customer **emails**, phone numbers, or both?
6. Any customers who should never be emailed (upset customers, family, warranty fights).
7. The owner's first name for signing the emails.
8. Today's Google review count and star rating (write these down for Day 14).

---

## Setup steps (about 1 hour)

### Get the review link (10 min)
1. On a **computer** (QR codes only work in a desktop browser), sign in to the owner's Google Business Profile.
2. Click **Read reviews**, then **Get more reviews**.
3. Click **Copy** to copy the review link. Right-click the QR code and **Save image as** to keep it.
4. Open the link in a private window to make sure it opens the review box for the right business.
5. Write down the starting review count and star rating, with today's date.

### Make the sheet (10 min)
6. In the **owner's** Google Drive, create a Google Sheet named "Review Follow-Up – [Business]".
7. Rename the first tab to `Customers`. In row 1, type these headers:
   `Name | Email | Job date | Ask sent | Reminder sent | Reviewed? | Do not email`
8. Add 1 test row with Ryan's or the owner's own email.

### Add the script (15 min)
9. In the sheet, click **Extensions → Apps Script**.
10. Delete what's there and paste the script below. Fill in the 3 lines at the top: business name, owner's first name, review link.
11. Click **Save**, then **Run** `sendReviewEmails`. Google will ask the owner to allow access (the owner clicks through; it's their own account). Google may show a "this app isn't verified" screen, because it's a private script; click **Advanced**, then go to the project.
12. Check the test inbox. The thank-you email should arrive, and column D should show the date.
13. To test the reminder: change the date in column D to 5 days ago, then click **Run** again. The reminder should arrive and column E should fill in. Run once more. Nothing should send.
14. Set the timer: in Apps Script, click **Triggers** (clock icon) → **Add Trigger** → function `sendReviewEmails`, event source **Time-driven**, **Day timer**, pick 10 a.m. to 11 a.m. Save.
15. Delete the test row.

```javascript
// Review follow-up for [BUSINESS NAME]. Runs inside the OWNER's Google account.
// Sheet tab "Customers", row 1 headers:
// A Name | B Email | C Job date | D Ask sent | E Reminder sent | F Reviewed? | G Do not email
var BUSINESS = '[Business Name]';
var OWNER = '[Owner first name]';
var REVIEW_LINK = '[paste Google review link]';
var REMINDER_AFTER_DAYS = 4;

function sendReviewEmails() {
  var sheet = SpreadsheetApp.getActive().getSheetByName('Customers');
  var rows = sheet.getDataRange().getValues();
  var now = new Date();
  for (var i = 1; i < rows.length; i++) {
    var name = String(rows[i][0]).trim();
    var email = String(rows[i][1]).trim();
    var askSent = rows[i][3];
    var reminderSent = rows[i][4];
    var reviewed = String(rows[i][5]).toLowerCase() === 'yes';
    var stop = String(rows[i][6]).toLowerCase() === 'yes';
    if (!email || stop || reviewed) continue;
    if (MailApp.getRemainingDailyQuota() < 1) return;
    var first = name.split(' ')[0] || 'there';
    if (!askSent) {
      MailApp.sendEmail(email, 'Thank you from ' + BUSINESS,
        'Hi ' + first + ',\n\nThanks for choosing ' + BUSINESS + '. If you have a minute, we would be grateful for an honest review on Google:\n\n' +
        REVIEW_LINK + '\n\nIf anything was not right, just reply to this email and ' + OWNER + ' will make it right.\n\nThank you,\n' + OWNER + '\n' + BUSINESS);
      sheet.getRange(i + 1, 4).setValue(now);
    } else if (!reminderSent && (now - new Date(askSent)) / 86400000 >= REMINDER_AFTER_DAYS) {
      MailApp.sendEmail(email, 'Quick reminder from ' + BUSINESS,
        'Hi ' + first + ',\n\nJust a friendly reminder. If you have a minute, an honest Google review helps a small local business like ours a lot:\n\n' +
        REVIEW_LINK + '\n\nThis is the last time we will ask. Thanks again,\n' + OWNER + '\n' + BUSINESS);
      sheet.getRange(i + 1, 5).setValue(now);
    }
  }
}
```

### Texts (optional, 5 min)
16. If the owner has phone numbers but no emails, **don't automate texts** in this test. Instead, save this as a text shortcut or note on the owner's phone, and have them send it **by hand** from their own phone after each job:
    "Hi [Name], thanks for choosing [Business]! If you have a minute, an honest Google review would really help us: [review link]. Thanks! – [Owner]"
    A person sending one text at a time from their own phone avoids the business-texting registration (below).

### Go live (5 min)
17. Show the owner (or the person who will do it) how to add a row after each job: name, email, job date. That's it.
18. Tell them: "When a customer leaves a review, put **yes** in 'Reviewed?' so they don't get a reminder." (Not required. The reminder only goes once, then stops anyway.)
19. Print the QR code for the counter, the truck, or the invoice, if they want it.
20. Write down: go-live date, Day 7, Day 14.

---

## 2-week check-in plan

| Day | What to do |
|---|---|
| Day 1 | Check that the first real emails went out (column D filled in). Look at the script's **Executions** page for errors. |
| Day 3 | Short text with the owner: "Are you adding customers after each job? Any replies?" |
| Day 7 | Count asks sent and new reviews. Remind the owner to keep adding rows. Most problems are "we forgot to add customers." |
| Day 10 | Help the owner reply to any new reviews (good or bad). Google suggests replying. |
| Day 12 | Make the Day-14 one-page report. |
| Day 14 | Day-14 talk (see script.md). Keep it running, or turn off the trigger and you're done. |

## How to measure it (for Day 14)

1. **Review requests sent:** count rows with a date in column D.
2. **Reminders sent:** count column E.
3. **New Google reviews in 14 days:** today's review count minus the starting count. Note the star rating then and now.
4. **Replies:** emails customers sent back (some will be problems the owner can fix, which is good to know).
5. Note that a new review may come from someone who wasn't on the sheet. Count all new reviews, but say which ones you can match to a request.

Simple Day-14 line: "We asked [X] customers. You got [Y] new Google reviews in 2 weeks. Before, you had [A] reviews. Now you have [B]."

Don't promise a number of reviews up front. Some weeks will be slow.

## Pitfalls

- **Nobody adds customers.** This is the main way it fails. Make adding a row part of closing out a job. If they use job software, export a list at the end of each day.
- **Daily email limit:** a free gmail.com account can send to 100 people a day from a script. That's plenty for a small shop. A Google Workspace account gets 1,500. The script stops on its own when the limit is hit and picks up the next day.
- **Spam folder:** emails from a brand-new script can land in spam. Test with a Gmail and an Outlook/Yahoo address. Keep it short, one link, no images.
- **Texting rules (A2P 10DLC):** in the US, automated business texts from a regular 10-digit number must be registered with the carriers, and they need the customer's opt-in. Registration can take days. That's why the main option sends emails automatically and leaves texts to the owner's own phone, one at a time. If a shop wants automated texts, use GatherUp and ask them how they handle registration before going live. Source: https://www.twilio.com/docs/sms/a2p-10dlc
- **No review gating.** Don't add a "how did we do?" step that only sends happy people to Google.
- **No unverified profile, no link.** If the Google Business Profile isn't verified, fix that first. That can take days, so check it before you agree to a start date.
- **Accounts belong to the owner.** The sheet, script and profile live in the owner's Google account. Ryan gets shared access only if the owner wants him to have it.
- **Turning it off:** delete the trigger in Apps Script (Triggers → three dots → Delete). Emails stop right away.
