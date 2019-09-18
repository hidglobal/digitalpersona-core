// tslint:disable: ban-types

/** NOTE: All converters work only with Base Multilingual Plane (BMP)!
 * Javascript strings represent astral planes using UTF16 surrogate pairs
 * and we do not try to restore genuine UTF32 codepoint from surrogates during conversion.
 */

/** Branded alias type for UTF16-encoded strings. */
export type Utf16String     = string
                            & { encoding?: "utf16" };

/** Branded alias type for UTF8-encoded strings. */
export type Utf8String      = string
                            & { encoding?: "utf8" };

/** Branded alias type for Base64-encoded strings. */
export type Base64String    = string
                            & { encoding?: "base64" };

/** Branded alias type for Base64Url-encoded strings. */
export type Base64UrlString = string
                            & { encoding?: "base64url" };

/** Branded alias type for Base32-encoded strings. */
export type Base32String    = string
                            & { encoding?: "base32" };

/** Branded alias type for Hex-encoded strings. */
export type HexString       = string
                            & { encoding?: "hex" };

/**
 * Set of converters to UTF16.
 */
export class Utf16
{
    /** Converts a UTF8 string to a UTF16 string. */
    public static fromUtf8 = (s: Utf8String): Utf16String =>
        decodeURIComponent(escape(Utf8.noBom(s)))

    /** Decodes a Base64-encoded string to a UTF16 string. */
    public static fromBase64 = (s: Base64String): Utf16String =>
        Utf16.fromUtf8(Utf8.fromBase64(s))

    /** Decodes a Base64url-encoded string to a UTF16 string. */
    public static fromBase64Url = (s: Base64UrlString): Utf16String =>
        Utf16.fromUtf8(Utf8.fromBase64Url(s))

    /** Appends Byte-Order-Mark (BOM) to the UTF16 string. */
    public static withBom   = (s: Utf16String): Utf16String => "\uFEFF" + s;

    /** Strips a Byte-Order-Mark (BOM) from the UTF16 string. */
    public static noBom     = (s: Utf16String): Utf16String => s.replace(/^\uFEFF/, "");
}

/**
 * Set of converters to UTF8.
 */
export class Utf8
{
    /** Converts a UTF16 string to a UTF16 string. */
    public static fromUtf16 = (s: Utf16String): Utf8String =>
        unescape(encodeURIComponent(Utf16.noBom(s)))

    /** Decodes a Base64-encoded string to a UTF8 string. */
    public static fromBase64 = (s: Base64String): Utf8String =>
        atob(s)

    /** Decodes a Base64url-encoded string to a UTF8 string. */
    public static fromBase64Url = (s: Base64UrlString): Utf8String =>
        Utf8.fromBase64(Base64.fromBase64Url(s))

    /** Converts a byte array to a UTF16 string. */
    public static fromBytes = (bytes: Uint8Array|number[]): Utf8String =>
        String.fromCharCode(...bytes)

    /** Appends Byte-Order-Mark (BOM) to the UTF8 string. */
    public static withBom = (s: Utf8String): Utf8String => "\xEF\xBB\xBF" + s;

    /** Strips a Byte-Order-Mark (BOM) from the UTF8 string. */
    public static noBom = (s: Utf8String): Utf8String => s.replace(/^\xEF\xBB\xBF/, "");
}

/**
 * Set of converters to Base64.
 */
export class Base64
{
    /** Encodes a UTF8 string to a Base64-encoded string. */
    public static fromUtf8 = (s: Utf8String): Base64String =>
        btoa(s)

    /** Encodes a UTF16 string to a Base64-encoded string.  */
    public static fromUtf16 = (s: Utf16String): Base64String =>
        Base64.fromUtf8(Utf8.fromUtf16(s))

    /** Converts a Base64url-encoded string to a Base64-encoded string. */
    public static fromBase64Url = (s: Base64UrlString): Base64String =>
        ((s.length % 4 === 2) ? s + "==" :
        (s.length % 4 === 3) ? s + "=" : s)
        .replace(/-/g, "+")
        .replace(/_/g, "/")

    /** Converts a byte array to a Base64-encoded string. */
    public static fromBytes = (bytes: Uint8Array): Base64String =>
        Base64.fromUtf8(Utf8.fromBytes(bytes))

