import { ClaimSet } from './claims';
/** Branded alias type for a string representing a JSON Web Token. */
export declare type JSONWebToken = string & {
    encoding?: "jwt";
};
/** Represents a JSON Web Token and gives access to the token's payload.
 * Note that this class does not allow to validate the token signature in the browser,
 * it must be done on a server side.
 */
export declare class JWT {
    /** Extracts a claims set from the JSON Web Token.
     * @param jwt - a JSON Web Token string.
     * @returns a claims set.
     */
    static claims(jwt: JSONWebToken): ClaimSet;
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
    static errors(jwt: JSONWebToken): Error[] | null;
}
