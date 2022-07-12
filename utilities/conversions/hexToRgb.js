import { error } from '../'
function hexToRgb(hex) {
    if( !hex || typeof hex !== 'string'){
        error(`Invalid hex value "${hex}"`)
    }
    const val = hex.replace('#', '')
    var bigint = parseInt(val, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return 'rgb(' + r + ", " + g + ", " + b + ')';
}

export default hexToRgb