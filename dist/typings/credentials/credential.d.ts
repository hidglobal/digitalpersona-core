import { Base64String } from '../encoders';
/** Branded alias type for credential identifier strings. */
export declare type CredentialId = string & {
    brand?: "dp.core.Credential";
    encoding?: "guid";
};
/**
 * Credential data.
 */
export declare class Credential {
    static readonly Password: CredentialId;
    static readonly Fingerprints: CredentialId;
    static readonly Face: CredentialId;
    static readonly SmartCard: CredentialId;
    static readonly ContactlessCard: CredentialId;
    static readonly ProximityCard: CredentialId;
    static readonly PIN: CredentialId;
    static readonly SecurityQuestions: CredentialId;
    static readonly Bluetooth: CredentialId;
    static readonly OneTimePassword: CredentialId;
    static readonly U2F: CredentialId;
    static readonly IWA: CredentialId;
    static readonly Email: CredentialId;
    static readonly Behavior: CredentialId;
    static readonly Cards: CredentialId;
    /** Credential ID */
    readonly id: CredentialId;
    /** Base64url-encoded credential data. Format of data depends on credential type. */
    readonly data: Base64String | null;
    /** Constructs a credential. */
    constructor(id: CredentialId, data?: string | object | null, encode?: boolean);
    /** Constructs an empty credential object. */
    static None(): Credential;
    /** Constructs a credential object representing any credential. */
    static Any(): Credential;
}
