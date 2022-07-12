import { error } from '../'

function lowercase(string) {
    if (typeof string === 'string' || string instanceof String) {
        return string.toLowerCase()
    }
    error(`"lowercase()" expects one parameter with type string, got "${typeof string}"`)
    return string
}
export default lowercase