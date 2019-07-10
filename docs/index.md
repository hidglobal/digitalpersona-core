---
layout: default
title: Overview
has_toc: false
nav_order: 1  
---
##### [DigitalPersona Access Management API ](https://hidglobal.github.io/digitalpersona-access-management-api/)/ Web Access Core / Overview  
![](assets/HID-DPAM-Core.png)  

The DigitalPersona Web Access Core library
[[@digitalpersona/core](https://www.npmjs.com/package/@digitalpersona/core)]
is a collection of Typescript/Javascript classes and functions shared by
DigitalPersona Web Access Management APIs, such as  

- [@digitalpersona/authentication](https://www.npmjs.com/package/@digitalpersona/authentication)  
- [@digitalpersona/enrollment](https://www.npmjs.com/package/@digitalpersona/enrollment)  
- [@digitalpersona/devices](https://www.npmjs.com/package/@digitalpersona/devices).

The library consists of these major parts.

* Encoders to convert data between different formats (`UTF8`, `UTF16`, `Base64`, `Base64Url`, `Base32`)
* A base `Credential` type and derived classes for all supported credentials
* JSON Web Token utilities and a list of supported claims
* A `UserName` class with support of different user name types (SAM, UPN, GUID etc)
* A `BioSample` class and supporting utilities for biometric data transfer
* URL utilities

## Requirements

Major browsers (Chrome, Firefox, Edge, IE11) and Node JS are supported.
Node JS requires a shim for `atob` and `btoa` functions, for example:

```js
const base64 = require('base-64');
global.btoa = function(s) { return base64.encode(s); }
global.atob = function(s) { return base64.decode(s); }
```

This library uses TypeScript as its main language.
It is also transpiled to Javascript (ES5 and ES6 platforms are supported) for browsers and distributed both in unbundled and bundled (UMD) form.

## Additional documentation:

* [Tutorial](./tutorial.md)
* [How-to](./how-to.md)
* [Reference](./reference.md)
