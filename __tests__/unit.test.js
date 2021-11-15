// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('test valid phone number', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('test valid phone number with parenthasis', () => {
    expect(functions.isPhoneNumber('(123)-456-7890')).toBe(true);
});

test('test invalid phone number that is too short', () => {
    expect(functions.isPhoneNumber('123-456-789')).toBe(false);
});

test('test invalid phone number that no dashes', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

test('test valid email', () => {
    expect(functions.isEmail('johndoe@abc.com')).toBe(true);
});

test('test valid email with numbers', () => {
    expect(functions.isEmail('johndoe123@abc.com')).toBe(true);
});

test('test invalid email with 4 characters after the period', () => {
    expect(functions.isEmail('johndoe@abc.comm')).toBe(false);
});

test('test invalid email without the @', () => {
    expect(functions.isEmail('johndoeabc.comm')).toBe(false);
});

test('test valid password without numbers', () => {
    expect(functions.isStrongPassword('password')).toBe(true);
});

test('test valid password with numbers', () => {
    expect(functions.isStrongPassword('password123')).toBe(true);
});

test('test invalid password that is too short', () => {
    expect(functions.isStrongPassword('pas')).toBe(false);
});

test('test invalid password that is too long', () => {
    expect(functions.isStrongPassword('passwordpassword')).toBe(false);
});

test('test valid date with full input sections', () => {
    expect(functions.isDate('12/12/2012')).toBe(true);
});

test('test valid date with 1 character for month and day', () => {
    expect(functions.isDate('1/1/2012')).toBe(true);
});

test('test invalid date with empty month and day inputs', () => {
    expect(functions.isDate('//2012')).toBe(false);
});

test('test invalid date with too many month and day inputs', () => {
    expect(functions.isDate('123/123/1212')).toBe(false);
});

test('test valid hex color with 3 characters', () => {
    expect(functions.isHexColor('#abc')).toBe(true);
});

test('test valid hex color with 6 characters', () => {
    expect(functions.isHexColor('#abcdef')).toBe(true);
});

test('test invalid hex color with too many characters', () => {
    expect(functions.isHexColor('#abcdefg')).toBe(false);
});

test('test invalid hex color with too few characters', () => {
    expect(functions.isHexColor('#ab')).toBe(false);
});
