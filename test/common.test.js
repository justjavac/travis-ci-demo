/* eslint no-unused-expressions: "off" */

require('should');

const parseUrl = require('../src/common');

describe('common.js', () => {
  describe('#parseUrl()', () => {
    const URL = 'http://www.abc.com';

    it('should return {} when url is empty', () => {
      parseUrl('').should.be.empty;
    });

    it('should return {} when url without "="', () => {
      parseUrl(`${URL}`).should.be.empty;
      parseUrl(`${URL}?`).should.be.empty;
      parseUrl(`${URL}?&`).should.be.empty;
    });

    it('should return {} when url without key', () => {
      parseUrl(`${URL}?=123`).should.be.empty;
      parseUrl(`${URL}?=123&`).should.be.empty;
      parseUrl(`${URL}?&=123`).should.be.empty;
    });

    it('should return a object', () => {
      parseUrl(`${URL}?name`).should.be.eql({ name: '' });
      parseUrl(`${URL}?name=`).should.be.eql({ name: '' });
      parseUrl(`${URL}?name=123`).should.be.eql({ name: '123' });
      parseUrl(`${URL}?name=123&age`).should.be.eql({ name: '123', age: '' });
      parseUrl(`${URL}?name=123&=`).should.be.eql({ name: '123' });
      parseUrl(`${URL}?name=123&&`).should.be.eql({ name: '123' });
      parseUrl(`${URL}?&name=123`).should.be.eql({ name: '123' });
      parseUrl(`${URL}?name=123&age=12`).should.be.eql({ name: '123', age: '12' });
    });
  });
});
