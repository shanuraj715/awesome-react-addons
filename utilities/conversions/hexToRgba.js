import { error } from '../'
function hexToRgba(hex, transparency = 1) {
    if( !hex || typeof hex !== 'string'){
        error(`Invalid hex value "${hex}"`)
    }
    const val = hex.replace('#', '')
    var bigint = parseInt(val, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return 'rgba(' + r + ", " + g + ", " + b + ', ' + transparency + ')';
}

export default hexToRgba