import {Age} from './../src/age.js';

describe('age-calculator', () => {
  let age;

  test('should create an age object', () => {
    age = new Age();
    expect(age).toBeInstanceOf(Age);
  });
  test('should take Earth years in constructor', () => {
    age = new Age(10);
    expect(age.earthYears).toEqual(10);
  });
  test('should convert Earth years to Mercury years', () => {
    age = new Age(10);
    expect(age.toMercuryYears()).toBeCloseTo(41.66, 1);
  });
  test('should convert Earth years to Venus years', () => {
    age = new Age(10);
    expect(age.toVenusYears()).toBeCloseTo(16.12, 1);
  });
  test('should convert Earth years to Mars years', () => {
    age = new Age(10);
    expect(age.toMarsYears()).toBeCloseTo(5.31, 1);
  });
  test('should convert Earth years to Jupiter years', () => {
    age = new Age(10);
    expect(age.toJupiterYears()).toBeCloseTo(.84, 1);
  });
  test('should return planet names', () => {
    const planets = new Age();
    expect(planets.planetYears()).toEqual([["mercury", .24], ["venus", .62], ["mars", 1.88], ["jupiter", 11.86]]);
  });
  test('should attach the equivalent years in the planet array', () => {
    const planets = new Age();
    expect(planets.planetYears()).toEqual([["mercury", .24], ["venus", .62], ["mars", 1.88], ["jupiter", 11.86]]);
  });
  test('should find past age of planets array', () => {
    const passed = new Age(10);
    expect(passed.yearsPassed(5)[0][1]).toBeCloseTo(20.83,1);
  });
  test('should find future age of planets array', () => {
    const future = new Age(10);
    expect(future.yearsFuture(15)[0][1])
.toBeCloseTo(20.83,1);
});
  test('should convert earth years to planet years', () => {
    age = new Age(10);
    expect(age.yearConversion("mercury")).toBeCloseTo(age.toMercuryYears(), 1);
    expect(age.yearConversion("venus")).toBeCloseTo(age.toVenusYears(), 1);
    expect(age.yearConversion("mars")).toBeCloseTo(age.toMarsYears(), 1);
    expect(age.yearConversion("jupiter")).toBeCloseTo(age.toJupiterYears(), 1);
  });
});