/** Enumerates supported username formats. */
export declare enum UserNameType {
    /** A name not associated with any Windows account, to be used for local databases only.  */
    Unknown = 0,
    /** NetBIOS domain name, for example, “THE_COMPANY”. */
    NetBIOSDomain = 1,
    /** A DNS domain name, for example, “thecompany.com”. */
    DNSDomain = 2,
    /** A MS Windows account name, e.g “the_company\jdoe” (domain\user) or "the_company\" (domain only). */
    SAM = 3,
    /** The account name format used in Microsoft(r) Windows NT(r) 4.0, for example, “jdoe”.  */
    Simple = 4,
    /** A GUID string, for example, “4fa050f0-f561-11cf-bdd9-00aa003a77b6”.  */
    UID = 5,
    /** A user principal name, for example, “jdoe@thecompany.com”.  */
    UPN = 6,
    /** A friendly display name, for example, “John Doe”. */
    Display = 7,
    /** A user SID string, for example, “S-1-5-21-1004”. */
    SID = 8,
    /** A user name associated with DigitalPersona identity database (formerly known as "Altus user"). */
    DP = 9
}
