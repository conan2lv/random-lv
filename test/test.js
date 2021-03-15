// const assert = require('assert');
// describe('Array', function() {
//     describe('#indexOf', function() {
//         it('错误', function() {
//             assert.equal([1,2,3].indexOf(4), -1);
//         })
//     })
// })
const test = require('../src/random/randomArray')
const num = 10
for(let i = 0; i < num; i++) {
    const res = test([1, 2, 7], 5,  -2)
    console.log(res)
}