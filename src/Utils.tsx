export function square(n: number): number {
    return n * n
}


export function capitalize(str: string): string {
    if (!str) {
        return ""
    }
    return str[0].toUpperCase() + str.substring(1).toLowerCase();
}