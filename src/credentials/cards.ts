import { Credential } from "./credential";

export class SmartCard extends Credential
{
    constructor(cardData: string) {
        super(Credential.SmartCard, cardData);
    }
}

export class ContactlessCard extends Credential
{
    constructor(cardData: string) {
        super(Credential.ContactlessCard, cardData);
    }
}

export class ProximityCard extends Credential
{
    constructor(cardData: string) {
        super(Credential.ProximityCard, cardData);
    }
}
