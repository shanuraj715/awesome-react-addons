import { error } from '../'

function randomString(len = 12, add = '') {
    if (isNaN(len)) {
        error(`"randomString()" expects only numeric parameters, got "${len}".`)
        return ''
    }
    let str = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' + add;
    var charactersLength = characters.length;
    for (let i = 0; i < len; i++) {
        str += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return str
}

export default randomString