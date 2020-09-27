---
id: send
title: Send
sidebar_label: Send
---

## The Send Endpoint

The `/send` endpoint is the main API endpoint for sending messages through OhMySMTP. It accepts up to 50 emails in the `To` address field.

## Send an email

### Endpoint address

[https://app.ohmysmtp.com/api/v1/send](https://app.ohmysmtp.com/api/v1/send)

*Only HTTPS is supported*


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
