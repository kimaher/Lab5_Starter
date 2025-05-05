// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('valid phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('valid phone number 2', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('invalid phone number', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('invalid phone number 2', () => {
  expect(isPhoneNumber('(123) 56-7890')).toBe(false);
});


test('valid email', () => {
  expect(isEmail('test@gmail.com')).toBe(true);
});
test('valid email 2', () => {
  expect(isEmail('test2@example.com')).toBe(true);
});
test('invalid email', () => {
  expect(isEmail('test@example')).toBe(false);
});
test('invalid email 2', () => {
  expect(isEmail('@test.co,')).toBe(false);
});


test('strong password', () => {
  expect(isStrongPassword('sTr0n9')).toBe(true);
});
test('strong password 2', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
});
test('weak password', () => {
  expect(isStrongPassword('123')).toBe(false);
});
test('weak password 2', () => {
  expect(isStrongPassword('abc')).toBe(false);
});


test('valid date', () => {
  expect(isDate('01/01/2020')).toBe(true);
});
test('valid date 2', () => {
  expect(isDate('09/21/2000')).toBe(true);
});
test('invalid date', () => {
  expect(isDate('14012020')).toBe(false);
});
test('invalid date 2', () => {
  expect(isDate('1/1-2020')).toBe(false);
});



test('valid color', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('valid color 2', () => {
  expect(isHexColor('#abcdef')).toBe(true);
});
test('invalid color', () => {
  expect(isHexColor('#l')).toBe(false);
});
test('invalid color 2', () => {
  expect(isHexColor('1')).toBe(false);
});