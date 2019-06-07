import { Credential } from "./credential";

export class PIN extends Credential
{
    public constructor(data: string|object|null) {
        super(Credential.PIN, data);
    }

    public static forAuthentication(pin: string) {
        return new PIN(pin);
    }

    public static forEnrollment(pin: string)
    {
        return new PIN(pin);
    }

    public static forDelete()
    {
        return new PIN(null);
    }
}
