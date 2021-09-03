import { GalacticAge } from './../src/js/galactic.js';

  test('should correctly determine users age on Mercury', () => {
    const mercuryAge = new GalacticAge(34);
    expect(mercuryAge.getAge()).toBeCloseTo(8.16)
  })