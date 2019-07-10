import { Url } from './url';
describe('Url: ', function () {
    var app = "https://test.local/service.svc";
    var path = "user/list";
    var query = { name: "John Doe Первый", type: 5, flag: true, nothing: null };
    var appAndPath = "https://test.local/service.svc/user/list";
    var full = "https://test.local/service.svc/user/list?name=John%20Doe%20%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9&type=5&flag=true&nothing=null";
    it('must be sanitized', function () {
        expect(Url.create(app, path, query)).toBe(full);
        expect(Url.create(app, path)).toBe(appAndPath);
        expect(Url.create(app)).toBe(app);
    });
});
//# sourceMappingURL=url.spec.js.map