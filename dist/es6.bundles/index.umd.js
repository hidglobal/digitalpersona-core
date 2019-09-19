(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory((global.dp = global.dp || {}, global.dp.core = global.dp.core || {})));
}(this, function (exports) { 'use strict';

    /**
     * Provides a way to construct sanitized URLs from a base URL, a path and a query object
     */
    class Url {
        /** Constructs an URL object from a base URL, a path and a query object.
         * @param base - base URL, e.g. `https://contoso.com`
         * @param path - optional path, e.g. `api/v1/user`
         * @param query - optional set of query parameters, e.g. `{ name: "john", type: "5" }`
         * @remarks
         * The URL is built by concatenation of a base URL with sanitized path and query object,
         * adding all needed delimiters. Example:
         * @example
         * ```
         * const url = new Url("https://contoso.com", "api/v1/user", { name: "john", type: "5" });
         * console.log(url.href);
         * > https://contoso.com/api/v1/user?name=john&type=5
         * ```
         */
        constructor(base, path, query) {
            this.href = Url.create(base, path, query);
        }
        /** Builds a sanitized URL query from an JS object.
         * @returns A hyperlink reference.
         */
        static getSanitizedQuery(query) {
            return Object
                .keys(query)
                .map(key => [key, query[key]]
                .map(encodeURIComponent)
                .join("="))
                .join("&");
        }
        /** Constructs an URL string from a base URL, a path and a query object.
         * @param base - base URL, e.g. `https://contoso.com`
         * @param path - optional path, e.g. `api/v1/user`
         * @param query - optional set of query parameters, e.g. `{ name: "john", type: "5" }`
         * @remarks
         * The URL is built by concatenation of a base URL with sanitized path and query object,
         * adding all needed delimiters.
         * @example
         * ```typescript
         * const href = Url.create("https://contoso.com", "api/v1/user", { name: "john", type: "5" });
         * console.log(href);
         * ```
         * `> https://contoso.com/api/v1/user?name=john&type=5`
         */
        static create(base, path, query) {
            return base
                + (path ? `/${encodeURI(path)}` : "")
                + (query ? `?${Url.getSanitizedQuery(query)}` : "");
        }
    }

    /**
     * Biometric factors.
     */
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
    })(exports.BioFactor || (exports.BioFactor = {}));
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
    })(exports.BioSampleFormatOwner || (exports.BioSampleFormatOwner = {}));
    /**
     * Biometric sample format info.
     */
    class BioSampleFormat {
        constructor(FormatOwner, FormatID) {
            this.FormatOwner = FormatOwner;
            this.FormatID = FormatID;
        }
    }
    (function (BioSampleType) {
        BioSampleType[BioSampleType["Raw"] = 1] = "Raw";
        BioSampleType[BioSampleType["Intermediate"] = 2] = "Intermediate";
        BioSampleType[BioSampleType["Processed"] = 4] = "Processed";
        BioSampleType[BioSampleType["RawWSQCompressed"] = 8] = "RawWSQCompressed";
        BioSampleType[BioSampleType["Encrypted"] = 16] = "Encrypted";
        BioSampleType[BioSampleType["Signed"] = 32] = "Signed";
    })(exports.BioSampleType || (exports.BioSampleType = {}));
    (function (BioSamplePurpose) {
        BioSamplePurpose[BioSamplePurpose["Any"] = 0] = "Any";
        BioSamplePurpose[BioSamplePurpose["Verify"] = 1] = "Verify";
        BioSamplePurpose[BioSamplePurpose["Identify"] = 2] = "Identify";
        BioSamplePurpose[BioSamplePurpose["Enroll"] = 3] = "Enroll";
        BioSamplePurpose[BioSamplePurpose["EnrollForVerificationOnly"] = 4] = "EnrollForVerificationOnly";
        BioSamplePurpose[BioSamplePurpose["EnrollForIdentificationOnly"] = 5] = "EnrollForIdentificationOnly";
        BioSamplePurpose[BioSamplePurpose["Audit"] = 6] = "Audit";
    })(exports.BioSamplePurpose || (exports.BioSamplePurpose = {}));
    (function (BioSampleEncryption) {
        BioSampleEncryption[BioSampleEncryption["None"] = 0] = "None";
        BioSampleEncryption[BioSampleEncryption["XTEA"] = 1] = "XTEA";
    })(exports.BioSampleEncryption || (exports.BioSampleEncryption = {}));
    /**
     * Contains meta-information about biometric sample data.
     */
    class BioSampleHeader {
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
    class BioSample {
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

    // tslint:disable: ban-types
    /**
     * Set of converters to UTF16.
     */
    class Utf16 {
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
    class Utf8 {
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
    class Base64 {
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
    class Base64Url {
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
    class Base32 {
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

    /** Enumerates supported username formats. */
    (function (UserNameType) {
        /** A name not associated with any Windows account, to be used for local databases only.  */
        UserNameType[UserNameType["Unknown"] = 0] = "Unknown";
        /** NetBIOS domain name, for example, “THE_COMPANY”. */
        UserNameType[UserNameType["NetBIOSDomain"] = 1] = "NetBIOSDomain";
        /** A DNS domain name, for example, “thecompany.com”. */
        UserNameType[UserNameType["DNSDomain"] = 2] = "DNSDomain";
        /** A MS Windows account name, e.g “the_company\jdoe” (domain\user) or "the_company\" (domain only). */
        UserNameType[UserNameType["SAM"] = 3] = "SAM";
        /** The account name format used in Microsoft(r) Windows NT(r) 4.0, for example, “jdoe”.  */
        UserNameType[UserNameType["Simple"] = 4] = "Simple";
        /** A GUID string, for example, “4fa050f0-f561-11cf-bdd9-00aa003a77b6”.  */
        UserNameType[UserNameType["UID"] = 5] = "UID";
        /** A user principal name, for example, “jdoe@thecompany.com”.  */
        UserNameType[UserNameType["UPN"] = 6] = "UPN";
        /** A friendly display name, for example, “John Doe”. */
        UserNameType[UserNameType["Display"] = 7] = "Display";
        /** A user SID string, for example, “S-1-5-21-1004”. */
        UserNameType[UserNameType["SID"] = 8] = "SID";
        /** A user name associated with DigitalPersona identity database (formerly known as "Altus user"). */
        UserNameType[UserNameType["DP"] = 9] = "DP";
    })(exports.UserNameType || (exports.UserNameType = {}));

    /**
     * Represents a user's identity using a user's name name and a type of the name.
     * This class is typially used to pass a user name during authentication.
     */
    class User {
        /** Constructs the object using a username and a user type.
         * @param name - user name. No name transformation/canonicalization is performed.
         * @param type - an optional type of the user. If not provided, he type is deduced automatically.
         * @remarks
         * If no `type` parameter is provided, the username format is analyzes and automatic type is assigned.
         * For example:
         * * "user\@comtoso.com" name will be parsed as a {@link UserNameType.UPN | User Principal Name (UPN)},
         * * "Domain\\UserX" name will be parsed as a {@link UserNameType.SAM | Security Account Manager (SAM)} name,
         * * "6de5b5ed-85fc-4298-a18b-dac7d5a18369" will be parsed as a {@link UserNameType.UID | Unique Identifier (UID)} name,
         * * "UserX" name will be parsed as a {@link UserNameType.DP | DigitalPersona name} (used in LDS)
         * You may provide a `type` parameter if you want to enforce a specific name type.
         */
        constructor(name, type) {
            const reGUID = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
            this.name = name || "";
            this.type = type || ((this.name.length === 0) ? exports.UserNameType.Unknown :
                (this.name === "*") ? exports.UserNameType.Unknown :
                    (this.name.indexOf('@') !== -1) ? exports.UserNameType.UPN :
                        (this.name.indexOf('\\') !== -1) ? exports.UserNameType.SAM :
                            reGUID.test(this.name) ? exports.UserNameType.UID
                                : exports.UserNameType.DP);
        }
        /** @returns `true` when the User object represents an anonymous user. */
        isAnonymous() {
            return !this.name || this.name.length === 0;
        }
        /** @returns `true` whrn the user object represents any user. */
        isEveryone() {
            return this.name === "*";
        }
        /** Creates a user object representing an anonymous user. */
        static Anonymous() {
            return new User("", exports.UserNameType.Unknown);
        }
        /** Creates a user object representing every user. */
        static Everyone() {
            return new User("*", exports.UserNameType.Unknown);
        }
        /** Creates a user object using claims in a JSON Web Token.
         * @param token - a JSON Web Token.
         * @param type - an optional username type to override automatic type detection and force a specific name format.
         * @returns a user object constructed from the `token` claims.
         * @remarks
         * The `token` should contain either {@link ClaimSet.sub |`sub`} or {@link ClaimSet.wan | `wan`} claim
         * to detect a user name. If no such claims are found, then {@link User.Anonymous | anonymous} user is returned.
         * The {@link ClaimSet.sub |`sub`} claim has a priority over the {@link ClaimSet.wan | `wan`} claim.
         * If `type` parameter is not defined, the name type is deduced automatically from the name string.
         * You may provide a `type` parameter if you want to enforce a specific name type.
         * See {@link User.constructor} for type deduction details.
         */
        static fromJWT(token, type) {
            const claims = JWT.claims(token);
            const user = claims.sub && (claims.sub instanceof User) ? claims.sub :
                claims.wan ? new User(claims.wan, type) :
                    claims.sub ? new User(claims.sub, type || exports.UserNameType.DP) : User.Anonymous();
            return user;
        }
    }

    /** Represents a JSON Web Token Header. */
    class JWTHeader {
        /** Constructs a JWT header. */
        constructor(typ, alg, cty) {
            this.typ = typ;
            this.cty = cty;
            this.alg = alg;
        }
    }
    /** Represents a JSON Web Token and gives access to the token's payload.
     * Note that this class does not allow to validate the token signature in the browser,
     * it must be done on a server side.
     */
    class JWT {
        /** Extracts a claims set from the JSON Web Token.
         * @param jwt - a JSON Web Token string.
         * @returns a claims set.
         */
        static claims(jwt) {
            const parts = jwt.split('.');
            const header = JSON.parse(Utf16.fromBase64Url(parts[0]));
            if (header.cty === "JWT") {
                // we have a nested JWT with encrypted payload (JWE).
                // Encrypted nested JWT may replicate some claims in the header to be publicly accessible.
                return Object.assign(Object.assign({}, header), new JWTHeader());
            }
            else {
                // unencrypted payload, use claims from the payload only
                const payload = JSON.parse(Utf16.fromBase64Url(parts[1]));
                // convert "subject" to a User type
                if (typeof (payload.sub) === "object") {
                    const { name, type } = payload.sub;
                    payload.sub = new User(name, type);
                }
                return payload;
            }
        }
        /** Validates the JSON Web Token and returns a collection of detected validation errors.
         * @param jwt - a JSON Web Token.
         * @returns an array of errors found, or `null` if the token is valid.
         * @remarks
         * Only client-side checks are performed, no signature validation.
         * The token's claims must satisfy following expression:
         * `iat <= nbf < now < exp`
         * where `iat` is time when the token was issued, `nbf` is a time when the token becomes valid,
         * `exp` is a token expiration time, `now` is current time.
         * Following errors may be returned:
         *
         *   * 'JWT.Error.IssueTimeLaterThanNotBefore' if `iat > nbf`,
         *   * 'JWT.Error.NotEffectiveYet' when `now < nbf`,
         *   * 'JWT.Error.Expired' when `now >= exp`.
         */
        static errors(jwt) {
            const e = [];
            const claims = JWT.claims(jwt);
            const now = new Date().getTime() / 1000; // seconds since the epoch start
            // iat < nbf < now < exp
            if (claims.iat && claims.nbf && claims.iat > claims.nbf)
                e.push(new Error('JWT.Error.IssueTimeLaterThanNotBefore'));
            if (claims.nbf && claims.nbf > now)
                e.push(new Error('JWT.Error.NotEffectiveYet'));
            if (claims.exp && claims.exp <= now)
                e.push(new Error('JWT.Error.Expired'));
            return e.length > 0 ? e : null;
        }
    }

    /** Enumerate publicly registered and private DigitalPersona claim names. */
    (function (ClaimName) {
        // registered names
        ClaimName["TokensId"] = "jti";
        ClaimName["IssuerName"] = "iss";
        ClaimName["IssuedAt"] = "iat";
        ClaimName["Audience"] = "aud";
        ClaimName["NotBefore"] = "nbf";
        ClaimName["ExpiresAfter"] = "exp";
        ClaimName["SubjectName"] = "sub";
        // private DigitalPersona names
        ClaimName["IssuerDomain"] = "dom";
        ClaimName["SubjectUid"] = "uid";
        ClaimName["ADGuid"] = "ad_guid";
        ClaimName["CredentialsUsed"] = "crd";
        ClaimName["Group"] = "group";
        ClaimName["Role"] = "role";
        ClaimName["WindowsAccountName"] = "wan";
        ClaimName["T24Principal"] = "t24";
    })(exports.ClaimName || (exports.ClaimName = {}));

    /**
     * A structure wrapping a JSON Web Token to pass it to the DigitalPersona Web Components services.
     */
    class Ticket {
        /** Constructs a ticket object. */
        constructor(jwt) {
            this.jwt = jwt;
        }
        /** Creates a ticket with an emtpy token. Used as a placeholder when no token is needed. */
        static None() {
            return new Ticket("");
        }
    }

    /**
     * Credential data.
     */
    class Credential {
        /** Constructs a credential. */
        constructor(id, data, encode = true) {
            this.id = id;
            this.data = !data ? null
                : !encode ? JSON.stringify(data)
                    : Base64Url.fromUtf16(typeof (data) !== "string" ? JSON.stringify(data) : data);
        }
        /** Constructs an empty credential object. */
        static None() {
            return new Credential("");
        }
        /** Constructs a credential object representing any credential. */
        static Any() {
            return new Credential("*");
        }
    }
    // true credentials
    Credential.Password = "D1A1F561-E14A-4699-9138-2EB523E132CC";
    Credential.Fingerprints = "AC184A13-60AB-40E5-A514-E10F777EC2F9";
    Credential.Face = "85AEAA44-413B-4DC1-AF09-ADE15892730A";
    Credential.SmartCard = "D66CC98D-4153-4987-8EBE-FB46E848EA98";
    Credential.ContactlessCard = "F674862D-AC70-48CA-B73E-64A22F3BAC44";
    Credential.ProximityCard = "1F31360C-81C0-4EE0-9ACD-5A4400F66CC2";
    Credential.PIN = "8A6FCEC3-3C8A-40C2-8AC0-A039EC01BA05";
    Credential.SecurityQuestions = "B49E99C6-6C94-42DE-ACD7-FD6B415DF503";
    Credential.Bluetooth = "E750A180-577B-47F7-ACD9-F89A7E27FA49";
    Credential.OneTimePassword = "324C38BD-0B51-4E4D-BD75-200DA0C8177F";
    Credential.U2F = "5D5F73AF-BCE5-4161-9584-42A61AED0E48";
    Credential.IWA = "AE922666-9667-49BC-97DA-1EB0E1EF73D2";
    Credential.Email = "7845D71D-AB67-4EA7-913C-F81E75C3A087";
    Credential.Behavior = "193C41F6-5CF6-4525-84CC-223603DAC9AB";
    // pseudo-credentials
    Credential.Cards = "FCFA704C-144B-42DB-8DF3-13F5CD20C525"; // all card types

    /**
     * Positions of fingers.
     */
    (function (FingerPosition) {
        FingerPosition[FingerPosition["Unknown"] = 0] = "Unknown";
        FingerPosition[FingerPosition["RightThumb"] = 1] = "RightThumb";
        FingerPosition[FingerPosition["RightIndex"] = 2] = "RightIndex";
        FingerPosition[FingerPosition["RightMiddle"] = 3] = "RightMiddle";
        FingerPosition[FingerPosition["RightRing"] = 4] = "RightRing";
        FingerPosition[FingerPosition["RightLittle"] = 5] = "RightLittle";
        FingerPosition[FingerPosition["LeftThumb"] = 6] = "LeftThumb";
        FingerPosition[FingerPosition["LeftIndex"] = 7] = "LeftIndex";
        FingerPosition[FingerPosition["LeftMiddle"] = 8] = "LeftMiddle";
        FingerPosition[FingerPosition["LeftRing"] = 9] = "LeftRing";
        FingerPosition[FingerPosition["LeftLittle"] = 10] = "LeftLittle";
    })(exports.FingerPosition || (exports.FingerPosition = {}));
    /** Finger enrollment data. */
    class Finger {
        constructor(
        /** Finger position. */
        position) {
            this.position = position;
        }
        /** Creates the finger enrollment data from a plain JSON object. */
        static fromJson(json) {
            const obj = json;
            return new Finger(obj.position);
        }
    }

    (function (FaceImageType) {
        FaceImageType[FaceImageType["Jpeg"] = 1] = "Jpeg";
    })(exports.FaceImageType || (exports.FaceImageType = {}));
    /**
     * Face image data.
     */
    class FaceImage {
        constructor(
        /** Base64url-encoded image data. */
        ImageData, 
        /** Image format. */
        ImageType = exports.FaceImageType.Jpeg) {
            this.ImageData = ImageData;
            this.ImageType = ImageType;
            /** Version info. */
            this.Version = 1;
        }
        /** Extracts face image from a data URL. Only `data:image/jpeg;base64` is supported for now. */
        static fromDataURL(image) {
            return new FaceImage(image.replace("data:image/jpeg;base64,", ""));
        }
        /** Extracts face image from a browser's canvas object.  */
        static fromCanvas(canvas, quality = 1.0) {
            return FaceImage.fromDataURL(canvas.toDataURL("image/jpeg", quality));
        }
        /** Exports the face image data to a {@link BioSample} object. */
        toBioSample(format = new BioSampleFormat(exports.BioSampleFormatOwner.None, 0), purpose = exports.BioSamplePurpose.Any, sdkVersion = 0x30100) {
            return new BioSample(new BioSampleHeader(exports.BioFactor.FacialFeatures, format, exports.BioSampleType.Raw, purpose, -1, exports.BioSampleEncryption.None), Base64Url.fromJSON(this));
        }
    }

    /**
     * Type of a security question.
     */
    (function (QuestionType) {
        /** A security question from a standard predefined list of questions ({@link Question.number} <= 100). */
        QuestionType[QuestionType["Regular"] = 0] = "Regular";
        /** A user-defined security question ({@link Question.number} > 100). */
        QuestionType[QuestionType["Custom"] = 1] = "Custom";
    })(exports.QuestionType || (exports.QuestionType = {}));
    /**
     * Security question data.
     */
    class Question {
        /** Constructs a security question. */
        constructor(
        /** An index of a question in a question list. */
        number, 
        /** A question language ID. */
        lang_id, 
        /** A question sublanguage ID. */
        sublang_id, 
        /** A keyboard layout for the answer. */
        keyboard_layout, 
        /** A text of the security question (only when {@link Question.type} === {@link QuestionType.Custom}) */
        text) {
            this.number = number;
            this.lang_id = lang_id;
            this.sublang_id = sublang_id;
            this.keyboard_layout = keyboard_layout;
            this.text = text;
            /** Version info. */
            this.version = 1;
            this.type = number <= 100 ? exports.QuestionType.Regular : exports.QuestionType.Custom;
            if (this.type === exports.QuestionType.Custom && !text)
                throw new Error("Question text is required for custom questions");
        }
        /** Creates a security question from a plain JSON object. */
        static fromJson(json) {
            const obj = json;
            return new Question(obj.number, obj.lang_id, obj.sublang_id, obj.keyboard_layout, obj.text);
        }
    }
    /**
     * An answer to a security question.
     */
    class Answer {
        /** Creates an answer to a security question. */
        constructor(question, text) {
            this.text = text;
            this.number = (question instanceof Question) ? question.number : question;
        }
    }

    exports.Answer = Answer;
    exports.Base32 = Base32;
    exports.Base64 = Base64;
    exports.Base64Url = Base64Url;
    exports.BioSample = BioSample;
    exports.BioSampleFormat = BioSampleFormat;
    exports.BioSampleHeader = BioSampleHeader;
    exports.Credential = Credential;
    exports.FaceImage = FaceImage;
    exports.Finger = Finger;
    exports.JWT = JWT;
    exports.Question = Question;
    exports.Ticket = Ticket;
    exports.Url = Url;
    exports.User = User;
    exports.Utf16 = Utf16;
    exports.Utf8 = Utf8;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.umd.js.map
