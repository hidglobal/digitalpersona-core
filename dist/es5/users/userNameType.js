/** Enumerates supported username formats. */
export var UserNameType;
(function (UserNameType) {
    /** A name not associated with any Windows account, to be used for local databases only.  */
    UserNameType[UserNameType["Unknown"] = 0] = "Unknown";
    /** NetBIOS domain name, for example, “THE_COMPANY”. */
    UserNameType[UserNameType["NetBIOSDomain"] = 1] = "NetBIOSDomain";
    /** A DNS domain name, for example, “thecompany.com”. */
    UserNameType[UserNameType["DNSDomain"] = 2] = "DNSDomain";
    /** A MS Windows account name, e.g “the_company\jdoe” (domain\user) or "the_company\" (domain only). */
    UserNameType[UserNameType["SAM"] = 3] = "SAM";
    /** The account name format used in Microsoft(r) Windows NT(r) 4.0, for example, “jdoe”.  */
    UserNameType[UserNameType["Simple"] = 4] = "Simple";
    /** A GUID string, for example, “4fa050f0-f561-11cf-bdd9-00aa003a77b6”.  */
    UserNameType[UserNameType["UID"] = 5] = "UID";
    /** A user principal name, for example, “jdoe@thecompany.com”.  */
    UserNameType[UserNameType["UPN"] = 6] = "UPN";
    /** A friendly display name, for example, “John Doe”. */
    UserNameType[UserNameType["Display"] = 7] = "Display";
    /** A user SID string, for example, “S-1-5-21-1004”. */
    UserNameType[UserNameType["SID"] = 8] = "SID";
    /** A user name associated with DigitalPersona identity database (formerly known as "Altus user"). */
    UserNameType[UserNameType["DP"] = 9] = "DP";
})(UserNameType || (UserNameType = {}));
//# sourceMappingURL=userNameType.js.map