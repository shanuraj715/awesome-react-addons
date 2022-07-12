import { error, removeSpace } from '../'

function rgbToHex() {
    if (arguments.length !== 1 && arguments.length !== 3) {
        error(`Invalid parameter in function "rgbToHex".`)
        return undefined

    }
    let rgb
    if( arguments.length === 3){
        let [r, g, b] = arguments
        rgb = r + '' + g + ',' + b
    }
    if( arguments.length === 1){
        rgb = arguments[0].replace(')', '').replace('rgba(', '').replace('rgb(', '')
    }
    const rgbArray = removeSpace(rgb).split(',')
    if (rgbArray.length !== 3) {
        error(`Invalid RGB color value. You passed "${rgb}"`)
        return undefined
    }

    return '#' + rgbArray.map(x => {
        const hex = (x - 0).toString(16)
        return hex.length === 1 ? '0' + hex : hex
    }).join('')

}

export default rgbToHex