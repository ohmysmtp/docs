---
id: send
title: Send
sidebar_label: Send
---

## The Send Endpoint

The `/send` endpoint is the main API endpoint for sending messages through OhMySMTP

## Send an email

### Endpoint address

[https://app.ohmysmtp.com/api/v1/send](https://app.ohmysmtp.com/api/v1/send)

*Only HTTPS is supported*

### Limitations

- You can send to up 50 email addresses in one go in the `To` address fields
- The endpoint supports a total email size of 50 MB

### Headers

| Header Name     | Contents    | |
| :------------- | :---------- | :----------- |
|  Accept | `application/json` | **Required** |
|  Content-Type | `application/json` | **Required** |
|  OhMySMTP-Server-Token | See [authentication](authentication) for details | **Required**  |

### Body Parameters

| Name | Type | Examples | Validations | | 
| :------------- | :---------- | :----------- | :----------- | :----------- |
| from | string | `example@domain.com` <br /> <br /> `Full Name <example@domain.com>` | Must be an email address or name & addr-spec as specified in https://tools.ietf.org/html/rfc822. Domain must be the domain associated with this API token. |  **Required** |
| to | string | `example@domain.com` <br /> <br /> `Full Name <example@domain.com>` <br /> <br /> `example@domain.com, example2@domain.com, Full Name <example3@domain.com>` | Must be an email address, name & addr-spec as specified in https://tools.ietf.org/html/rfc822 or a comma separated list of email addresses |  **Required** |
| htmlbody | string | `<html><body><p>Content</p></body></html>` | Enclosing html tags are optional |  **Required if textbody not supplied** |
| textbody | string | `Content` |  |  **Required if htmlbody not supplied** |
| cc | string | `example@domain.com` | Must be an email address |  *Optional* |
| bcc | string | `example@domain.com` | Must be an email address |  *Optional* |
| subject | string | `Email Subject` |  |  *Optional* |
| replyto | string | `example@domain.com` |  |  *Optional* |
| attachments | array of attachment objects (see below) | [ Name: "attachment.jpg", "ContentID": "cid:attachment.jpg", "Content": "abcdefghijek", ContentType": "image/jpeg" ] |  |  *Optional* File types are allow-listed (see below) |

#### Attachments

To send attachments over the API use the following array of objects format as the `attachments` property:

```javascript
[
    {
        Name: "This is what will be displayed to the end user e.g. filename.jpg",
        ContentID: "optional, used for referencing in the body of the email e.g. cid:name.jpg",
        Content: "the file, as a base64 encoded string",
        ContentType: "MIME type e.g. image/jpeg"
    },
    { ... }
]
```

That the content field (the attachment itself) should be a base64 encoded string. You can easily convert files to base64 strings in most programming languages.

Only the following attachment extensions are supported:

`jpeg`, `jpg`, `png`, `gif`, `txt`, `pdf`, `docx`, `xlsx`, `pptx`, `csv`, `att`,

Files with an extension other than the above will be dropped. If you need to send an attachment type that is not specified in the list above, contact our Support team.