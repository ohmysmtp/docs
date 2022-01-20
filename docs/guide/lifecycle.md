---
id: lifecycle
title: Email Lifecycle
sidebar_label: Lifecycle
---

## Email Statuses

When you send an email through our API, SMTP server or other integrations, the email will be added to your queue, and end up in a particular status during the sending process. The status of each email sent is available on your dashboard.

### Status Reference

| Status | Description |
| :------------- | :---------- | 
| Queued | Email is pending processing, and will be sent shortly. If an email remains in this state permanently, reach out to support@mailpace.com to resolve |
| Delivered | Email has been accepted by the addressed SMTP server, and should appear in the users Inbox. Note that this does not guarantee delivery, only that the SMTP server has accepted the message |
| Deferred | The addressed SMTP server has responded with a temporary error and the email will retry delivery periodically for up to 48 hours. Deferred details will appear below the email in the dashboard, with details of the reason for deferral and next retry time |
| Bounced | Email has been rejected by the SMTP server. This could be due to a mistyped email address, a spam or other rejection from the server, or any other permanent error. Bounce reports will appear below the email in the dashboard, with details of the bounce status and reason |
| Spam | Our internal spam filter has flagged this as suspected spam, and it cannot be sent through our API |