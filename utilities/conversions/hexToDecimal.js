import { error } from '../'

function hexToDecimal(hex) {
    if(typeof hex !== 'string' && typeof hex !== 'number'){
    
        error(`"hexadecimalToDecimal()" expects a string or number, got "${typeof hex}"`)
        return undefined
    }
    return parseInt(hex, 16)
}

export default hexToDecimal