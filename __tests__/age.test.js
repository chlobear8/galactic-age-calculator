import {Age} from './../src/age.js';

describe('age-calculator', () => {
  test('should create an age object', () => {
    const age = new Age();
    expect(age).toBeInstanceOf(Age);
  });
  test('should take Earth years in constructor', () => {
    const age = new Age(10);
    expect(age.earthYears).toEqual(10);
  });
});