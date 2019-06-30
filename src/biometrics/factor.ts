import { Base64UrlString } from "../encoders";

/**
 * Biometric factors.
 */
export enum BioFactor
{
    Multiple            = 0x0001,
    FacialFeatures      = 0x0002,
    Voice               = 0x0004,
    Fingerprint         = 0x0008,
    Iris                = 0x0010,
    Retina              = 0x0020,
    HandGeometry        = 0x0040,
    SignatureDynamics   = 0x0080,
    KeystrokeDynamics   = 0x0100,
    LipMovement         = 0x0200,
    ThermalFaceImage    = 0x0400,
    ThermalHandImage    = 0x0800,
    Gait                = 0x1000,
}

/**
 * Biometric owner ID registered with {@link http://www.ibia.org/base/cbeff/_biometric_org.phpx | IBIA}.
 */
export enum BioSampleFormatOwner
{
    None                = 0,
    /** Neurotechnologija (fingerprints). */
    Neurotechnologija   = 49,
    /** DigitalPersona (fingerprints) */
    DigitalPersona      = 51,
    /** Cognitec (face) */
    Cognitec            = 99,
    /** Innovatrics (face) */
    Innovatrics         = 53,
}

/**
 * Biometric sample format info.
 */
export class BioSampleFormat
{
    constructor(
        public readonly FormatOwner: BioSampleFormatOwner,
        public readonly FormatID: number,                        // Vendor specific format ID
    ){}
}

/**
 * A representation type of a biometric sample.
 */
export enum BioSampleType
{
    Raw                 = 0x01,   // Raw image
    Intermediate        = 0x02,   // Feature set
    Processed           = 0x04,   // Template
    RawWSQCompressed    = 0x08,   // WSQ compressed image
    Encrypted           = 0x10,
    Signed              = 0x20,
}

/**
 * A purpose the biometric sample was intended for.
 */
export enum BioSamplePurpose
{
    Any                         = 0,
    Verify                      = 1,
    Identify                    = 2,
    Enroll                      = 3,
    EnrollForVerificationOnly   = 4,
    EnrollForIdentificationOnly = 5,
    Audit                       = 6
}

/**
 * A biometric sample encryption type.
 */
export enum BioSampleEncryption
{
    None   = 0,     // Data is not encrypted
    XTEA    = 1,    // XTEA encryption with well known key
}

/**
 * Contains meta-information about biometric sample data.
 */
export class BioSampleHeader
{
    constructor(
        /** Biometric factor. Must be set to 8 for fingerprint. */
        public Factor: BioFactor,
        /** Format owner (vendor) information. */
        public Format: BioSampleFormat,
        /** Biometric sample representation type. */
        public Type: BioSampleType,
        /** Purpose of the biometric sample. */
        public Purpose: BioSamplePurpose,
        /** Quality of biometric sample. If we don't support quality it should be set to -1.  */
        public Quality: number,
        /** Encryption of biometric sample. */
        public Encryption: BioSampleEncryption,
    ){}
}

/**
 * A biometric sample.
 */
export class BioSample
{
    /** A version info. */
    public readonly Version = 1;

    constructor(
        /** Biometric sample header. */
        public readonly Header: BioSampleHeader,
        /** Base64url encoded biometric sample data */
        public readonly Data: Base64UrlString,
    ){}
}
