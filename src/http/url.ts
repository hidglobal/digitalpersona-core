export class Url
{
    public readonly href: string;

    constructor(base: string, path?: string | null, query?: object | null) {
        this.href = Url.create(base, path, query);
    }

    private static getSanitizedQuery(query: object) {
        return Object
            .keys(query)
            .map(key => [key, query[key]]
                .map(encodeURIComponent)
                .join("="))
            .join("&")
    }
    public static create(base: string, path?: string | null, query?: object | null) {
        return base
            + (path ? `/${encodeURIComponent(path)}` : "")
            + (query ? `?${Url.getSanitizedQuery(query)}` : "");
    }

}
