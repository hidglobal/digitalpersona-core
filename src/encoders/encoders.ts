// tslint:disable: ban-types

export type Utf16String     = string;
export type Utf8String      = string;
export type Base64String    = string;
export type Base64UrlString = string;
export type HexString       = string;

// NOTE: these converters work only with Base Multilingual Plane (BMP)!
// Javascript strings represent astral planes using UTF16 surrogate pairs
// and we do not try to restore genuine UTF32 codepoint from surrogates during conversion.

export class Utf16
{
    public static fromUtf8 = (s: Utf8String): Utf16String =>
        decodeURIComponent(escape(Utf8.noBom(s)))

    public static fromBase64 = (s: Base64String): Utf16String =>
        Utf16.fromUtf8(Utf8.fromBase64(s))

    public static fromBase64Url = (s: Base64UrlString): Utf8String =>
        Utf16.fromUtf8(Utf8.fromBase64Url(s))

    public static withBom   = (s: Utf16String): Utf16String => "\uFEFF" + s;
    public static noBom     = (s: Utf16String): Utf16String => s.replace(/^\uFEFF/, "");
}

export class Utf8
{
    public static fromUtf16 = (s: Utf16String): Utf8String =>
        unescape(encodeURIComponent(Utf16.noBom(s)))

    public static fromBase64 = (s: Base64String): Utf8String =>
        atob(s)

    public static fromBase64Url = (s: Base64UrlString): Utf8String =>
        Utf8.fromBase64(Base64.fromBase64Url(s))

    public static withBom = (s: Utf8String): Utf8String => "\xEF\xBB\xBF" + s;
    public static noBom = (s: Utf8String): Utf8String => s.replace(/^\xEF\xBB\xBF/, "");
}

export class Base64
{
    public static fromUtf8 = (s: Utf8String): Base64String =>
        btoa(s)

    public static fromUtf16 = (s: Utf16String): Base64String =>
        Base64.fromUtf8(Utf8.fromUtf16(s))

    public static fromBase64Url = (s: Base64UrlString): Base64String =>
        ((s.length % 4 === 2) ? s + "==" :
        (s.length % 4 === 3) ? s + "=" : s)
        .replace(/-/g, "+")
        .replace(/_/g, "/")

    public static fromJSON = (obj: object|string) =>
        Base64.fromUtf16(JSON.stringify(obj))
}

export class Base64Url
{
    public static fromBase64 = (s: Base64String): Base64UrlString =>
        s.replace(/\=/g, "").replace(/\+/g, "-").replace(/\//g, "_")

    public static fromUtf8 = (s: Utf8String) =>
        Base64Url.fromBase64(Base64.fromUtf8(s))

    public static fromUtf16 = (s: Utf16String) =>
        Base64Url.fromBase64(Base64.fromUtf16(s))

    public static fromJSON = (obj: object|string) =>
        Base64Url.fromUtf16(JSON.stringify(obj))
}

// export class Hex
// {
//     public static encode = (s: string): HexString =>
//         s.split("").map(cp => ('000' + cp.charCodeAt(0).toString(16)).slice(-4)).join('')

//     public static decode = (s: HexString): string =>
//         s.replace(/(..)/g, '%$1'))
// }
