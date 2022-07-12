import { error } from '../'

function removeSpace(string) {
    if (typeof string === 'string' || string instanceof String) {
        return string.split(' ').join('')
    }
    error(`"removeSpace()" expects one parameter with type string, got "${typeof string}"`)
    return string
}
export default removeSpace