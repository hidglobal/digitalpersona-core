import { UserNameType } from './userNameType';

export class User
{
    public readonly name: string;
    public readonly type: UserNameType;

    public constructor(name: string, type?: UserNameType) {
        const reGUID = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
        this.name = name;
        this.type = type ||
            (name.indexOf('@') !== -1)  ? UserNameType.UPN :
            (name.indexOf('\\') !== -1) ? UserNameType.SAM :
            reGUID.test(name)           ? UserNameType.UID
                                        : UserNameType.DP;
    }

    public static Anonymous(): User
    {
        return new User("", UserNameType.Unknown);
    }
    public static Everyone(): User {
        return new User("*", UserNameType.Unknown);
    }
}
