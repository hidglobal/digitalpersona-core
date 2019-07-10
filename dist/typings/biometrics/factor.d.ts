import { Base64UrlString } from "../encoders";
/**
 * Biometric factors.
 */
export declare enum BioFactor {
    Multiple = 1,
    FacialFeatures = 2,
    Voice = 4,
    Fingerprint = 8,
    Iris = 16,
    Retina = 32,
    HandGeometry = 64,
    SignatureDynamics = 128,
    KeystrokeDynamics = 256,
    LipMovement = 512,
    ThermalFaceImage = 1024,
    ThermalHandImage = 2048,
    Gait = 4096
}
/**
 * Biometric owner ID registered with {@link http://www.ibia.org/base/cbeff/_biometric_org.phpx | IBIA}.
 */
export declare enum BioSampleFormatOwner {
    None = 0,
    /** Neurotechnologija (fingerprints). */
    Neurotechnologija = 49,
    /** DigitalPersona (fingerprints) */
    DigitalPersona = 51,
    /** Cognitec (face) */
    Cognitec = 99,
    /** Innovatrics (face) */
    Innovatrics = 53
}
/**
 * Biometric sample format info.
 */
export declare class BioSampleFormat {
    readonly FormatOwner: BioSampleFormatOwner;
    readonly FormatID: number;
    constructor(FormatOwner: BioSampleFormatOwner, FormatID: number);
}
/**
 * A representation type of a biometric sample.
 */
export declare enum BioSampleType {
    Raw = 1,
    Intermediate = 2,
    Processed = 4,
    RawWSQCompressed = 8,
    Encrypted = 16,
    Signed = 32
}
/**
 * A purpose the biometric sample was intended for.
 */
export declare enum BioSamplePurpose {
    Any = 0,
    Verify = 1,
    Identify = 2,
    Enroll = 3,
    EnrollForVerificationOnly = 4,
    EnrollForIdentificationOnly = 5,
    Audit = 6
}
/**
 * A biometric sample encryption type.
 */
export declare enum BioSampleEncryption {
    None = 0,
    XTEA = 1
}
/**
 * Contains meta-information about biometric sample data.
 */
export declare class BioSampleHeader {
    /** Biometric factor. Must be set to 8 for fingerprint. */
    Factor: BioFactor;
    /** Format owner (vendor) information. */
    Format: BioSampleFormat;
    /** Biometric sample representation type. */
    Type: BioSampleType;
    /** Purpose of the biometric sample. */
    Purpose: BioSamplePurpose;
    /** Quality of biometric sample. If we don't support quality it should be set to -1.  */
    Quality: number;
    /** Encryption of biometric sample. */
    Encryption: BioSampleEncryption;
    constructor(
    /** Biometric factor. Must be set to 8 for fingerprint. */
    Factor: BioFactor, 
    /** Format owner (vendor) information. */
    Format: BioSampleFormat, 
    /** Biometric sample representation type. */
    Type: BioSampleType, 
    /** Purpose of the biometric sample. */
    Purpose: BioSamplePurpose, 
    /** Quality of biometric sample. If we don't support quality it should be set to -1.  */
    Quality: number, 
    /** Encryption of biometric sample. */
    Encryption: BioSampleEncryption);
}
/**
 * A biometric sample.
 */
export declare class BioSample {
    /** Biometric sample header. */
    readonly Header: BioSampleHeader;
    /** Base64url encoded biometric sample data */
    readonly Data: Base64UrlString;
    /** A version info. */
    readonly Version = 1;
    constructor(
    /** Biometric sample header. */
    Header: BioSampleHeader, 
    /** Base64url encoded biometric sample data */
    Data: Base64UrlString);
}
