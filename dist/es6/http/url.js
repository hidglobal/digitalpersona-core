/**
 * Provides a way to construct sanitized URLs from a base URL, a path and a query object
 */
export class Url {
    /** Constructs an URL object from a base URL, a path and a query object.
     * @param base - base URL, e.g. `https://contoso.com`
     * @param path - optional path, e.g. `api/v1/user`
     * @param query - optional set of query parameters, e.g. `{ name: "john", type: "5" }`
     * @remarks
     * The URL is built by concatenation of a base URL with sanitized path and query object,
     * adding all needed delimiters. Example:
     * @example
     * ```
     * const url = new Url("https://contoso.com", "api/v1/user", { name: "john", type: "5" });
     * console.log(url.href);
     * > https://contoso.com/api/v1/user?name=john&type=5
     * ```
     */
    constructor(base, path, query) {
        this.href = Url.create(base, path, query);
    }
    /** Builds a sanitized URL query from an JS object.
     * @returns A hyperlink reference.
     */
    static getSanitizedQuery(query) {
        return Object
            .keys(query)
            .map(key => [key, query[key]]
            .map(encodeURIComponent)
            .join("="))
            .join("&");
    }
    /** Constructs an URL string from a base URL, a path and a query object.
     * @param base - base URL, e.g. `https://contoso.com`
     * @param path - optional path, e.g. `api/v1/user`
     * @param query - optional set of query parameters, e.g. `{ name: "john", type: "5" }`
     * @remarks
     * The URL is built by concatenation of a base URL with sanitized path and query object,
     * adding all needed delimiters.
     * @example
     * ```typescript
     * const href = Url.create("https://contoso.com", "api/v1/user", { name: "john", type: "5" });
     * console.log(href);
     * ```
     * `> https://contoso.com/api/v1/user?name=john&type=5`
     */
    static create(base, path, query) {
        return base
            + (path ? `/${encodeURI(path)}` : "")
            + (query ? `?${Url.getSanitizedQuery(query)}` : "");
    }
}
//# sourceMappingURL=url.js.map