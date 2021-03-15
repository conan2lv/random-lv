const type = require('../util/type');
const randomBoolean = require('./randomBoolean');
const randomNumber = require('./randomNumber');
const randomNumber2 = require('./randomNumber2')
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

    if (l === 1) {
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
                return randomNumber();
            case 'Unknown': 
                throw Error('error: the argument1 is unknown');
            default: 
                throw Error('error: can not identify the arguments');
        }
    }
}
module.exports = random;