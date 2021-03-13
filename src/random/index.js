import type from '../util/type'
import randomBoolean from './randomBoolean'
import randomNumber from './randomNumber'
import randomNumber2 from './randomNumber2'
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
            case 'Boolean': 
                return randomBoolean();
            case 'Unknown': 
                throw Error('error: the argument1 is unknown');
            default: 
                throw Error('error: can not identify the arguments');
        }
    }
}

export default random;