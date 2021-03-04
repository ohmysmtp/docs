---
id: blocklist
title: Block Lists & Allow Lists
sidebar_label: Block Lists
---
## Block Lists

When an email [Bounces](./lifecycle#status-reference), we will be notified that the email server we are sending to does not want to receive this email. This is a very strong signal from the server to stop sending further emails to this particular recipient. 

Therefore, we add email addresses that have bounced to a Block List, and will not longer send to that address from the sending domain.

You can remove emails from this Block List if required, from the "Block List" page of your domain.

## Allow Lists

:::caution
Use this feature with caution, it can significantly affect the reputation of our IP addresses and your Domain 
:::

In some rare cases you may want to override this Block List and always send to a particular recipient regardless of feedback from the server. In this situation, you can add addresses to an Allow List, available on the Block List page.

Addresses in the Allow List will always we be sent to, and will not be added to the Block List.

Note that emails picked up by our spam filter, will still be blocked regardless of Allow List status.
