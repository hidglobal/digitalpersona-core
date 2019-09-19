import { Utf16 } from '../encoders';
import { User } from '../users/user';
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
export class JWT {
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
//# sourceMappingURL=jwt.js.map