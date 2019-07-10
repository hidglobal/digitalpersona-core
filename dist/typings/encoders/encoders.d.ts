/** NOTE: All converters work only with Base Multilingual Plane (BMP)!
 * Javascript strings represent astral planes using UTF16 surrogate pairs
 * and we do not try to restore genuine UTF32 codepoint from surrogates during conversion.
 */
/** Alias type for UTF16 strings. */
export declare type Utf16String = string;
/** Alias type for UTF8 strings. */
export declare type Utf8String = string;
/** Alias type for Base64-encoded strings. */
export declare type Base64String = string;
/** Alias type for Base64Url-encoded strings. */
export declare type Base64UrlString = string;
/** Alias type for Base32-encoded strings. */
export declare type Base32String = string;
/** Alias type for Hex-encoded strings. */
export declare type HexString = string;
/**
 * Set of converters to UTF16.
 */
export declare class Utf16 {
    /** Converts a UTF8 string to a UTF16 string. */
    static fromUtf8: (s: string) => string;
    /** Decodes a Base64-encoded string to a UTF16 string. */
    static fromBase64: (s: string) => string;
    /** Decodes a Base64url-encoded string to a UTF16 string. */
    static fromBase64Url: (s: string) => string;
    /** Appends Byte-Order-Mark (BOM) to the UTF16 string. */
    static withBom: (s: string) => string;
    /** Strips a Byte-Order-Mark (BOM) from the UTF16 string. */
    static noBom: (s: string) => string;
}
/**
 * Set of converters to UTF8.
 */
export declare class Utf8 {
    /** Converts a UTF16 string to a UTF16 string. */
    static fromUtf16: (s: string) => string;
    /** Decodes a Base64-encoded string to a UTF8 string. */
    static fromBase64: (s: string) => string;
    /** Decodes a Base64url-encoded string to a UTF8 string. */
    static fromBase64Url: (s: string) => string;
    /** Converts a byte array to a UTF16 string. */
    static fromBytes: (bytes: number[] | Uint8Array) => string;
    /** Appends Byte-Order-Mark (BOM) to the UTF8 string. */
    static withBom: (s: string) => string;
    /** Strips a Byte-Order-Mark (BOM) from the UTF8 string. */
    static noBom: (s: string) => string;
}
/**
 * Set of converters to Base64.
 */
export declare class Base64 {
    /** Encodes a UTF8 string to a Base64-encoded string. */
    static fromUtf8: (s: string) => string;
    /** Encodes a UTF16 string to a Base64-encoded string.  */
    static fromUtf16: (s: string) => string;
    /** Converts a Base64url-encoded string to a Base64-encoded string. */
    static fromBase64Url: (s: string) => string;
    /** Converts a byte array to a Base64-encoded string. */
    static fromBytes: (bytes: Uint8Array) => string;
    /** Encodes a plain JSON object or a string to a Base64-encoded string. */
    static fromJSON: (obj: string | object) => string;
}
/**
 * Set of converters to Base64Url.
 */
export declare class Base64Url {
    /** Converts a Base64-encoded string to a Base64url-encoded string. */
    static fromBase64: (s: string) => string;
    /** Converts a UTF8 string to a Base64url-encoded string. */
    static fromUtf8: (s: string) => string;
    /** Converts a UTF16 string to a Base64url-encoded string. */
    static fromUtf16: (s: string) => string;
    /** Converts a byte array to a Base64url-encoded string. */
    static fromBytes: (bytes: Uint8Array) => string;
    /** Encodes a plain JSON object or a string to a Base64url-encoded string. */
    static fromJSON: (obj: string | object) => string;
}
/**
 * Set of converters to Base32.
 */
export declare class Base32 {
    /** Converts a byte array to a Base32-encoded string. */
    static fromBytes(bytes: Uint8Array | number[]): Base32String;
}
