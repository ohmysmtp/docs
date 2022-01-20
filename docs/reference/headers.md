---
id: headers
title: Headers
sidebar_label: Headers
---

## Required headers

Along with the `MailPace-Server-Token` header documented here: [Authentication Headers](authentication), you must include two other headers:

| Header Name     | Contents    | |
| :------------- | :---------- | :----------- |
|  Accept | `application/json` | **Required** |
|  Content-Type | `application/json` | **Required** |

These ensure that your request is sent as a JSON request and our API returns any messages or statuses in JSON format.