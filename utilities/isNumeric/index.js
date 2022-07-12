function isNumeric(string) {
    if( typeof string === 'number' ) {
        return true
    }
    if (typeof string === 'string' || string instanceof String) {
        return /^[0-9]+$/.test(string);
    }
    return false
}

export default isNumeric