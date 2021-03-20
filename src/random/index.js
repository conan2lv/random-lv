const type = require('../util/type');
const randomBoolean = require('./randomBoolean');
const randomNumber = require('./randomNumber');
const randomString = require('./randomString');
const randomObject = require('./randomObject');
const randomDate = require('./randomDate')
const randomMap = require('./randomMap');
const randomSet = require('./randomSet');
const randomTypedArray = require('./randomTypedArray');
/**
 *
 * @description 从给定的范围内取1个随机值
 * @since 0.1.0
 * @returns {Object} 返回一个随机值.
 * @example
 *
 * 
 * 
 */
function random() {
    const l = arguments.length;
    if (l === 0) {
        return randomBoolean();
    }

    const t = type(arguments[0]);

    switch(t) {
        case 'Undefined': 
        case 'Null': 
        case 'NaN':
        case 'Boolean': 
            return randomBoolean();
        case 'Infinity':
            return randomNumber(Number.MAX_VALUE);
        case '-Infinity':
            return randomNumber(Number.MIN_VALUE);
        case 'Number':
            return randomNumber(...arguments);
        case 'String':
            return randomString(...arguments);
        case 'Object':
            return randomObject(...arguments);
        case 'Function':
            return random(arguments[0]());
        case 'Date':
            return randomDate(...arguments);
        case 'Map':
        case 'WeakMap':
            return randomMap(...arguments);
        case 'Set':
        case 'WeakSet':
            return randomSet(...arguments);
        case 'Int8Array':
        case 'Uint8Array':
        case 'Int16Array':
        case 'Uint16Array':
        case 'Int32Array':
        case 'Uint32Array':
        case 'Float32Array':
        case 'Float64Array':
            return randomTypedArray(...arguments)
        case 'Unknown': 
            throw Error('error: the argument1 is unknown');
        default: 
            throw Error('error: can not identify the arguments');
    }
}
module.exports = random;