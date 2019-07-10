/**
 * A structure wrapping a JSON Web Token to pass it to the DigitalPersona Web Components services.
 */
var Ticket = /** @class */ (function () {
    /** Constructs a ticket object. */
    function Ticket(jwt) {
        this.jwt = jwt;
    }
    /** Creates a ticket with an emtpy token. Used as a placeholder when no token is needed. */
    Ticket.None = function () {
        return new Ticket("");
    };
    return Ticket;
}());
export { Ticket };
//# sourceMappingURL=ticket.js.map