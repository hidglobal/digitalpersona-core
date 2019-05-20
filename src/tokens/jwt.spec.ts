import { JWT } from './jwt';
import { ClaimSet, ClaimName } from './claims';

describe("JWT: ", () =>
{
    const jwt = [
        "eyJ0eXAiOiJKV1QiLCJhbGciOiIgUlMyNTYifQ",
        "eyJqdGkiOiJ7QUMxODRBMTMtNjBBQi00MGU1LUE1MTQtRTEwRjc3N0VDMkY5fSIsImlzcyI6ImFsdHVzLTAxLmRpZ2l0YWxwZXJzb25hLmNvbSIsImlhdCI6MTMwMDgxOTM4MCwic3ViIjp7Im5hbWUiOiJrbG96aW5AZGlnaXRhbHBlcnNvbmEuY29tIiwidHlwZSI6Nn0sImNyZCI6W3siaWQiOiJ7RDFBMUY1NjEtRTE0QS00Njk5LTkxMzgtMkVCNTIzRTEzMkNDfSIsInRpbWUiOjEzMDA4MTkzODB9LHsiaWQiOiJ7QUMxODRBMTMtNjBBQi00MGU1LUE1MTQtRTEwRjc3N0VDMkY5fSIsInRpbWUiOjc4NjUyMzM2Nzl9XX0"
        ,"dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"
        ].join(".");

    const header =  {
        typ: "JWT",
        alg: " RS256"
    };
    const payload: ClaimSet = {
        jti: "{AC184A13-60AB-40e5-A514-E10F777EC2F9}",
        iss: "altus-01.digitalpersona.com",
        iat: 1300819380,
        sub: { name: "klozin@digitalpersona.com", type: 6 },
        crd: [
            {"id":"{D1A1F561-E14A-4699-9138-2EB523E132CC}","time": 1300819380},
            {"id":"{AC184A13-60AB-40e5-A514-E10F777EC2F9}","time": 7865233679}
        ]
    };
    const signature = "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk";

    describe("Constructing", () =>
    {
        it("must construct from Base64Url", () => {
            const claims = JWT.claims(jwt);
            expect(claims.jti).toBe(payload.jti);
            expect(claims.iss).toBe(payload.iss);
            expect(claims.iat).toBe(payload.iat);
            expect(claims.sub).toEqual(payload.sub);
            expect(claims.crd).toEqual(payload.crd);
            expect(claims[ClaimName.IssuedAt]).toBe(payload.iat);
        })
    });

})
