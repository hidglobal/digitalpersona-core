import { UserNameType } from './userNameType';
import { JWT, JSONWebToken } from '../jwt';

export class User
{
    public readonly name: string;
    public readonly type: UserNameType;

    public constructor(name: string, type?: UserNameType) {
        const reGUID = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
        this.name = name;
        this.type = type || (
            (name.indexOf('@') !== -1)  ? UserNameType.UPN :
            (name.indexOf('\\') !== -1) ? UserNameType.SAM :
            reGUID.test(name)           ? UserNameType.UID
                                        : UserNameType.DP);
    }

    public isAnonymous(): boolean {
        return !this.name || this.name.length === 0;
    }
    public isEveryone(): boolean {
        return this.name === "*";
    }

    public static Anonymous(): User
    {
        return new User("", UserNameType.Unknown);
    }
    public static Everyone(): User {
        return new User("*", UserNameType.Unknown);
    }
    public static fromJWT(token: JSONWebToken, type?: UserNameType): User
    {
        const claims = JWT.claims(token);
        const user = claims.sub && (claims.sub instanceof User) ? claims.sub :
                     claims.wan ? new User(claims.wan, type) :
                     claims.sub ? new User(claims.sub, type || UserNameType.DP) : User.Anonymous();
        return user;
    }
}
