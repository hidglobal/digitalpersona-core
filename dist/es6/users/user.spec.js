import { User } from "./user";
import { UserNameType } from "./userNameType";
describe("User", () => {
    it("must construct UPN user", () => {
        const type = UserNameType.UPN;
        const validNames = [
            "user@company.com",
            "user@company",
            "USER@COMPANY.COM",
            "u_s-e.r@company.com",
        ];
        for (const name of validNames) {
            const user = new User(name);
            expect(user.name).toBe(name);
            expect(user.type).toBe(type);
        }
    });
    it("must construct SAM user", () => {
        const type = UserNameType.SAM;
        const validNames = [
            "company\\user",
            "COMPANY\\USER",
            "COMPANY\\",
            "company.com\\user-name",
        ];
        for (const name of validNames) {
            const user = new User(name);
            expect(user.name).toBe(name);
            expect(user.type).toBe(type);
        }
    });
    it("must construct DP user", () => {
        const type = UserNameType.DP;
        const validNames = [
            "user1",
            "USER1",
            "USER-NAME",
            "user_name",
            "user/name",
        ];
        for (const name of validNames) {
            const user = new User(name);
            expect(user.name).toBe(name);
            expect(user.type).toBe(type);
        }
    });
    it("must construct UID user", () => {
        const type = UserNameType.UID;
        const validNames = [
            "6de5b5ed-85fc-4298-a18b-dac7d5a18369",
            "6DE5B5ED-85FC-4298-A18B-DAC7D5A18369",
        ];
        for (const name of validNames) {
            const user = new User(name);
            expect(user.name).toBe(name);
            expect(user.type).toBe(type);
        }
    });
    it("must construct Anonymous user", () => {
        const type = UserNameType.Unknown;
        const name = "";
        let user = User.Anonymous();
        expect(user.isAnonymous()).toBe(true);
        expect(user.name).toBe(name);
        expect(user.type).toBe(type);
        user = new User("");
        expect(user.isAnonymous()).toBe(true);
        expect(user.name).toBe(name);
        expect(user.type).toBe(type);
        user = new User(null);
        expect(user.isAnonymous()).toBe(true);
        expect(user.name).toBe(name);
        expect(user.type).toBe(type);
    });
    it("must construct Everyone user", () => {
        const type = UserNameType.Unknown;
        const name = "*";
        let user = User.Everyone();
        expect(user.isEveryone()).toBe(true);
        expect(user.name).toBe(name);
        expect(user.type).toBe(type);
        user = new User("*");
        expect(user.isEveryone()).toBe(true);
        expect(user.name).toBe(name);
        expect(user.type).toBe(type);
    });
    it("must construct user from JWT", () => {
        const jwt = ["eyJ0eXAiOiJKV1QiLCJhbGciOiIgUlMyNTYifQ",
            "eyJqdGkiOiJ7QUMxODRBMTMtNjBBQi00MGU1LUE1MTQtRTEwRjc3N0VDMkY5fSIsImlzcyI6ImFsdHVzLTAxLmRpZ2l0YWxwZXJzb25hLmNvbSIsImlhdCI6MTMwMDgxOTM4MCwic3ViIjp7Im5hbWUiOiJrbG96aW5AZGlnaXRhbHBlcnNvbmEuY29tIiwidHlwZSI6Nn0sImNyZCI6W3siaWQiOiJ7RDFBMUY1NjEtRTE0QS00Njk5LTkxMzgtMkVCNTIzRTEzMkNDfSIsInRpbWUiOjEzMDA4MTkzODB9LHsiaWQiOiJ7QUMxODRBMTMtNjBBQi00MGU1LUE1MTQtRTEwRjc3N0VDMkY5fSIsInRpbWUiOjc4NjUyMzM2Nzl9XX0",
            "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk",
        ].join(".");
        const user = User.fromJWT(jwt);
        expect(user.name).toBe("klozin@digitalpersona.com");
        expect(user.type).toBe(UserNameType.UPN);
    });
});
//# sourceMappingURL=user.spec.js.map