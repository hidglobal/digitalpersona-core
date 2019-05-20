export enum UserNameType
{
    Unknown = 0,        // A name not associated with any Windows account, to be used for local databases only
    NetBIOSDomain = 1,  // NetBIOS domain name, for example, “THE_COMPANY”
    DNSDomain = 2,      // A DNS domain name, for example, “thecompany.com”
    SAM = 3 ,	        // A MS Windows account name, e.g “the_company\jdoe” (domain\user) or "the_company\" (domain only)
    Simple = 4,	        // The account name format used in Microsoft(r) Windows NT(r) 4.0, for example, “jdoe”
    UID = 5,            // A GUID string, for example, “{4fa050f0-f561-11cf-bdd9-00aa003a77b6}”
    UPN = 6,	        // A user principal name, for example, “jdoe@thecompany.com”
    Display = 7,        // A friendly display name, for example, “John Doe”
    SID = 8,            // A user SID string, for example, “S-1-5-21-1004”
    DP = 9,             // User name associated with DP identity database.
}
