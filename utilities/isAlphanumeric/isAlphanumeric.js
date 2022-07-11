export function isAlphanumeric(string) {
    if (typeof string === 'string' || string instanceof String) {
        // return /^[A-Za-z0-9]*$/.test(string);
        return Boolean(string.match(/^[0-9a-zA-Z]+$/))
    }
    return false
}