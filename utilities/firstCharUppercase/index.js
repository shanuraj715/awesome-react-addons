import { error } from '../'

function firstCharUppercase(str) {
    if (typeof str !== 'string') {
        error(`"firstCharUppercase()" expects a string parameter, got "${typeof str}".`)
        return undefined
    }
    if (str === '') {
        return str
    }
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export default firstCharUppercase