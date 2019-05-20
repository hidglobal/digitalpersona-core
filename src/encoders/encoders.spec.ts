import { Utf16, Utf8, Base64, Base64Url } from './encoders';

describe('Encodings: ', () => {
    const utf16 = "test \u0442\u0435\u0441\u0442 \u6D4B\u8BD5 \u30C6\u30B9\u30C8 \u2611\u263A";
    const utf8 = "test ÑÐµÑÑ æµè¯ ãã¹ã ââº";
    const base64 = "dGVzdCDRgtC10YHRgiDmtYvor5Ug44OG44K544OIIOKYkeKYug==";
    const base64url = "dGVzdCDRgtC10YHRgiDmtYvor5Ug44OG44K544OIIOKYkeKYug";
    //const hex = "00740065007300740020044204350441044200206d4b8bd5002030c630b930c800202611263a";

    describe('Utf8', () => {
        it('must convert from Utf16', () => {
            expect(Utf8.fromUtf16(utf16)).toBe(utf8);
        })
        it('must convert from Base64', () => {
            expect(Utf8.fromBase64(base64)).toBe(utf8);
        })
        it('must convert from Base64Url', () => {
            expect(Utf8.fromBase64Url(base64url)).toBe(utf8);
        })
    });
    describe('Utf16', () => {
        it('must convert from Utf8', () => {
            expect(Utf16.fromUtf8(utf8)).toBe(utf16);
        })
        it('must convert from Base64', () => {
            expect(Utf16.fromBase64(base64)).toBe(utf16);
        })
        it('must convert from Base64Url', () => {
            expect(Utf16.fromBase64Url(base64url)).toBe(utf16);
        })
    });
    describe('Base64', () => {
        it('must convert from Utf8', () => {
            expect(Base64.fromUtf8(utf8)).toBe(base64);
        })
        it('must convert from Base64', () => {
            expect(Base64.fromUtf16(utf16)).toBe(base64);
        })
        it('must convert from Base64Url', () => {
            expect(Base64.fromBase64Url(base64url)).toBe(base64);
        })
    });
    describe('Base64Url', () => {
        it('must convert from Utf8', () => {
            expect(Base64Url.fromUtf8(utf8)).toBe(base64url);

            const a = "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk";
            const b = Utf8.fromBase64Url(a);
            const a$ = Base64Url.fromUtf8(b);
            expect(a).toBe(a$);
        })
        it('must convert from Utf16', () => {
            expect(Base64Url.fromUtf16(utf16)).toBe(base64url);
        })
        it('must convert from Base64', () => {
            expect(Base64Url.fromUtf16(utf16)).toBe(base64url);
        })
    });
    // describe('Hex', () => {
    //     it('must convert from Utf16 to hex', () => {
    //         expect(Hex.encode(utf16)).toBe(hex);
    //     })
    //     it('must convert from hex to Utf16', () => {
    //         expect(Hex.decode(hex)).toBe(utf8);
    //     })
    // });

});
