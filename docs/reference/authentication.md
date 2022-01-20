---
id: authentication
title: Authenticating with the API
sidebar_label: Authentication
---

## Authenticating Requests

Authenticating with the MailPace API is simple and easy to do with all HTTP libraries, all you need to do is provide a single header in your HTTP POST request, called `MailPace-Server-Token` containing your API token

## API Tokens

API tokens can be found under the "API Tokens" menu of a each Domain, there is one unique API token for every domain

Your API token is a string which provides access to send emails from your domain. Anyone with this token can send emails on your behalf, so please keep it a secret to prevent abuse. For web applications you should use environment variables or appropriate secret management software, such as [Hashicorp's Vault](https://www.vaultproject.io/).

If you suspect that your API token has been leaked or stolen, please contact us so we can regenerate a token for you

## Examples 

Replace `TOKEN_GOES_HERE` with your token:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="curl"
  values={[
    { label: 'cURL', value: 'curl', },
    { label: 'Node.js', value: 'js', }
  ]
}>

  <TabItem value="curl">

  ```bash
  curl "https://app.mailpace.com/api/v1/send" \
      -X POST \
      -H "Accept: application/json" \
      -H "Content-Type: application/json" \
      -H "MailPace-Server-Token: TOKEN_GOES_HERE"

  ```

  </TabItem>
  <TabItem value="js">

  ```js
  var request = require('request');

  var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'MailPace-Server-Token': 'TOKEN_GOES_HERE'
  };

  ```

  </TabItem>
</Tabs>
