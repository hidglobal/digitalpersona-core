import { Base64String, Base64Url } from '../encoders';

/** Branded alias type for credential identifier strings. */
export type CredentialId = string
                         & { brand?: "dp.core.Credential", encoding?: "guid" };

/**
 * Credential data.
 */
export class Credential
{
    // true credentials
    public static readonly Password          : CredentialId = "D1A1F561-E14A-4699-9138-2EB523E132CC";
    public static readonly Fingerprints      : CredentialId = "AC184A13-60AB-40E5-A514-E10F777EC2F9";
    public static readonly Face              : CredentialId = "85AEAA44-413B-4DC1-AF09-ADE15892730A";
    public static readonly SmartCard         : CredentialId = "D66CC98D-4153-4987-8EBE-FB46E848EA98";
    public static readonly ContactlessCard   : CredentialId = "F674862D-AC70-48CA-B73E-64A22F3BAC44";
    public static readonly ProximityCard     : CredentialId = "1F31360C-81C0-4EE0-9ACD-5A4400F66CC2";
    public static readonly PIN               : CredentialId = "8A6FCEC3-3C8A-40C2-8AC0-A039EC01BA05";
    public static readonly SecurityQuestions : CredentialId = "B49E99C6-6C94-42DE-ACD7-FD6B415DF503";
    public static readonly Bluetooth         : CredentialId = "E750A180-577B-47F7-ACD9-F89A7E27FA49";
    public static readonly OneTimePassword   : CredentialId = "324C38BD-0B51-4E4D-BD75-200DA0C8177F";
    public static readonly U2F               : CredentialId = "5D5F73AF-BCE5-4161-9584-42A61AED0E48";
    public static readonly IWA               : CredentialId = "AE922666-9667-49BC-97DA-1EB0E1EF73D2";
    public static readonly Email             : CredentialId = "7845D71D-AB67-4EA7-913C-F81E75C3A087";
    public static readonly Behavior          : CredentialId = "193C41F6-5CF6-4525-84CC-223603DAC9AB";
    // pseudo-credentials
    public static readonly Cards             : CredentialId = "FCFA704C-144B-42DB-8DF3-13F5CD20C525"; // all card types

    /** Credential ID */
    public readonly id: CredentialId;

    /** Base64url-encoded credential data. Format of data depends on credential type. */
    public readonly data: Base64String|null;

    /** Constructs a credential. */
    public constructor(id: CredentialId, data?: string | object | null, encode: boolean = true) {
        this.id = id;
        this.data = !data       ? null
                  : !encode     ? JSON.stringify(data)
                  : Base64Url.fromUtf16(typeof(data) !== "string" ? JSON.stringify(data) : data);
    }

    /** Constructs an empty credential object. */
    public static None(): Credential {
        return new Credential("");
    }

    /** Constructs a credential object representing any credential. */
    public static Any(): Credential {
        return new Credential("*");
    }
}
