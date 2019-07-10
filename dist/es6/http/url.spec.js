import { Url } from './url';
describe('Url: ', () => {
    const app = "https://test.local/service.svc";
    const path = "user/list";
    const query = { name: "John Doe Первый", type: 5, flag: true, nothing: null };
    const appAndPath = "https://test.local/service.svc/user/list";
    const full = "https://test.local/service.svc/user/list?name=John%20Doe%20%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9&type=5&flag=true&nothing=null";
    it('must be sanitized', () => {
        expect(Url.create(app, path, query)).toBe(full);
        expect(Url.create(app, path)).toBe(appAndPath);
        expect(Url.create(app)).toBe(app);
    });
});
//# sourceMappingURL=url.spec.js.map