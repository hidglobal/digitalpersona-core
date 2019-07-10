import { Base64Url } from '../encoders';
/**
 * Credential data.
 */
var Credential = /** @class */ (function () {
    /** Constructs a credential. */
    function Credential(id, data, encode) {
        if (encode === void 0) { encode = true; }
        this.id = id;
        this.data = !data ? null
            : !encode ? JSON.stringify(data)
                : Base64Url.fromUtf16(typeof (data) !== "string" ? JSON.stringify(data) : data);
    }
    /** Constructs an empty credential object. */
    Credential.None = function () {
        return new Credential("");
    };
    /** Constructs a credential object representing any credential. */
    Credential.Any = function () {
        return new Credential("*");
    };
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
    return Credential;
}());
export { Credential };
//# sourceMappingURL=credential.js.map