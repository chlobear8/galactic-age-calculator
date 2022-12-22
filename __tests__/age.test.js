import Age from './../src/age.js';

describe('Age', () => {
  test('should create an age object', () => {
    const age = new Age();
    expect(age).toBeInstanceOf(Age);
  });
});