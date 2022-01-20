---
id: node
title: Node.js / JavaScript / Typescript Library
sidebar_label: Node.js
---

## Overview

Our Node.js library is written in Typescript and can be found here:

https://github.com/mailpace/mailpace.js

## Installation

If using NPM

`npm install --save @mailpace/mailpace.js`

If using Yarn

`yarn add @mailpace/mailpace.js`

## Sending an email

```javascript
const MailPace = require('@mailpace/mailpace.js');
const client = new MailPace.DomainClient('API_TOKEN_HERE');

client
  .sendEmail({
    from: 'test@test.com',
    to: 'test@test.com',
    subject: 'test',
    htmlbody: '<H1>HTML Email</h1>',
  })
  .then((r) => {
    console.log(r);
  });
```

## Further details

See [the ./docs folder](https://github.com/mailpace/mailpace.js/docs) for more documentation and options