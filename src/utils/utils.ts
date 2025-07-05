const BASE_URL = import.meta.env.DEV ? "" : "/luigi-abenante";

export function urlBuilder(path: string): string {
    return `${BASE_URL}${path}`;
}
