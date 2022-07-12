import { error } from '../'

function binaryToHex(binary){
    if(typeof binary !== 'string' && typeof binary !== 'number'){
        error(`"binaryToHexadecimal()" expects a string or number, got "${typeof binary}"`)
        return undefined
    }
    return parseInt(binary, 2).toString(16);
}

export default binaryToHex