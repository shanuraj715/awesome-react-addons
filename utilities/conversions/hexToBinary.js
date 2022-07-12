import { error } from '../'

function hexToBinary(hex){
    if(typeof hex !== 'string' && typeof hex !== 'number'){
        error(`"hexadecimalToBinary()" expects a string or number, got "${typeof hex}"`)
        return undefined
    }
    return ((parseInt(hex, 16)).toString(2)).substring(-8);
}

export default hexToBinary