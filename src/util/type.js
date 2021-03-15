/**
 * @description 检测变量的数据类型
 * @since 0.1.0
 * @param {any} arg 待检测的变量
 * @returns {String} 返回参数的数据类型对应的字符串
 * @example
 * 
 * randomBoolean()
 * // => true
 * 
 */

function type(arg) {
    const t = typeof arg;
    if (t === 'boolean') {
        return 'Boolean'
    }

    if (t === 'undefined') {
        return 'Undefined'
    }

    if (t === 'string') {
        return 'String'
    }

    if (t === 'symbol') {
        return 'Symbol'
    }

    if (t === 'function') {
        return 'Function'
    }

    if (t === 'number') {
        if (arg.toString() === 'NaN') {
            return 'NaN'
        } else if (arg.toString() === 'Infinity') {
            return 'Infinity'
        } else if (arg.toString() === '-Infinity') {
            return '-Infinity'
        } else {
            return 'Number'
        }
    }

    if (t === 'object') {
        if (arg === null) {
            return 'Null'
        }

        const o = Object.prototype.toString.call(arg);
        return o.slice(8, o.length - 1);

    }

    return 'Unknown'
}

 module.exports =  type