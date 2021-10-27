---
id: node
title: Node.js / JavaScript / Typescript Library
sidebar_label: Node.js Library
---

## Overview

Our Node.js library is written in Typescript and can be found here:

https://github.com/ohmysmtp/ohmysmtp.js

## Installation

If using NPM

`npm install --save @ohmysmtp/ohmysmtp.js`

If using Yarn

`yarn add @ohmysmtp/ohmysmtp.js`

## Sending an email

```javascript
const OhMySMTP = require('@ohmysmtp/ohmysmtp.js');
const client = new OhMySMTP.DomainClient('API_TOKEN_HERE');

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

See [the ./docs folder](https://github.com/ohmysmtp/ohmysmtp.js/docs) for more documentation and options