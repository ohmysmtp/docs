---
id: webhooks
title: Webhooks
sidebar_label: Webhooks
---

We can send optional Webhooks (HTTPS POST requests) to an endpoint of your choice when certain events happen in the OhMySMTP API.

To set this up, open the Webhooks section of your Domain. Here you can add or remove endpoints and see recently sent webhooks.

> Note that endpoint URLs must use TLS/SSL, and start with `https://`

Webhooks are sent as JSON POST requests, with a Content-Type of `application/json`

## Events

All webhook event bodies have two properties:

- `event` a string with the event name, e.g. email.delivered
- `payload` a JSON object containing the event details (see below for details)

### Email Events

| Event | Description |
| :------------- | :---------- | 
| email.queued | Occurs when an email is added to the queue for sending |
| email.delivered | Occurs when an email is accepted by the recipient's SMTP server |
| email.deferred | Occurs when an email soft-bounces and is marked for redelivery |
| email.bounced | Occurs when an email hard bounces, delivery will not be attempted again |
| email.spam | Occurs when our internal filter identifies an email as spam, delivery will not be attempted |

#### Payload Properties

| Key | Type | Details | Nullable* |
| :------------- | :---------- | :---------- | :---------- | 
`status` | String | Email status, one of either queued, delivered, deferred, bounced or spam| No |
`id` | Integer | Reference ID of email | No |
`domain_id` | Integer | Reference ID of sending Domain | No |
`created_at` | DateTime | Timestamp of when the email was first received by our API| No |
`updated_at` | DateTime | Timestamp of when the email was last updated, typically a status change | No |
`from` | String | From email address | No |
`to` | String | To email address, may be a comma separated list if multiple recipients provided | Yes |
`htmlbody` | String | HTML body in email | Yes |
`textbody` | String | Text body in email| Yes |
`cc` | String | Carbon Coop email address, may be a comma separated list if multiple recipients provided | Yes |
`bcc` | String | Blind Carbon Copy email address, may be a comma separated list if multiple recipients provided| Yes |
`subject` | String | Email subject | Yes |
`replyto` | String | Reply to address | Yes |
`message_id` | String | Message ID set by OhMySMTP, in the format `<message-id>@<mailer.ohmysmtp.com>` | No |
`list_unsubscribe` | String | List-Unsubscribe header | Yes |

*Properties that are marked as nullable are optional and will appear as `null` in the body if undefined*


#### Example Body

```json
{
    "event": "email.queued",
    "payload": {
        "status": "queued",
        "id": 1,
        "domain_id": 1,
        "created_at": 2021-11-16T14:50:15.445Z,
        "updated_at": 2021-11-16T14:50:15.445Z,
        "from": "string",
        "to": "string",
        "htmlbody": "string",
        "textbody": "string",
        "cc": "string",
        "bcc": "string",
        "subject": "string",
        "replyto": "string",
        "message_id": "string",
        "list_unsubscribe": "string"
    }
}
```
