/**
 * 浅比较，只比较对象的第一层
 * @param {*} obj1 
 * @param {*} obj2 
 * @returns 
 */
export function ObjectEqual(obj1, obj2) {
    for (let prop in obj1) {
        if (!Object.is(obj1[prop], obj2[prop])) {
            return false
        }
    }

    return true
}