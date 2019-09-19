import { __assign } from "tslib";
import { Utf16 } from '../encoders';
import { User } from '../users/user';
/** Represents a JSON Web Token Header. */
var JWTHeader = /** @class */ (function () {
    /** Constructs a JWT header. */
    function JWTHeader(typ, alg, cty) {
        this.typ = typ;
        this.cty = cty;
        this.alg = alg;
    }
    return JWTHeader;
}());
/** Represents a JSON Web Token and gives access to the token's payload.
 * Note that this class does not allow to validate the token signature in the browser,
 * it must be done on a server side.
 */
var JWT = /** @class */ (function () {
    function JWT() {
    }
    /** Extracts a claims set from the JSON Web Token.
     * @param jwt - a JSON Web Token string.
     * @returns a claims set.
     */
    JWT.claims = function (jwt) {
        var parts = jwt.split('.');
        var header = JSON.parse(Utf16.fromBase64Url(parts[0]));
        if (header.cty === "JWT") {
            // we have a nested JWT with encrypted payload (JWE).
            // Encrypted nested JWT may replicate some claims in the header to be publicly accessible.
            return __assign(__assign({}, header), new JWTHeader());
        }
        else {
            // unencrypted payload, use claims from the payload only
            var payload = JSON.parse(Utf16.fromBase64Url(parts[1]));
            // convert "subject" to a User type
            if (typeof (payload.sub) === "object") {
                var _a = payload.sub, name_1 = _a.name, type = _a.type;
                payload.sub = new User(name_1, type);
            }
            return payload;
        }
    };
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
    JWT.errors = function (jwt) {
        var e = [];
        var claims = JWT.claims(jwt);
        var now = new Date().getTime() / 1000; // seconds since the epoch start
        // iat < nbf < now < exp
        if (claims.iat && claims.nbf && claims.iat > claims.nbf)
            e.push(new Error('JWT.Error.IssueTimeLaterThanNotBefore'));
        if (claims.nbf && claims.nbf > now)
            e.push(new Error('JWT.Error.NotEffectiveYet'));
        if (claims.exp && claims.exp <= now)
            e.push(new Error('JWT.Error.Expired'));
        return e.length > 0 ? e : null;
    };
    return JWT;
}());
export { JWT };
//# sourceMappingURL=jwt.js.map