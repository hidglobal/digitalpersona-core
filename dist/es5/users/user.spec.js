import * as tslib_1 from "tslib";
import { User } from "./user";
import { UserNameType } from "./userNameType";
describe("User", function () {
    it("must construct UPN user", function () {
        var e_1, _a;
        var type = UserNameType.UPN;
        var validNames = [
            "user@company.com",
            "user@company",
            "USER@COMPANY.COM",
            "u_s-e.r@company.com",
        ];
        try {
            for (var validNames_1 = tslib_1.__values(validNames), validNames_1_1 = validNames_1.next(); !validNames_1_1.done; validNames_1_1 = validNames_1.next()) {
                var name_1 = validNames_1_1.value;
                var user = new User(name_1);
                expect(user.name).toBe(name_1);
                expect(user.type).toBe(type);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (validNames_1_1 && !validNames_1_1.done && (_a = validNames_1.return)) _a.call(validNames_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
    it("must construct SAM user", function () {
        var e_2, _a;
        var type = UserNameType.SAM;
        var validNames = [
            "company\\user",
            "COMPANY\\USER",
            "COMPANY\\",
            "company.com\\user-name",
        ];
        try {
            for (var validNames_2 = tslib_1.__values(validNames), validNames_2_1 = validNames_2.next(); !validNames_2_1.done; validNames_2_1 = validNames_2.next()) {
                var name_2 = validNames_2_1.value;
                var user = new User(name_2);
                expect(user.name).toBe(name_2);
                expect(user.type).toBe(type);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (validNames_2_1 && !validNames_2_1.done && (_a = validNames_2.return)) _a.call(validNames_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    });
    it("must construct DP user", function () {
        var e_3, _a;
        var type = UserNameType.DP;
        var validNames = [
            "user1",
            "USER1",
            "USER-NAME",
            "user_name",
            "user/name",
        ];
        try {
            for (var validNames_3 = tslib_1.__values(validNames), validNames_3_1 = validNames_3.next(); !validNames_3_1.done; validNames_3_1 = validNames_3.next()) {
                var name_3 = validNames_3_1.value;
                var user = new User(name_3);
                expect(user.name).toBe(name_3);
                expect(user.type).toBe(type);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (validNames_3_1 && !validNames_3_1.done && (_a = validNames_3.return)) _a.call(validNames_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
    });
    it("must construct UID user", function () {
        var e_4, _a;
        var type = UserNameType.UID;
        var validNames = [
            "6de5b5ed-85fc-4298-a18b-dac7d5a18369",
            "6DE5B5ED-85FC-4298-A18B-DAC7D5A18369",
        ];
        try {
            for (var validNames_4 = tslib_1.__values(validNames), validNames_4_1 = validNames_4.next(); !validNames_4_1.done; validNames_4_1 = validNames_4.next()) {
                var name_4 = validNames_4_1.value;
                var user = new User(name_4);
                expect(user.name).toBe(name_4);
                expect(user.type).toBe(type);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (validNames_4_1 && !validNames_4_1.done && (_a = validNames_4.return)) _a.call(validNames_4);
            }
            finally { if (e_4) throw e_4.error; }
        }
    });
    it("must construct Anonymous user", function () {
        var type = UserNameType.Unknown;
        var name = "";
        var user = User.Anonymous();
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
    it("must construct Everyone user", function () {
        var type = UserNameType.Unknown;
        var name = "*";
        var user = User.Everyone();
        expect(user.isEveryone()).toBe(true);
        expect(user.name).toBe(name);
        expect(user.type).toBe(type);
        user = new User("*");
        expect(user.isEveryone()).toBe(true);
        expect(user.name).toBe(name);
        expect(user.type).toBe(type);
    });
    it("must construct user from JWT", function () {
        var jwt = ["eyJ0eXAiOiJKV1QiLCJhbGciOiIgUlMyNTYifQ",
            "eyJqdGkiOiJ7QUMxODRBMTMtNjBBQi00MGU1LUE1MTQtRTEwRjc3N0VDMkY5fSIsImlzcyI6ImFsdHVzLTAxLmRpZ2l0YWxwZXJzb25hLmNvbSIsImlhdCI6MTMwMDgxOTM4MCwic3ViIjp7Im5hbWUiOiJrbG96aW5AZGlnaXRhbHBlcnNvbmEuY29tIiwidHlwZSI6Nn0sImNyZCI6W3siaWQiOiJ7RDFBMUY1NjEtRTE0QS00Njk5LTkxMzgtMkVCNTIzRTEzMkNDfSIsInRpbWUiOjEzMDA4MTkzODB9LHsiaWQiOiJ7QUMxODRBMTMtNjBBQi00MGU1LUE1MTQtRTEwRjc3N0VDMkY5fSIsInRpbWUiOjc4NjUyMzM2Nzl9XX0",
            "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk",
        ].join(".");
        var user = User.fromJWT(jwt);
        expect(user.name).toBe("klozin@digitalpersona.com");
        expect(user.type).toBe(UserNameType.UPN);
    });
});
//# sourceMappingURL=user.spec.js.map