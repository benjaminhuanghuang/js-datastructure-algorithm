/*



*/

var assert = require('assert');
var caesarCipher = require('../caesar_cipher');

xdescribe('caesar cipher: ', () => {
  it('convert a to b when num is 1', () => {
    const str = "a";
    const num = 1;
    const res = caesarCipher(str, num);
    assert.equal(res, "b")
  });

  it('convert Zoo keeper to Bqq mggrgt when num is 2', () => {
    const str = "Zoo keeper";
    const num = 2;
    const res = caesarCipher(str, num);
    assert.equal(res, "Bqq mggrgt")
  });

  it('convert Big Car to Bqq mggrgt when num is -16', () => {
    const str = "Big Car";
    const num = -16;
    const res = caesarCipher(str, num);
    assert.equal(res, "Lsq Mkb")
  });


  it('convert Javascript to Tkfkcmbszd when num is -900', () => {
    const str = "Javascript";
    const num = -900;
    const res = caesarCipher(str, num);
    assert.equal(res, "Tkfkcmbszd")
  });
});