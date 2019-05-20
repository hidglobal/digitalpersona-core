import { Utf16 } from '../encoders';
import { ClaimSet } from './claims';

class JWTHeader {
    public readonly typ?: string;
    public readonly cty?: string;
    public readonly alg?: string;

    public constructor(typ?: string, alg?: string, cty?: string) {
        this.typ = typ;
        this.cty = cty;
        this.alg = alg;
    }
}

export type JSONWebToken = string;

// Represents a JSON Web Token and gives access to the token's payload.
// Note that this class does not allow to validate the token signature in the browser,
// it must be done on a server side.
export class JWT
{

    public static claims(jwt: JSONWebToken): ClaimSet
    {
        const parts = jwt.split('.');
        const header = JSON.parse(Utf16.fromBase64Url(parts[0]));
        if (header.cty === "JWT") {
            // we have a nested JWT with encrypted payload (JWE).
            // Encrypted nested JWT may replicate some claims in the header to be publicly accessible.
            return {
                ...header,          // include all claims possibly replicated in the header
                ...new JWTHeader()  // exclude JWT Header properties ("typ", "cty", "alg")
            };
        } else {
            // unencrypted payload, use claims from the payload only
            const payload = JSON.parse(Utf16.fromBase64Url(parts[1]));
            return payload as ClaimSet;
        }
    }

    public static validate(jwt: JSONWebToken): Error[]|null
    {
        // TODO: checks:
        // iat < nbf < now < exp
        // n
        return null;
    }
}
