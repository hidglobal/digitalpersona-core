import { Base64String, Base64Url } from '../encoders';

export type CredentialId = string;

export class Credential
{
    // true credentials
    public static Password          : CredentialId = "D1A1F561-E14A-4699-9138-2EB523E132CC";
    public static Fingerprints      : CredentialId = "AC184A13-60AB-40E5-A514-E10F777EC2F9";
    public static Face              : CredentialId = "85AEAA44-413B-4DC1-AF09-ADE15892730A";
    public static SmartCard         : CredentialId = "D66CC98D-4153-4987-8EBE-FB46E848EA98";
    public static ContactlessCard   : CredentialId = "F674862D-AC70-48CA-B73E-64A22F3BAC44";
    public static ProximityCard     : CredentialId = "1F31360C-81C0-4EE0-9ACD-5A4400F66CC2";
    public static PIN               : CredentialId = "8A6FCEC3-3C8A-40C2-8AC0-A039EC01BA05";
    public static SecurityQuestions : CredentialId = "B49E99C6-6C94-42DE-ACD7-FD6B415DF503";
    public static Bluetooth         : CredentialId = "E750A180-577B-47F7-ACD9-F89A7E27FA49";
    public static OneTimePassword   : CredentialId = "324C38BD-0B51-4E4D-BD75-200DA0C8177F";
    public static U2F               : CredentialId = "5D5F73AF-BCE5-4161-9584-42A61AED0E48";
    public static IWA               : CredentialId = "AE922666-9667-49BC-97DA-1EB0E1EF73D2";
    public static Email				: CredentialId = "7845D71D-AB67-4EA7-913C-F81E75C3A087";
    public static Behavior          : CredentialId = "193C41F6-5CF6-4525-84CC-223603DAC9AB";
    // pseudo-credentials
    public static Cards             : CredentialId = "FCFA704C-144B-42DB-8DF3-13F5CD20C525"; // all card types

    public readonly id: CredentialId;
    public readonly data: Base64String|null;

    public constructor(id: CredentialId, data?: string | object | null, encode: boolean = true) {
        this.id = id;
        this.data = !data       ? null
                  : !encode     ? JSON.stringify(data)
                  : Base64Url.fromUtf16(typeof(data) !== "string" ? JSON.stringify(data) : data);
    }

    public static None(): Credential {
        return new Credential("");
    }
    public static Any(): Credential {
        return new Credential("*");
    }
}
