const randomNumber = require('./randomNumber');
const randomDate2 = require('./randomDate2');
const type = require('../util/type');
/**
 * @description 取一个随机时间
 * @since 0.1.0
 * @param {Date} date 结束时间 
 * @returns {Date} 返回一个从1970年1月1日到指定时间之间的一个date对象
 * @example
 * 
 * randomDate(new Date())
 * // => 2007-01-17T02:42:32.801Z
 * 
 * randomDate(new Date('2019-01-01'))
 * // => 1989-01-07T11:17:44.963Z
 * 
 */

function randomDate(date) {
    if (arguments[1] && type(arguments[1] === 'Date')) {
        return randomDate2(...arguments)
    }
    const d = date.getTime(); // 获取时间戳
    const res = randomNumber(d);
    return new Date(res);
}

 module.exports = randomDate