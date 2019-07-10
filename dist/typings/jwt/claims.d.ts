import { User } from '../users';
import { CredentialId } from '../credentials';
/** Claim information about a credential used. See {@link ClaimSet.crd}. */
export interface CredentialUsed {
    /** Credential ID */
    readonly id: CredentialId;
    /** Time when the credential was used, in seconds of a Unix Epoch. */
    readonly time: number;
}
/** Enumerate publicly registered and private DigitalPersona claim names. */
export declare enum ClaimName {
    TokensId = "jti",
    IssuerName = "iss",
    IssuedAt = "iat",
    Audience = "aud",
    NotBefore = "nbf",
    ExpiresAfter = "exp",
    SubjectName = "sub",
    IssuerDomain = "dom",
    SubjectUid = "uid",
    ADGuid = "ad_guid",
    CredentialsUsed = "crd",
    Group = "group",
    Role = "role",
    WindowsAccountName = "wan",
    T24Principal = "t24"
}
/** Set of claims passed in a JSON Web Token. */
export interface ClaimSet {
    readonly jti?: string;
    /** "Issuer" claim. Name of the issuing agency. */
    readonly iss?: string;
    /** "Issued At Time" claim. Number of seconds since Unix Epoch to the time when the JWT was issued. */
    readonly iat?: number;
    /** "Audience" claim. */
    readonly aud?: string;
    /** "Expiration" claim. Number of seconds since Unix Epoch to the time when the JWT must expire. */
    readonly exp?: number;
    /** "Not Before" claim. Number of seconds since Unix Epoch to the time when the JWT becomes effective. */
    readonly nbf?: number;
    /** "Subject" claim. Name of a subject the token was issued to. */
    readonly sub?: string | User;
    /** "Domain" claim. Subject's security domain. Private DigitalPersona claim. */
    readonly dom?: string;
    /** "Unique ID" claim. Subject's Unique ID. Private DigitalPersona claim. */
    readonly uid?: string;
    /** "Credentials" claim.
     * List of credentials used by the subject for authentication.
     * Private DigitalPersona claim.
     */
    readonly crd?: CredentialUsed[];
    /** "Group" claim. List of groups the subject is a member of. */
    readonly group?: string[];
    /** "Role" claim. List of roles the subject belongs to. */
    readonly role?: string[];
    /** "Windows Account Name" claim. Subjects name in Windows SAM format. */
    readonly wan?: string;
    /** "T24" claim. Subject ID in Temenos T24 system. */
    readonly t24?: string;
}
/** Alias type representing all claim names, as if
 * `type ClaimNames = "jti" | "iss" | "iat" | "aud" | ... | "wan" | "t24";`
 */
export declare type ClaimNames = {
    [K in keyof ClaimSet]: ClaimSet[K] extends Function ? never : K;
}[keyof ClaimSet];
