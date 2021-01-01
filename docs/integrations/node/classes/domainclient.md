---
id: "domainclient"
title: "Class: DomainClient"
sidebar_label: "DomainClient"
---

Client class that can be used to interact with an OhMySMTP Domain

## Hierarchy

* *BaseClient*

  ↳ **DomainClient**

## Constructors

### constructor

\+ **new DomainClient**(`domainToken`: *string*, `configOptions?`: *Configuration*): [*DomainClient*](domainclient.md)

Create a client for sending emails from a domain

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`domainToken` | *string* | The API token for the domain   |
`configOptions?` | *Configuration* | Configuration options for accessing the API    |

**Returns:** [*DomainClient*](domainclient.md)

Defined in: [DomainClient.ts:10](https://github.com/ohmysmtp/ohmysmtp.js/blob/613f020/src/lib/DomainClient.ts#L10)

## Properties

### clientVersion

• `Readonly` **clientVersion**: *string*

Defined in: [BaseClient.ts:22](https://github.com/ohmysmtp/ohmysmtp.js/blob/613f020/src/lib/BaseClient.ts#L22)

___

### errorHandler

• `Protected` `Readonly` **errorHandler**: *ErrorHandler*

Defined in: [BaseClient.ts:24](https://github.com/ohmysmtp/ohmysmtp.js/blob/613f020/src/lib/BaseClient.ts#L24)

___

### httpClient

• `Readonly` **httpClient**: AxiosInstance

Defined in: [BaseClient.ts:23](https://github.com/ohmysmtp/ohmysmtp.js/blob/613f020/src/lib/BaseClient.ts#L23)

___

### DefaultOptions

▪ `Readonly` `Static` **DefaultOptions**: *Configuration*

Default options

Defined in: [BaseClient.ts:17](https://github.com/ohmysmtp/ohmysmtp.js/blob/613f020/src/lib/BaseClient.ts#L17)

## Methods

### getOptions

▸ **getOptions**(): *Configuration*

**Returns:** *Configuration*

Defined in: [BaseClient.ts:42](https://github.com/ohmysmtp/ohmysmtp.js/blob/613f020/src/lib/BaseClient.ts#L42)

___

### prepareHeaders

▸ **prepareHeaders**(): *object*

Prepare the default HTTP Request Headers

**Returns:** *object*

Defined in: [BaseClient.ts:49](https://github.com/ohmysmtp/ohmysmtp.js/blob/613f020/src/lib/BaseClient.ts#L49)

___

### processRequestWithBody

▸ `Protected`**processRequestWithBody**<T\>(`method`: POST, `path`: *string*, `body`: *object*, `callback?`: *Callback*<T\>): *Promise*<T\>

Prepare the request and send on

**`see`** processRequest for more details.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`method` | POST |
`path` | *string* |
`body` | *object* |
`callback?` | *Callback*<T\> |

**Returns:** *Promise*<T\>

Defined in: [BaseClient.ts:63](https://github.com/ohmysmtp/ohmysmtp.js/blob/613f020/src/lib/BaseClient.ts#L63)

___

### sendEmail

▸ **sendEmail**(`email`: *Message*, `callback?`: *Callback*<SendResponse\>): *Promise*<SendResponse\>

Send a single email message through the API

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`email` | *Message* | - |
`callback?` | *Callback*<SendResponse\> | A callback that if provided will be called after sending the email is complete   |

**Returns:** *Promise*<SendResponse\>

A promise that will resolve when the API responds (or an error occurs)

Defined in: [DomainClient.ts:27](https://github.com/ohmysmtp/ohmysmtp.js/blob/613f020/src/lib/DomainClient.ts#L27)
