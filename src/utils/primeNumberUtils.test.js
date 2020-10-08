import { isPrime, getPrimeNumbers, getMultiplicationTableArray } from './primeNumberUtils.js';

describe('isPrime', () => {
  describe('when value is a prime', () => {
    test('should return true for prime numbers', () => {
    expect(isPrime(3)).toBeTruthy();
    expect(isPrime(5)).toBeTruthy();
    expect(isPrime(23)).toBeTruthy();
  });
});

  describe('when value is not a prime number', () => {
    test('should return false for non-prime numbers', () => {
      expect(isPrime(4)).toBeFalsy();
      expect(isPrime(15)).toBeFalsy();
      expect(isPrime()).toBeFalsy();
    });
  });
});

describe('getPrimeNumbers', () => {
  describe('when number of items is valid', () => {
    test('should return array of prime numbers', () => {
      expect(getPrimeNumbers(10)).toEqual([2, 3, 5, 7, 9, 11, 13, 17, 19, 23]);
      expect(getPrimeNumbers(5)).toEqual([2, 3, 5, 7, 9]);
      expect(getPrimeNumbers(4)).toEqual([2, 3, 5, 7]);
    });
  });

  describe('when number of items is undefined', () => {
    test('should return an empty array', () => {
      expect(getPrimeNumbers()).toEqual([]);
    });
  });
});

describe('getMultiplicationTableArray', () => {
  describe('when passed an array of numbers', () => {
    test('should return a table array', () => {
      expect(getMultiplicationTableArray([2, 3, 5, 7, 9])).toEqual(
        [["",2,3,5,7,9,],
        [2,4,6,10,14,18,],
        [3,6,9,15,21,27,],
        [5,10,15,25,35,45,],
        [7,14,21,35,49,63,],
        [9,18,27,45,63,81,],]
        );
    });
  });
});


