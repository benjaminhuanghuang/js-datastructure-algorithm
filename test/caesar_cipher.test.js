/*



*/

var assert = require('assert');
var caesarCipher = require('../caesar_cipher');

describe('caesar cipher: ', () => {
  it('convert a to b when num is 1', () => {
    const str = "a";
    const num = 1;
    const res = caesarCipher(str, num);
    assert.equal(res, "b")
  });
});