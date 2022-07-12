import { error } from '../'
const random = (min, max) => { // min and max included 
    if (isNaN(min) || isNaN(max)) {
        error(`"randomNumber()" expects two parameters: min(Number) and max(Number) but got ${typeof min} and ${typeof max}`)
        return undefined
    }
    return Math.floor(Math.random() * (max - min + 1) + min)
}
export default random