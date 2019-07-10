/** Enumerate publicly registered and private DigitalPersona claim names. */
export var ClaimName;
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
})(ClaimName || (ClaimName = {}));
//# sourceMappingURL=claims.js.map