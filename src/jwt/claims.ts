import { User } from '../users';

export interface CredentialUsed {
    readonly id: string;
    readonly time: number;
}

export enum ClaimName {
    // registered names
    TokensId            = "jti",
    IssuerName          = "iss",
    IssuedAt            = "iat",
    Audience            = "aud",
    NotBefore           = "nbf",
    ExpiresAfter        = "exp",
    SubjectName         = "sub",
    // private DigitalPersona names
    IssuerDomain        = "dom",
    SubjectUid          = "uid",
    CredentialsUsed     = "crd",
    Group               = "group",
    Role                = "role",
    WindowsAccountName  = "wan",
    T24Principal        = "t24",
}

export interface ClaimSet {
    // registered claims
    readonly jti?: string;
    readonly iss?: string;
    readonly iat?: number;
    readonly aud?: string;
    readonly exp?: number;
    readonly nbf?: number;
    readonly sub?: string|User;
    // private claims
    readonly dom?: string;
    readonly uid?: string;
    readonly crd?: CredentialUsed[];
    readonly group?: string[];
    readonly role?: string[];
    readonly wan?: string;
    readonly t24?: string;
}

export type ClaimNames = { [K in keyof ClaimSet]: ClaimSet[K] extends Function ? never : K }[keyof ClaimSet];