    /** Encodes a plain JSON object or a string to a Base64-encoded string. */
    public static fromJSON = (obj: object|string) =>
        Base64.fromUtf16(JSON.stringify(obj))
}

/**
 * Set of converters to Base64Url.
 */
export class Base64Url
{
    /** Converts a Base64-encoded string to a Base64url-encoded string. */
    public static fromBase64 = (s: Base64String): Base64UrlString =>
        s.replace(/\=/g, "").replace(/\+/g, "-").replace(/\//g, "_")

    /** Converts a UTF8 string to a Base64url-encoded string. */
    public static fromUtf8 = (s: Utf8String) =>
        Base64Url.fromBase64(Base64.fromUtf8(s))

    /** Converts a UTF16 string to a Base64url-encoded string. */
    public static fromUtf16 = (s: Utf16String) =>
        Base64Url.fromBase64(Base64.fromUtf16(s))

    /** Converts a byte array to a Base64url-encoded string. */
    public static fromBytes = (bytes: Uint8Array): Base64UrlString =>
        Base64Url.fromUtf8(Utf8.fromBytes(bytes))

    /** Encodes a plain JSON object or a string to a Base64url-encoded string. */
    public static fromJSON = (obj: object|string) =>
        Base64Url.fromUtf16(JSON.stringify(obj))
}

/**
 * Set of converters to Base32.
 */
export class Base32
{
    /** Converts a byte array to a Base32-encoded string. */
    public static fromBytes(bytes: Uint8Array|number[]): Base32String
    {
        const digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
        let v1 = 0, v2 = 0, v3 = 0, v4 = 0, v5 = 0,
            str = '',
            l = bytes.length,
            i = 0;
        const count = Math.floor(l / 5) * 5;
        while (i < count) {
            v1 = bytes[i++];
            v2 = bytes[i++];
            v3 = bytes[i++];
            v4 = bytes[i++];
            v5 = bytes[i++];
            str += digits[v1 >>> 3]
                + digits[(v1 << 2 | v2 >>> 6) & 31]
                + digits[(v2 >>> 1) & 31]
                + digits[(v2 << 4 | v3 >>> 4) & 31]
                + digits[(v3 << 1 | v4 >>> 7) & 31]
                + digits[(v4 >>> 2) & 31]
                + digits[(v4 << 3 | v5 >>> 5) & 31]
                + digits[v5 & 31];
        }

        // remain char
        const remain = l - count;
        if (remain === 0) return str;

        switch (remain) {
            // @ts-ignore no-switch-case-fall-through
            case 4: v4 = bytes[--l];
            // @ts-ignore no-switch-case-fall-through
            case 3: v3 = bytes[--l];
            // @ts-ignore no-switch-case-fall-through
            case 2: v2 = bytes[--l];
            // @ts-ignore no-switch-case-fall-through
            case 1: v1 = bytes[--l];
        }
        str += digits[v1 >>> 3];

        switch (remain) {
            case 1: return str
                + digits[(v1 << 2) & 31]
                + '======';
            case 2: return str
                + digits[(v1 << 2 | v2 >>> 6) & 31]
                + digits[(v2 >>> 1) & 31]
                + digits[(v2 << 4) & 31]
                + '====';
            case 3: return str
                + digits[(v1 << 2 | v2 >>> 6) & 31]
                + digits[(v2 >>> 1) & 31]
                + digits[(v2 << 4 | v3 >>> 4) & 31]
                + digits[(v3 << 1) & 31]
                + '===';
            case 4: return str
                + digits[(v1 << 2 | v2 >>> 6) & 31]
                + digits[(v2 >>> 1) & 31]
                + digits[(v2 << 4 | v3 >>> 4) & 31]
                + digits[(v3 << 1 | v4 >>> 7) & 31]
                + digits[(v4 >>> 2) & 31]
                + digits[(v4 << 3) & 31]
                + '=';
        }
        return str;
    }

}

// export class Hex
// {
//     public static encode = (s: string): HexString =>
//         s.split("").map(cp => ('000' + cp.charCodeAt(0).toString(16)).slice(-4)).join('')

//     public static decode = (s: HexString): string =>
//         s.replace(/(..)/g, '%$1'))
// }
