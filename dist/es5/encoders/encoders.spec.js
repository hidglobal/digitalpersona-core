import { Utf16, Utf8, Base64, Base64Url, Base32 } from './encoders';
describe('Encodings: ', function () {
    var utf16 = "test \u0442\u0435\u0441\u0442 \u6D4B\u8BD5 \u30C6\u30B9\u30C8 \u2611\u263A";
    var utf8 = "test ÑÐµÑÑ æµè¯ ãã¹ã ââº";
    var base64 = "dGVzdCDRgtC10YHRgiDmtYvor5Ug44OG44K544OIIOKYkeKYug==";
    var base64url = "dGVzdCDRgtC10YHRgiDmtYvor5Ug44OG44K544OIIOKYkeKYug";
    // const hex = "00740065007300740020044204350441044200206d4b8bd5002030c630b930c800202611263a";
    describe('Utf8', function () {
        it('must convert from Utf16', function () {
            expect(Utf8.fromUtf16(utf16)).toBe(utf8);
        });
        it('must convert from Base64', function () {
            expect(Utf8.fromBase64(base64)).toBe(utf8);
        });
        it('must convert from Base64Url', function () {
            expect(Utf8.fromBase64Url(base64url)).toBe(utf8);
        });
    });
    describe('Utf16', function () {
        it('must convert from Utf8', function () {
            expect(Utf16.fromUtf8(utf8)).toBe(utf16);
        });
        it('must convert from Base64', function () {
            expect(Utf16.fromBase64(base64)).toBe(utf16);
        });
        it('must convert from Base64Url', function () {
            expect(Utf16.fromBase64Url(base64url)).toBe(utf16);
        });
    });
    describe('Base64', function () {
        it('must convert from Utf8', function () {
            expect(Base64.fromUtf8(utf8)).toBe(base64);
        });
        it('must convert from Base64', function () {
            expect(Base64.fromUtf16(utf16)).toBe(base64);
        });
        it('must convert from Base64Url', function () {
            expect(Base64.fromBase64Url(base64url)).toBe(base64);
        });
    });
    describe('Base64Url', function () {
        it('must convert from Utf8', function () {
            expect(Base64Url.fromUtf8(utf8)).toBe(base64url);
            var a = "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk";
            var b = Utf8.fromBase64Url(a);
            var a$ = Base64Url.fromUtf8(b);
            expect(a).toBe(a$);
        });
        it('must convert from Utf16', function () {
            expect(Base64Url.fromUtf16(utf16)).toBe(base64url);
        });
        it('must convert from Base64', function () {
            expect(Base64Url.fromUtf16(utf16)).toBe(base64url);
        });
    });
    describe('Base32', function () {
        it('must convert from number[]', function () {
            expect(Base32.fromBytes([72])).toBe('JA======');
            expect(Base32.fromBytes([72, 101])).toBe('JBSQ====');
            expect(Base32.fromBytes([72, 101, 108])).toBe('JBSWY===');
            expect(Base32.fromBytes([72, 101, 108, 108])).toBe('JBSWY3A=');
            expect(Base32.fromBytes([72, 101, 108, 108, 111])).toBe('JBSWY3DP');
        });
        it('must convert from Uint8Array', function () {
            expect(Base32.fromBytes(new Uint8Array([72]))).toBe('JA======');
            expect(Base32.fromBytes(new Uint8Array([72, 101]))).toBe('JBSQ====');
            expect(Base32.fromBytes(new Uint8Array([72, 101, 108]))).toBe('JBSWY===');
            expect(Base32.fromBytes(new Uint8Array([72, 101, 108, 108]))).toBe('JBSWY3A=');
            expect(Base32.fromBytes(new Uint8Array([72, 101, 108, 108, 111]))).toBe('JBSWY3DP');
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
//# sourceMappingURL=encoders.spec.js.map