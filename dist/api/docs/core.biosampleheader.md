<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@digitalpersona/core](./core.md) &gt; [BioSampleHeader](./core.biosampleheader.md)

## BioSampleHeader class

Contains meta-information about biometric sample data.

<b>Signature:</b>

```typescript
export declare class BioSampleHeader 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(Factor, Format, Type, Purpose, Quality, Encryption)](./core.biosampleheader.(constructor).md) |  | Constructs a new instance of the <code>BioSampleHeader</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [Encryption](./core.biosampleheader.encryption.md) |  | <code>BioSampleEncryption</code> | Encryption of biometric sample. |
|  [Factor](./core.biosampleheader.factor.md) |  | <code>BioFactor</code> | Biometric factor. Must be set to 8 for fingerprint. |
|  [Format](./core.biosampleheader.format.md) |  | <code>BioSampleFormat</code> | Format owner (vendor) information. |
|  [Purpose](./core.biosampleheader.purpose.md) |  | <code>BioSamplePurpose</code> | Purpose of the biometric sample. |
|  [Quality](./core.biosampleheader.quality.md) |  | <code>number</code> | Quality of biometric sample. If we don't support quality it should be set to -1. |
|  [Type](./core.biosampleheader.type.md) |  | <code>BioSampleType</code> | Biometric sample representation type. |

