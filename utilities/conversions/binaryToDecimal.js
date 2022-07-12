import { error } from '../'

function binaryToDecimal(binary) {
    if(typeof binary !== 'string' && typeof binary !== 'number'){
        error(`"binaryToDecimal()" expects a string or number, got "${typeof binary}"`)
        return undefined
    }
    return parseInt(binary, 2)
}

export default binaryToDecimal