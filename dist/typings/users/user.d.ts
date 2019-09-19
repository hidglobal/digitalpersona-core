import { UserNameType } from './userNameType';
import { JSONWebToken } from '../jwt/jwt';
/**
 * Represents a user's identity using a user's name name and a type of the name.
 * This class is typially used to pass a user name during authentication.
 */
export declare class User {
    /** User name. Must be defined in one of supported formats (see {@link UserNameType}) */
    readonly name: string;
    /** Format of the user name */
    readonly type: UserNameType;
    /** Constructs the object using a username and a user type.
     * @param name - user name. No name transformation/canonicalization is performed.
     * @param type - an optional type of the user. If not provided, he type is deduced automatically.
     * @remarks
     * If no `type` parameter is provided, the username format is analyzes and automatic type is assigned.
     * For example:
     * * "user\@comtoso.com" name will be parsed as a {@link UserNameType.UPN | User Principal Name (UPN)},
     * * "Domain\\UserX" name will be parsed as a {@link UserNameType.SAM | Security Account Manager (SAM)} name,
     * * "6de5b5ed-85fc-4298-a18b-dac7d5a18369" will be parsed as a {@link UserNameType.UID | Unique Identifier (UID)} name,
     * * "UserX" name will be parsed as a {@link UserNameType.DP | DigitalPersona name} (used in LDS)
     * You may provide a `type` parameter if you want to enforce a specific name type.
     */
    constructor(name: string, type?: UserNameType);
    /** @returns `true` when the User object represents an anonymous user. */
    isAnonymous(): boolean;
    /** @returns `true` whrn the user object represents any user. */
    isEveryone(): boolean;
    /** Creates a user object representing an anonymous user. */
    static Anonymous(): User;
    /** Creates a user object representing every user. */
    static Everyone(): User;
    /** Creates a user object using claims in a JSON Web Token.
     * @param token - a JSON Web Token.
     * @param type - an optional username type to override automatic type detection and force a specific name format.
     * @returns a user object constructed from the `token` claims.
     * @remarks
     * The `token` should contain either {@link ClaimSet.sub |`sub`} or {@link ClaimSet.wan | `wan`} claim
     * to detect a user name. If no such claims are found, then {@link User.Anonymous | anonymous} user is returned.
     * The {@link ClaimSet.sub |`sub`} claim has a priority over the {@link ClaimSet.wan | `wan`} claim.
     * If `type` parameter is not defined, the name type is deduced automatically from the name string.
     * You may provide a `type` parameter if you want to enforce a specific name type.
     * See {@link User.constructor} for type deduction details.
     */
    static fromJWT(token: JSONWebToken, type?: UserNameType): User;
}
