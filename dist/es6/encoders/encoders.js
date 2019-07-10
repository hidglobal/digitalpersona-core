// tslint:disable: ban-types
/**
 * Set of converters to UTF16.
 */
export class Utf16 {
}
/** Converts a UTF8 string to a UTF16 string. */
Utf16.fromUtf8 = (s) => decodeURIComponent(escape(Utf8.noBom(s)));
/** Decodes a Base64-encoded string to a UTF16 string. */
Utf16.fromBase64 = (s) => Utf16.fromUtf8(Utf8.fromBase64(s));
/** Decodes a Base64url-encoded string to a UTF16 string. */
Utf16.fromBase64Url = (s) => Utf16.fromUtf8(Utf8.fromBase64Url(s));
/** Appends Byte-Order-Mark (BOM) to the UTF16 string. */
Utf16.withBom = (s) => "\uFEFF" + s;
/** Strips a Byte-Order-Mark (BOM) from the UTF16 string. */
Utf16.noBom = (s) => s.replace(/^\uFEFF/, "");
/**
 * Set of converters to UTF8.
 */
export class Utf8 {
}
/** Converts a UTF16 string to a UTF16 string. */
Utf8.fromUtf16 = (s) => unescape(encodeURIComponent(Utf16.noBom(s)));
/** Decodes a Base64-encoded string to a UTF8 string. */
Utf8.fromBase64 = (s) => atob(s);
/** Decodes a Base64url-encoded string to a UTF8 string. */
Utf8.fromBase64Url = (s) => Utf8.fromBase64(Base64.fromBase64Url(s));
/** Converts a byte array to a UTF16 string. */
Utf8.fromBytes = (bytes) => String.fromCharCode(...bytes);
/** Appends Byte-Order-Mark (BOM) to the UTF8 string. */
Utf8.withBom = (s) => "\xEF\xBB\xBF" + s;
/** Strips a Byte-Order-Mark (BOM) from the UTF8 string. */
Utf8.noBom = (s) => s.replace(/^\xEF\xBB\xBF/, "");
/**
 * Set of converters to Base64.
 */
export class Base64 {
}
/** Encodes a UTF8 string to a Base64-encoded string. */
Base64.fromUtf8 = (s) => btoa(s);
/** Encodes a UTF16 string to a Base64-encoded string.  */
Base64.fromUtf16 = (s) => Base64.fromUtf8(Utf8.fromUtf16(s));
/** Converts a Base64url-encoded string to a Base64-encoded string. */
Base64.fromBase64Url = (s) => ((s.length % 4 === 2) ? s + "==" :
    (s.length % 4 === 3) ? s + "=" : s)
    .replace(/-/g, "+")
    .replace(/_/g, "/");
/** Converts a byte array to a Base64-encoded string. */
Base64.fromBytes = (bytes) => Base64.fromUtf8(Utf8.fromBytes(bytes));
/** Encodes a plain JSON object or a string to a Base64-encoded string. */
Base64.fromJSON = (obj) => Base64.fromUtf16(JSON.stringify(obj));
/**
 * Set of converters to Base64Url.
 */
export class Base64Url {
}
/** Converts a Base64-encoded string to a Base64url-encoded string. */
Base64Url.fromBase64 = (s) => s.replace(/\=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
/** Converts a UTF8 string to a Base64url-encoded string. */
Base64Url.fromUtf8 = (s) => Base64Url.fromBase64(Base64.fromUtf8(s));
/** Converts a UTF16 string to a Base64url-encoded string. */
Base64Url.fromUtf16 = (s) => Base64Url.fromBase64(Base64.fromUtf16(s));
/** Converts a byte array to a Base64url-encoded string. */
Base64Url.fromBytes = (bytes) => Base64Url.fromUtf8(Utf8.fromBytes(bytes));
/** Encodes a plain JSON object or a string to a Base64url-encoded string. */
Base64Url.fromJSON = (obj) => Base64Url.fromUtf16(JSON.stringify(obj));
/**
 * Set of converters to Base32.
 */
export class Base32 {
    /** Converts a byte array to a Base32-encoded string. */
    static fromBytes(bytes) {
        const digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
        let v1 = 0, v2 = 0, v3 = 0, v4 = 0, v5 = 0, str = '', l = bytes.length, i = 0;
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
        if (remain === 0)
            return str;
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
//# sourceMappingURL=encoders.js.map