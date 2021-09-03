import { GalacticAge } from './../src/js/galactic.js';

describe('GalacticAge', () => {

  test('should correctly create a galacticAge object', () => {
    const earth = new GalacticAge("earth", 34);
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
})
