import { GalacticAge } from './../src/js/galactic.js';

describe('GalacticAge', () => {

  test('should correctly determine users age on Mercury', () => {
    const mercuryAge = new GalacticAge(34);
    expect(mercuryAge.getAge()).toBeCloseTo(8.16)
  })

  test('should correctly determine users age on Venus', () => {
    const venusAge = new GalacticAge(34);
    expect(venusAge.getAge()).toBeCloseTo()
  })
})
