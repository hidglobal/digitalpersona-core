// tslint:disable: ban-types
import { __read, __spread } from "tslib";
/**
 * Set of converters to UTF16.
 */
var Utf16 = /** @class */ (function () {
    function Utf16() {
    }
    /** Converts a UTF8 string to a UTF16 string. */
    Utf16.fromUtf8 = function (s) {
        return decodeURIComponent(escape(Utf8.noBom(s)));
    };
    /** Decodes a Base64-encoded string to a UTF16 string. */
    Utf16.fromBase64 = function (s) {
        return Utf16.fromUtf8(Utf8.fromBase64(s));
    };
    /** Decodes a Base64url-encoded string to a UTF16 string. */
    Utf16.fromBase64Url = function (s) {
        return Utf16.fromUtf8(Utf8.fromBase64Url(s));
    };
    /** Appends Byte-Order-Mark (BOM) to the UTF16 string. */
    Utf16.withBom = function (s) { return "\uFEFF" + s; };
    /** Strips a Byte-Order-Mark (BOM) from the UTF16 string. */
    Utf16.noBom = function (s) { return s.replace(/^\uFEFF/, ""); };
    return Utf16;
}());
export { Utf16 };
/**
 * Set of converters to UTF8.
 */
var Utf8 = /** @class */ (function () {
    function Utf8() {
    }
    /** Converts a UTF16 string to a UTF16 string. */
    Utf8.fromUtf16 = function (s) {
        return unescape(encodeURIComponent(Utf16.noBom(s)));
    };
    /** Decodes a Base64-encoded string to a UTF8 string. */
    Utf8.fromBase64 = function (s) {
        return atob(s);
    };
    /** Decodes a Base64url-encoded string to a UTF8 string. */
    Utf8.fromBase64Url = function (s) {
        return Utf8.fromBase64(Base64.fromBase64Url(s));
    };
    /** Converts a byte array to a UTF16 string. */
    Utf8.fromBytes = function (bytes) {
        return String.fromCharCode.apply(String, __spread(bytes));
    };
    /** Appends Byte-Order-Mark (BOM) to the UTF8 string. */
    Utf8.withBom = function (s) { return "\xEF\xBB\xBF" + s; };
    /** Strips a Byte-Order-Mark (BOM) from the UTF8 string. */
    Utf8.noBom = function (s) { return s.replace(/^\xEF\xBB\xBF/, ""); };
    return Utf8;
}());
export { Utf8 };
/**
 * Set of converters to Base64.
 */
var Base64 = /** @class */ (function () {
    function Base64() {
    }
    /** Encodes a UTF8 string to a Base64-encoded string. */
    Base64.fromUtf8 = function (s) {
        return btoa(s);
    };
    /** Encodes a UTF16 string to a Base64-encoded string.  */
    Base64.fromUtf16 = function (s) {
        return Base64.fromUtf8(Utf8.fromUtf16(s));
    };
    /** Converts a Base64url-encoded string to a Base64-encoded string. */
    Base64.fromBase64Url = function (s) {
        return ((s.length % 4 === 2) ? s + "==" :
            (s.length % 4 === 3) ? s + "=" : s)
            .replace(/-/g, "+")
            .replace(/_/g, "/");
    };
    /** Converts a byte array to a Base64-encoded string. */
    Base64.fromBytes = function (bytes) {
        return Base64.fromUtf8(Utf8.fromBytes(bytes));
    };
    /** Encodes a plain JSON object or a string to a Base64-encoded string. */
    Base64.fromJSON = function (obj) {
        return Base64.fromUtf16(JSON.stringify(obj));
    };
    return Base64;
}());
export { Base64 };
/**
 * Set of converters to Base64Url.
 */
var Base64Url = /** @class */ (function () {
    function Base64Url() {
    }
    /** Converts a Base64-encoded string to a Base64url-encoded string. */
    Base64Url.fromBase64 = function (s) {
        return s.replace(/\=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    };
    /** Converts a UTF8 string to a Base64url-encoded string. */
    Base64Url.fromUtf8 = function (s) {
        return Base64Url.fromBase64(Base64.fromUtf8(s));
    };
    /** Converts a UTF16 string to a Base64url-encoded string. */
    Base64Url.fromUtf16 = function (s) {
        return Base64Url.fromBase64(Base64.fromUtf16(s));
    };
    /** Converts a byte array to a Base64url-encoded string. */
    Base64Url.fromBytes = function (bytes) {
        return Base64Url.fromUtf8(Utf8.fromBytes(bytes));
    };
    /** Encodes a plain JSON object or a string to a Base64url-encoded string. */
    Base64Url.fromJSON = function (obj) {
        return Base64Url.fromUtf16(JSON.stringify(obj));
    };
    return Base64Url;
}());
export { Base64Url };
/**
 * Set of converters to Base32.
 */
var Base32 = /** @class */ (function () {
    function Base32() {
    }
    /** Converts a byte array to a Base32-encoded string. */
    Base32.fromBytes = function (bytes) {
        var digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
        var v1 = 0, v2 = 0, v3 = 0, v4 = 0, v5 = 0, str = '', l = bytes.length, i = 0;
        var count = Math.floor(l / 5) * 5;
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
        var remain = l - count;
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
    };
    return Base32;
}());
export { Base32 };
// export class Hex
// {
//     public static encode = (s: string): HexString =>
//         s.split("").map(cp => ('000' + cp.charCodeAt(0).toString(16)).slice(-4)).join('')
//     public static decode = (s: HexString): string =>
//         s.replace(/(..)/g, '%$1'))
// }
//# sourceMappingURL=encoders.js.map