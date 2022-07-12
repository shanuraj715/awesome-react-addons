import { error } from '../'

function decimalToHex(decimal) {
    if(typeof decimal !== 'string' && typeof decimal !== 'number'){
        error(`"decimalToHexadecimal()" expects a string or number, got "${typeof decimal}"`)
        return undefined
    }
    return decimal.toString(16);
    
}

export default decimalToHex
