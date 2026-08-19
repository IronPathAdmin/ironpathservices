# Gmail setup for website forms

All website email forms are addressed to `leads@ironpathservices.com`.

The website gives each message a predictable subject:

```text
Website Form | Job Type | Customer name or email
```

Examples:

```text
Website Form | Junk Removal | Jane Doe
Website Form | Cleaning Services | Alex Smith
Website Form | Customer Review | customer@example.com
Website Form | Newsletter Signup | customer@example.com
```

Gmail calls folders **labels**. The website cannot change private Gmail settings, so these labels and filters require a one-time setup in the Gmail inbox that receives `leads@ironpathservices.com`.

## Create the parent filter

1. Open Gmail and select **Settings**, then **See all settings**.
2. Open **Filters and Blocked Addresses** and select **Create a new filter**.
3. In **Subject**, enter `Website Form |`.
4. Select **Create filter**.
5. Enable **Apply the label** and create the label `Website Forms`.
6. Optionally enable **Never send it to Spam** and **Also apply filter to matching conversations**.
7. Select **Create filter**.

## Create job-type labels

Create these labels and nest each one under `Website Forms`:

- Cleaning Services
- Junk Removal
- Document Shredding
- Firewood Sales
- Vending & ATM
- Multiple services
- General Quote
- Customer Review
- Newsletter Signup
- General Request
- Volunteer Application
- Customer Evaluation
- Image Submission
- Karaoke & Red Carpet
- Karaoke hosting
- Karaoke hosting + Red Carpet Moment
- Red Carpet Moment only
- Holiday or large event quote
- Just asking a question

## Create each job-type filter

Repeat the filter steps for each job type. In the **Subject** field, use the complete prefix and apply the matching nested label.

| Subject filter | Gmail label |
| --- | --- |
| `Website Form | Cleaning Services |` | `Website Forms/Cleaning Services` |
| `Website Form | Junk Removal |` | `Website Forms/Junk Removal` |
| `Website Form | Document Shredding |` | `Website Forms/Document Shredding` |
| `Website Form | Firewood Sales |` | `Website Forms/Firewood Sales` |
| `Website Form | Vending & ATM |` | `Website Forms/Vending & ATM` |
| `Website Form | Multiple services |` | `Website Forms/Multiple services` |
| `Website Form | General Quote |` | `Website Forms/General Quote` |
| `Website Form | Customer Review |` | `Website Forms/Customer Review` |
| `Website Form | Newsletter Signup |` | `Website Forms/Newsletter Signup` |
| `Website Form | General Request |` | `Website Forms/General Request` |
| `Website Form | Volunteer Application |` | `Website Forms/Volunteer Application` |
| `Website Form | Customer Evaluation |` | `Website Forms/Customer Evaluation` |
| `Website Form | Image Submission |` | `Website Forms/Image Submission` |
| `Website Form | Karaoke & Red Carpet |` | `Website Forms/Karaoke & Red Carpet` |
| `Website Form | Karaoke hosting |` | `Website Forms/Karaoke hosting` |
| `Website Form | Karaoke hosting + Red Carpet Moment |` | `Website Forms/Karaoke hosting + Red Carpet Moment` |
| `Website Form | Red Carpet Moment only |` | `Website Forms/Red Carpet Moment only` |
| `Website Form | Holiday or large event quote |` | `Website Forms/Holiday or large event quote` |
| `Website Form | Just asking a question |` | `Website Forms/Just asking a question` |

Each email body is plain text with separate **Form Details**, **Contact Information**, **Job Details**, and **Message** sections so it remains readable in Gmail and on phones.

## Secure Paper Shredding (Tally)

The Secure Paper Shredding Intake form is now a Tally form (`0QqM0Q`), not a website email form. Submissions are sent by Tally's own email notifications.

In Tally, set notifications to `leads@ironpathservices.com`. Then create a Gmail filter for that form's subject or sender and apply `Website Forms/Document Shredding`.

## Current delivery behavior

Selecting **Send by Email** opens the visitor's email application with the recipient, subject, and organized form body already filled in. The visitor must select **Send** in their email application. The website does not store the submission.
