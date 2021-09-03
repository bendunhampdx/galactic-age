import { GalacticAge } from './../src/js/galactic.js';

describe('GalacticAge', () => {

  test('should correctly determine age on Earth', () => {
    const earth = new GalacticAge("earth", 34, 80);
    expect(earth.planet).toEqual("earth");
    expect(earth.getAge()).toBeCloseTo(34);
  })

  test('should correctly determine users age on Mercury', () => {
    const mercury = new GalacticAge("mercury", 34);
    expect(mercury.planet).toEqual("mercury");
    expect(mercury.getAge()).toBeCloseTo(8.16);
  })
  test('should correctly determine users age on venus', () => {
    const venus = new GalacticAge("venus", 34);
    expect(venus.planet).toEqual("venus");
    expect(venus.getAge()).toBeCloseTo(21.08);
  })
  test('should correctly determine users age on mars', () => {
    const mars = new GalacticAge("mars", 34);
    expect(mars.planet).toEqual("mars");
    expect(mars.getAge()).toBeCloseTo(63.92);
  })
  test('should correctly determine users age on jupiter', () => {
    const jupiter = new GalacticAge("jupiter", 34);
    expect(jupiter.planet).toEqual("jupiter");
    expect(jupiter.getAge()).toBeCloseTo(403.24);
  })

  test('should correctly determine life expectency on Earth', () => {
    const earth = new GalacticAge("earth", 34, 80);
    expect(earth.planet).toEqual("earth");
    expect(earth.getLife()).toBeCloseTo(46);
  })

  test('should correctly determine life expectency on mercury', () => {
    const mercury = new GalacticAge("mercury", 34, 80);
    expect(mercury.planet).toEqual("mercury");
    expect(mercury.getLife()).toBeCloseTo(11.04);
  })
})
