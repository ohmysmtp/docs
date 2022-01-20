---
id: introduction
title: Introduction
sidebar_label: Introduction
slug: /
---

## The Basics

MailPace provides an HTTPS API, SMTP Server and several libraries for sending emails that completely removes the need for any email setup or active email management. Emails sent through the MailPace API can come from any address for any domain that you are able to verify ownership of through a simple DNS update.

- **MailPace can only be used for Transactional Email**. Sending marketing emails, bulk newsletters or other non-transactional content is strictly prohibited. Contact support if you need more details about whether your email is considered transactional or not

- **Ownership of your domain must be confirmed** by DKIM verification before any emails can be sent

- **Batch emails are not supported**, however you can send to a maximum of 50 email addresses in one go by including them as comma separated values in the To field

- **All emails are signed with DKIM by default** this helps ensure emails are reliably confirmed by recipients as being sent from your domain

- **Static IP addresses are not available**, our IP addresses are shared by other customers to maximise delivery rates and decrease time to inbox

- **Additional SPF and DMARC configuration is optional**, we use the return path header of the email to ensure all SPF checks pass without this, but you can enable these in the [verification](../guide/verification.md) section if required

- **Only HTTPS is supported**, HTTP without encryption is insecure and we just don't support it  

## Getting Support

Contact us via email: [support@mailpace.com](mailto:support@mailpace.com)