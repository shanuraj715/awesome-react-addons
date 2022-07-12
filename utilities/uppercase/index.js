import { error } from '../'

function uppercase(string) {
    if (typeof string === 'string' || string instanceof String) {
        return string.toUpperCase()
    }
    error(`"uppercase()" expects one parameter with type string, got "${typeof string}"`)
    return string
}
export default uppercase