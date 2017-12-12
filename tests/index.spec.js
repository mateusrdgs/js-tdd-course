/* eslint-env mocha */

const chai = require('chai');

const { expect } = chai;

describe('Main', () => {
  let arr;
  beforeEach(() => {
    arr = [1, 2, 3];
  });
  it('should to be an array', () => { // smoke test
    expect(arr).to.be.an('array');
  });
  it('should have a size of 4 when a value is pushed', () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });
  it('should remove the value 3 when the array is popped', () => {
    arr.pop();
    expect(arr).to.not.include(3);
  });
  it('should have a size of 2 when the array is popped', () => {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });
});

