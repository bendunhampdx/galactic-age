import { GalacticAge } from './../src/js/galactic.js';

describe('GalacticAge', () => {

  test('should correctly create a galacticAge object', () => {
    const galacticAge = new GalacticAge(34);
    expect(galacticAge.age).toBeCloseTo(34)
  })

  // test('should correctly determine users age on Venus', () => {
  //   const venusAge = new GalacticAge(34);
  //   expect(venusAge.getAge()).toBeCloseTo(21.08)
  // })
})
