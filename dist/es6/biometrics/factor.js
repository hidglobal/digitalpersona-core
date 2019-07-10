/**
 * Biometric factors.
 */
export var BioFactor;
(function (BioFactor) {
    BioFactor[BioFactor["Multiple"] = 1] = "Multiple";
    BioFactor[BioFactor["FacialFeatures"] = 2] = "FacialFeatures";
    BioFactor[BioFactor["Voice"] = 4] = "Voice";
    BioFactor[BioFactor["Fingerprint"] = 8] = "Fingerprint";
    BioFactor[BioFactor["Iris"] = 16] = "Iris";
    BioFactor[BioFactor["Retina"] = 32] = "Retina";
    BioFactor[BioFactor["HandGeometry"] = 64] = "HandGeometry";
    BioFactor[BioFactor["SignatureDynamics"] = 128] = "SignatureDynamics";
    BioFactor[BioFactor["KeystrokeDynamics"] = 256] = "KeystrokeDynamics";
    BioFactor[BioFactor["LipMovement"] = 512] = "LipMovement";
    BioFactor[BioFactor["ThermalFaceImage"] = 1024] = "ThermalFaceImage";
    BioFactor[BioFactor["ThermalHandImage"] = 2048] = "ThermalHandImage";
    BioFactor[BioFactor["Gait"] = 4096] = "Gait";
})(BioFactor || (BioFactor = {}));
/**
 * Biometric owner ID registered with {@link http://www.ibia.org/base/cbeff/_biometric_org.phpx | IBIA}.
 */
export var BioSampleFormatOwner;
(function (BioSampleFormatOwner) {
    BioSampleFormatOwner[BioSampleFormatOwner["None"] = 0] = "None";
    /** Neurotechnologija (fingerprints). */
    BioSampleFormatOwner[BioSampleFormatOwner["Neurotechnologija"] = 49] = "Neurotechnologija";
    /** DigitalPersona (fingerprints) */
    BioSampleFormatOwner[BioSampleFormatOwner["DigitalPersona"] = 51] = "DigitalPersona";
    /** Cognitec (face) */
    BioSampleFormatOwner[BioSampleFormatOwner["Cognitec"] = 99] = "Cognitec";
    /** Innovatrics (face) */
    BioSampleFormatOwner[BioSampleFormatOwner["Innovatrics"] = 53] = "Innovatrics";
})(BioSampleFormatOwner || (BioSampleFormatOwner = {}));
/**
 * Biometric sample format info.
 */
export class BioSampleFormat {
    constructor(FormatOwner, FormatID) {
        this.FormatOwner = FormatOwner;
        this.FormatID = FormatID;
    }
}
/**
 * A representation type of a biometric sample.
 */
export var BioSampleType;
(function (BioSampleType) {
    BioSampleType[BioSampleType["Raw"] = 1] = "Raw";
    BioSampleType[BioSampleType["Intermediate"] = 2] = "Intermediate";
    BioSampleType[BioSampleType["Processed"] = 4] = "Processed";
    BioSampleType[BioSampleType["RawWSQCompressed"] = 8] = "RawWSQCompressed";
    BioSampleType[BioSampleType["Encrypted"] = 16] = "Encrypted";
    BioSampleType[BioSampleType["Signed"] = 32] = "Signed";
})(BioSampleType || (BioSampleType = {}));
/**
 * A purpose the biometric sample was intended for.
 */
export var BioSamplePurpose;
(function (BioSamplePurpose) {
    BioSamplePurpose[BioSamplePurpose["Any"] = 0] = "Any";
    BioSamplePurpose[BioSamplePurpose["Verify"] = 1] = "Verify";
    BioSamplePurpose[BioSamplePurpose["Identify"] = 2] = "Identify";
    BioSamplePurpose[BioSamplePurpose["Enroll"] = 3] = "Enroll";
    BioSamplePurpose[BioSamplePurpose["EnrollForVerificationOnly"] = 4] = "EnrollForVerificationOnly";
    BioSamplePurpose[BioSamplePurpose["EnrollForIdentificationOnly"] = 5] = "EnrollForIdentificationOnly";
    BioSamplePurpose[BioSamplePurpose["Audit"] = 6] = "Audit";
})(BioSamplePurpose || (BioSamplePurpose = {}));
/**
 * A biometric sample encryption type.
 */
export var BioSampleEncryption;
(function (BioSampleEncryption) {
    BioSampleEncryption[BioSampleEncryption["None"] = 0] = "None";
    BioSampleEncryption[BioSampleEncryption["XTEA"] = 1] = "XTEA";
})(BioSampleEncryption || (BioSampleEncryption = {}));
/**
 * Contains meta-information about biometric sample data.
 */
export class BioSampleHeader {
    constructor(
    /** Biometric factor. Must be set to 8 for fingerprint. */
    Factor, 
    /** Format owner (vendor) information. */
    Format, 
    /** Biometric sample representation type. */
    Type, 
    /** Purpose of the biometric sample. */
    Purpose, 
    /** Quality of biometric sample. If we don't support quality it should be set to -1.  */
    Quality, 
    /** Encryption of biometric sample. */
    Encryption) {
        this.Factor = Factor;
        this.Format = Format;
        this.Type = Type;
        this.Purpose = Purpose;
        this.Quality = Quality;
        this.Encryption = Encryption;
    }
}
/**
 * A biometric sample.
 */
export class BioSample {
    constructor(
    /** Biometric sample header. */
    Header, 
    /** Base64url encoded biometric sample data */
    Data) {
        this.Header = Header;
        this.Data = Data;
        /** A version info. */
        this.Version = 1;
    }
}
//# sourceMappingURL=factor.js.map