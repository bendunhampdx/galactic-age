import { GalacticAge } from './../src/js/galactic.js';

describe('GalacticAge', () => {

  test('should correctly determine age on Earth', () => {
    const earth = new GalacticAge(34, 80);
    expect(earth.getEarthAge()).toBeCloseTo(34);
  })

  test('should correctly determine users age on Mercury', () => {
    const mercury = new GalacticAge(34, 80);
    expect(mercury.getMercuryAge()).toBeCloseTo(8.16);
  })
  test('should correctly determine users age on venus', () => {
    const venus = new GalacticAge(34, 80);
    expect(venus.getVenusAge()).toBeCloseTo(21.08);
  })
  test('should correctly determine users age on mars', () => {
    const mars = new GalacticAge(34, 80);
    expect(mars.getMarsAge()).toBeCloseTo(63.92);
  })
  test('should correctly determine users age on jupiter', () => {
    const jupiter = new GalacticAge(34, 80);
    expect(jupiter.getJupiterAge()).toBeCloseTo(403.24);
  })

  test('should correctly determine life expectency on earth', () => {
    const earth = new GalacticAge(34, 80);
    expect(earth.getEarthLifeLeft()).toBeCloseTo(46);
  })
  test('should correctly determine life expectency on mercury', () => {
    const mercury = new GalacticAge(34, 80);
    expect(mercury.getMercuryLifeLeft()).toBeCloseTo(11.04);
  })
  test('should correctly determine life expectency on venus', () => {
    const venus = new GalacticAge(34, 80);
    expect(venus.getVenusLifeLeft()).toBeCloseTo(28.52);
  })
  test('should correctly determine life expectency on mars', () => {
    const mars = new GalacticAge(34, 80);
    expect(mars.getMarsLifeLeft()).toBeCloseTo(86.48);
  })
})
