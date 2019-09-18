/** NOTE: All converters work only with Base Multilingual Plane (BMP)!
 * Javascript strings represent astral planes using UTF16 surrogate pairs
 * and we do not try to restore genuine UTF32 codepoint from surrogates during conversion.
 */
/** Branded alias type for UTF16-encoded strings. */
export declare type Utf16String = string & {
    encoding?: "utf16";
};
/** Branded alias type for UTF8-encoded strings. */
export declare type Utf8String = string & {
    encoding?: "utf8";
};
/** Branded alias type for Base64-encoded strings. */
export declare type Base64String = string & {
    encoding?: "base64";
};
/** Branded alias type for Base64Url-encoded strings. */
export declare type Base64UrlString = string & {
    encoding?: "base64url";
};
/** Branded alias type for Base32-encoded strings. */
export declare type Base32String = string & {
    encoding?: "base32";
};
/** Branded alias type for Hex-encoded strings. */
export declare type HexString = string & {
    encoding?: "hex";
};
/**
 * Set of converters to UTF16.
 */
export declare class Utf16 {
    /** Converts a UTF8 string to a UTF16 string. */
    static fromUtf8: (s: Utf8String) => Utf16String;
    /** Decodes a Base64-encoded string to a UTF16 string. */
    static fromBase64: (s: Base64String) => Utf16String;
    /** Decodes a Base64url-encoded string to a UTF16 string. */
    static fromBase64Url: (s: Base64UrlString) => Utf16String;
    /** Appends Byte-Order-Mark (BOM) to the UTF16 string. */
    static withBom: (s: Utf16String) => Utf16String;
    /** Strips a Byte-Order-Mark (BOM) from the UTF16 string. */
    static noBom: (s: Utf16String) => Utf16String;
}
/**
 * Set of converters to UTF8.
 */
export declare class Utf8 {
    /** Converts a UTF16 string to a UTF16 string. */
    static fromUtf16: (s: Utf16String) => Utf8String;
    /** Decodes a Base64-encoded string to a UTF8 string. */
    static fromBase64: (s: Base64String) => Utf8String;
    /** Decodes a Base64url-encoded string to a UTF8 string. */
    static fromBase64Url: (s: Base64UrlString) => Utf8String;
    /** Converts a byte array to a UTF16 string. */
    static fromBytes: (bytes: number[] | Uint8Array) => Utf8String;
    /** Appends Byte-Order-Mark (BOM) to the UTF8 string. */
    static withBom: (s: Utf8String) => Utf8String;
    /** Strips a Byte-Order-Mark (BOM) from the UTF8 string. */
    static noBom: (s: Utf8String) => Utf8String;
}
/**
 * Set of converters to Base64.
 */
export declare class Base64 {
    /** Encodes a UTF8 string to a Base64-encoded string. */
    static fromUtf8: (s: Utf8String) => Base64String;
    /** Encodes a UTF16 string to a Base64-encoded string.  */
    static fromUtf16: (s: Utf16String) => Base64String;
    /** Converts a Base64url-encoded string to a Base64-encoded string. */
    static fromBase64Url: (s: Base64UrlString) => Base64String;
    /** Converts a byte array to a Base64-encoded string. */
    static fromBytes: (bytes: Uint8Array) => Base64String;
    /** Encodes a plain JSON object or a string to a Base64-encoded string. */
    static fromJSON: (obj: string | object) => Base64String;
}
/**
 * Set of converters to Base64Url.
 */
export declare class Base64Url {
    /** Converts a Base64-encoded string to a Base64url-encoded string. */
    static fromBase64: (s: Base64String) => Base64UrlString;
    /** Converts a UTF8 string to a Base64url-encoded string. */
    static fromUtf8: (s: Utf8String) => Base64UrlString;
    /** Converts a UTF16 string to a Base64url-encoded string. */
    static fromUtf16: (s: Utf16String) => Base64UrlString;
    /** Converts a byte array to a Base64url-encoded string. */
    static fromBytes: (bytes: Uint8Array) => Base64UrlString;
    /** Encodes a plain JSON object or a string to a Base64url-encoded string. */
    static fromJSON: (obj: string | object) => Base64UrlString;
}
/**
 * Set of converters to Base32.
 */
export declare class Base32 {
    /** Converts a byte array to a Base32-encoded string. */
    static fromBytes(bytes: Uint8Array | number[]): Base32String;
}
