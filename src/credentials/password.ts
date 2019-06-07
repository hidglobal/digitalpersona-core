import { Credential } from "./credential";

export class Password extends Credential
{
    // constructor(password: string|null, oldPassword?: string|null) {
    //     super(Credential.Password,
    //         typeof oldPassword !== 'undefined'
    //             ? { oldPassword, newPassword: password }    // password change/reset
    //             : password                                  // password authentication
    //     );
    // }

    public constructor(data: string|object|null) {
        super(Credential.Password, data);
    }

    // public static forAuthentication(password: string) {
    //     return new Password(password);
    // }

    // public static forEnrollment(oldPassword: string, newPassword: string)
    // {
    //     return new Password({oldPassword, newPassword});
    // }
}
