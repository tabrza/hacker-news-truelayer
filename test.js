const expect = require('chai').expect;

const { validateString, validateUri, validateInteger, validateInput } = require('./validation');


describe('validateString()', function () {
  it('should return "String is empty" if empty string passed in', function () {

    // 1. ARRANGE
    let string = '';

    // 2. ACT
    let validate = validateString(string);

    // 3. ASSERT
    expect(validate).to.be.equal('String is empty');

  });

  it('should return "String length is greater than 256 characters" if string is greater than 256 characters', function () {

    // 1. ARRANGE
    let string = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

    // 2. ACT
    let validate = validateString(string);

    // 3. ASSERT
    expect(validate).to.be.equal('String length is greater than 256 characters');

  });

  it('should return string', function () {

    // 1. ARRANGE
    let string = 'Correct string';

    // 2. ACT
    let validate = validateString(string);

    // 3. ASSERT
    expect(validate).to.be.equal(string);

  });
});


describe('validateUri()', function () {
  it('should return "Invalid URI" if incorrect url', function () {

    // 1. ARRANGE
    let url = 'https://new';

    // 2. ACT
    let validate = validateUri(url);

    // 3. ASSERT
    expect(validate).to.be.equal('Invalid URI');

  });

  it('should return string', function () {

    // 1. ARRANGE
    let url = 'https://news.ycombinator.com/';

    // 2. ACT
    let validate = validateUri(url);

    // 3. ASSERT
    expect(validate).to.be.equal(url);

  });
});


describe('validateInteger()', function () {
  it('should return length of array if array is passed in', function () {

    // 1. ARRANGE
    let array = [1, 2, 3];

    // 2. ACT
    let validate = validateInteger(array);

    // 3. ASSERT
    expect(validate).to.be.equal(array.length);

  });

  it('should return "0" if value passed in is undefined', function () {

    // 1. ARRANGE
    let value = undefined;

    // 2. ACT
    let validate = validateInteger(value);

    // 3. ASSERT
    expect(validate).to.be.equal(0);

  });

  it('should return "Point, comment or rank is less than 0" is value is less than 0', function () {

    // 1. ARRANGE
    let value = -1;

    // 2. ACT
    let validate = validateInteger(value);

    // 3. ASSERT
    expect(validate).to.be.equal('Point, comment or rank is less than 0');

  });
});
