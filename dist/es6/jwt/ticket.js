/**
 * A structure wrapping a JSON Web Token to pass it to the DigitalPersona Web Components services.
 */
export class Ticket {
    /** Constructs a ticket object. */
    constructor(jwt) {
        this.jwt = jwt;
    }
    /** Creates a ticket with an emtpy token. Used as a placeholder when no token is needed. */
    static None() {
        return new Ticket("");
    }
}
//# sourceMappingURL=ticket.js.map