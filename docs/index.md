---
layout: default
title: Overview
has_toc: false
nav_order: 1  
---
{% include header.html %}  
<BR>  

# Overview
{% include dpam-intro.md %}

As a part of {{ site.data.product.shortName }}, the {{ site.data.lib.name }} library
[[{{ site.data.lib.package }}]({{ site.data.lib.npm }})]
provides Typescript/Javascript classes and functions shared by other
{{ site.data.product.shortName }} APIs, such as

- [@digitalpersona/authentication](https://www.npmjs.com/package/@digitalpersona/authentication)  
- [@digitalpersona/enrollment](https://www.npmjs.com/package/@digitalpersona/enrollment)  
- [@digitalpersona/devices](https://www.npmjs.com/package/@digitalpersona/devices).

The library consists of these major parts:

* Encoders to convert data between different formats (`UTF8`, `UTF16`, `Base64`, `Base64Url`, `Base32`)
* A base `Credential` type and derived classes for all supported credentials
* JSON Web Token utilities and a list of supported claims
* A `UserName` class with support for different user name types (SAM, UPN, GUID etc)
* A `BioSample` class and supporting utilities for biometric data transfer
* URL utilities

## Requirements

{% include reqs/platforms.md %}

{% include reqs/languages.md %}

### Browser support

No special requirements.

### Node JS support

{% include shims/node-base64.md %}

## Additional documentation

* [Tutorial](./tutorial.md)
* [How-to](./how-to.md)
* [Reference](./reference.md)
* [Library Maintenance](./maintain/index.md)
