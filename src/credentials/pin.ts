import { Credential } from "./credential";

export class PIN extends Credential
{
    constructor(pin: string) {
        super(Credential.PIN, pin);
    }
}
