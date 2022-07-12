import { error } from '../'

function decimalToBinary(decimal) {
    if(typeof decimal !== 'string' && typeof decimal !== 'number'){
        error(`"decimalToBinary()" expects a string or number, got "${typeof decimal}"`)
        return undefined
    }
    let bin = 0;
    let rem, i = 1
    while (decimal !== 0) {
        rem = decimal % 2;
        decimal = parseInt(decimal / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    return bin
}

export default decimalToBinary