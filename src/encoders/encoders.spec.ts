import {
    Utf16, Utf8, Base64, Base64Url, Base32,
    Utf16String, Utf8String, Base64String, Base64UrlString,
} from './encoders';

describe('Encodings: ', () =>
{
    // Differently-branded strings must be incompatible to each other, but must be compatible with regular strings.

    // From regular strings to branded strings
    const utf16: Utf16String = "test \u0442\u0435\u0441\u0442 \u6D4B\u8BD5 \u30C6\u30B9\u30C8 \u2611\u263A";
    const utf8: Utf8String = "test ÑÐµÑÑ æµè¯ ãã¹ã ââº";
    const base64: Base64String = "dGVzdCDRgtC10YHRgiDmtYvor5Ug44OG44K544OIIOKYkeKYug==";
    const base64url: Base64UrlString = "dGVzdCDRgtC10YHRgiDmtYvor5Ug44OG44K544OIIOKYkeKYug";
    // const hex = "00740065007300740020044204350441044200206d4b8bd5002030c630b930c800202611263a";

    // From branded strings to regular strings
    const compatibleWithUtf8: string = utf8;
    const compatibleWithUtf16: string = utf16;
    const compatibleWithBase64: string = base64;
    const compatibleWithBase64Url: string = base64url;

    // Between different branded strings -- must produce a compilation error if uncommented!
    // const mustBeNotAssignable: Utf8String = utf16;
    // const mustBeNotAssignable: Utf16String = utf8;
    // const mustBeNotAssignable: Base64String = base64url;
    // const mustBeNotAssignable: Base64UrlString = base64;

    describe('Utf8', () => {
        it('must convert from Utf16', () => {
            expect(Utf8.fromUtf16(utf16)).toBe(utf8);
        });
        it('must convert from Base64', () => {
            expect(Utf8.fromBase64(base64)).toBe(utf8);
        });
        it('must convert from Base64Url', () => {
            expect(Utf8.fromBase64Url(base64url)).toBe(utf8);
        });
    });
    describe('Utf16', () => {
        it('must convert from Utf8', () => {
            expect(Utf16.fromUtf8(utf8)).toBe(utf16);
        });
        it('must convert from Base64', () => {
            expect(Utf16.fromBase64(base64)).toBe(utf16);
        });
        it('must convert from Base64Url', () => {
            expect(Utf16.fromBase64Url(base64url)).toBe(utf16);
        });
    });
    describe('Base64', () => {
        it('must convert from Utf8', () => {
            expect(Base64.fromUtf8(utf8)).toBe(base64);
        });
        it('must convert from Base64', () => {
            expect(Base64.fromUtf16(utf16)).toBe(base64);
        });
        it('must convert from Base64Url', () => {
            expect(Base64.fromBase64Url(base64url)).toBe(base64);
        });
    });
    describe('Base64Url', () => {
        it('must convert from Utf8', () => {
            expect(Base64Url.fromUtf8(utf8)).toBe(base64url);

            const a = "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk";
            const b = Utf8.fromBase64Url(a);
            const a$ = Base64Url.fromUtf8(b);
            expect(a).toBe(a$);
        });
        it('must convert from Utf16', () => {
            expect(Base64Url.fromUtf16(utf16)).toBe(base64url);
        });
        it('must convert from Base64', () => {
            expect(Base64Url.fromUtf16(utf16)).toBe(base64url);
        });
    });
    describe('Base32', () => {
        it('must convert from number[]', () => {
            expect(Base32.fromBytes([72]) ).toBe('JA======');
            expect(Base32.fromBytes([72, 101]) ).toBe('JBSQ====');
            expect(Base32.fromBytes([72, 101, 108]) ).toBe('JBSWY===');
            expect(Base32.fromBytes([72, 101, 108, 108]) ).toBe('JBSWY3A=');
            expect(Base32.fromBytes([72, 101, 108, 108, 111]) ).toBe('JBSWY3DP');
        });
        it('must convert from Uint8Array', () => {
            expect(Base32.fromBytes(new Uint8Array([72])) ).toBe('JA======');
            expect(Base32.fromBytes(new Uint8Array([72, 101])) ).toBe('JBSQ====');
            expect(Base32.fromBytes(new Uint8Array([72, 101, 108])) ).toBe('JBSWY===');
            expect(Base32.fromBytes(new Uint8Array([72, 101, 108, 108])) ).toBe('JBSWY3A=');
            expect(Base32.fromBytes(new Uint8Array([72, 101, 108, 108, 111])) ).toBe('JBSWY3DP');
        });
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
