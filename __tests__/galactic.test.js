import { GalacticAge } from './../src/js/galactic.js';

describe('GalacticAge', () => {

  test('should correctly create a galacticAge object', () => {
    const galacticAge = new GalacticAge("earth", 34);
    expect(galacticAge.planet).toEqual("earth")
    expect(galacticAge.age).toBeCloseTo(34)
  })

  // test('should correctly determine users age on Mercury', () => {
  //   const mercuryAge = new GalacticAge(34);
  //   expect(mercuryAge.getAge()).toBeCloseTo(8.16)
  // })
})
