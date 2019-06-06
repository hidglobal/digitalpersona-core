import { JSONWebToken } from './jwt';

export class Ticket
{
    public readonly jwt: JSONWebToken;

    public constructor(jwt: JSONWebToken)
    {
        this.jwt = jwt;
    }

    public static None(): Ticket {
        return new Ticket("");
    }
}
