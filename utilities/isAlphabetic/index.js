function isAlphabetic(string) {
    if (typeof string === 'string' || string instanceof String) {
        return /^[a-zA-Z]+$/.test(string);
    }
    return false
}

export default isAlphabetic