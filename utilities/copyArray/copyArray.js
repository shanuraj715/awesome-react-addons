// use this function to copy an entire array.
// One dimensional array | Multidimensional array
export const copyArray = array => {
    if (typeof obj == 'object') {
        if (Array.isArray(array)) {
            let l = array.length;
            let r = new Array(l);
            for (let i = 0; i < l; i++) {
                r[i] = copyArray(array[i]);
            }
            return r;
        } else {
            let r = {};
            r.prototype = array.prototype;
            for (let k in array) {
                r[k] = copyArray(array[k]);
            }
            return r;
        }
    }
    return array;
}

// USAGE OF THIS FUNCTION
/*
const arr = [1, 2, 3, 4, 5] // one Dimensional array
const copy = copyArray(arr);

----------------------------------------

const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9], [10, 11]]]
const copy = copyArray(arr);
*/