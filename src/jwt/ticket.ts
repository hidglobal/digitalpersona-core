import { JSONWebToken } from './jwt';

/**
 * A structure wrapping a JSON Web Token to pass it to the DigitalPersona Web Components services.
 */
export class Ticket
{
    /** A JSON Web Token */
    public readonly jwt: JSONWebToken;

    /** Constructs a ticket object. */
    public constructor(jwt: JSONWebToken)
    {
        this.jwt = jwt;
    }

    /** Creates a ticket with an emtpy token. Used as a placeholder when no token is needed. */
    public static None(): Ticket {
        return new Ticket("");
    }
}
