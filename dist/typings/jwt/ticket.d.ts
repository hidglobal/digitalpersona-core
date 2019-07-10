import { JSONWebToken } from './jwt';
/**
 * A structure wrapping a JSON Web Token to pass it to the DigitalPersona Web Components services.
 */
export declare class Ticket {
    /** A JSON Web Token */
    readonly jwt: JSONWebToken;
    /** Constructs a ticket object. */
    constructor(jwt: JSONWebToken);
    /** Creates a ticket with an emtpy token. Used as a placeholder when no token is needed. */
    static None(): Ticket;
}
