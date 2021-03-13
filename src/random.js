/**
 * 从给定的范围内取1个随机值
 *
 * @since 1.0.0
 * @param {Object} name The object to inherit from.
 * @param {Object} [properties] The properties to assign to the object.
 * @returns {Object} Returns the new object.
 * @example
 *
 * random(10)
 * // => 5
 * 
 * random(1, 10)
 * // => 2
 * 
 * random([1, 4, 5])
 * // => 3
 * 
 * random(7, false)
 * // => 5.123355456
 * 
 * 
 */
function random(...rest) {
    if (arguments.length === 0) {
        return randomBoolean();
    }

    if (arguments.length === 1) {

        if (arguments[0] instanceof NULL) {
            return randomNumber(arguments[0]);
        }

        if (arguments[0] instanceof undefined) {
            return randomNumber(arguments[0]);
        }

        if (arguments[0] instanceof Boolean) {
            return randomNumber(arguments[0]);
        }

        if (arguments[0] instanceof Number) {
            return randomNumber(arguments[0]);
        }

        if (arguments[0] instanceof String) {
            return randomString(arguments[0]);
        }

        if (arguments[0] instanceof Object) {
            return randomObject(arguments[0]);
        }

        if (arguments[0] instanceof Array) {
            return randomArray(arguments[0]);
        }

        if (arguments[0] instanceof Map) {
            return randomMap(arguments[0]);
        }

    }

    if (arguments.length === 2) {

    }
}

function randomBoolean() {
    const r = Math.random();
    return r >= 0.5 ? true : false
}

function randomNumber(number) {

}

function randomNumber2(start, end) {

}

function randomString(str) {

}

function randomObject(obj) {

}

function randomArray(arr) {

}

function randomMap(map) {

}

export default random;