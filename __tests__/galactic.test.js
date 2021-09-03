import { GalacticAge } from './../src/js/galactic.js';

describe('GalacticAge', () => {

  test('should correctly determine age on Earth', () => {
    const user = new GalacticAge(34, 80);
    user.earth();
    expect(user.earthAge).toBeCloseTo(34);
  })

  test('should correctly determine users age on Mercury', () => {
    const user = new GalacticAge(34, 80);
    user.mercury();
    expect(user.mercuryAge).toBeCloseTo(8.16);
  })
  test('should correctly determine users age on venus', () => {
    const user = new GalacticAge(34, 80);
    user.venus();
    expect(user.venusAge).toBeCloseTo(21.08);
  })
  test('should correctly determine users age on mars', () => {
    const user = new GalacticAge(34, 80);
    user.mars();
    expect(user.marsAge).toBeCloseTo(63.92);
  })
  test('should correctly determine users age on jupiter', () => {
    const user = new GalacticAge(34, 80);
    user.jupiter();
    expect(user.jupiterAge).toBeCloseTo(403.24);
  })

  test('should correctly determine life left on earth', () => {
    const user = new GalacticAge(34, 80);
    expect(user.earth()).toBeCloseTo(46);
  })
  test('should correctly determine years lived past life expec. earth', () => {
    const user = new GalacticAge(84, 80);
    expect(user.earth()).toBeCloseTo(4);
  })
  test('should correctly determine life left on mercury', () => {
    const user = new GalacticAge(34, 80);
    expect(user.mercury()).toBeCloseTo(11.04);
  })
  test('should correctly determine years lived past life expec. mercury', () => {
    const user = new GalacticAge(84, 80);
    expect(user.mercury()).toBeCloseTo(.96);
  })
  test('should correctly determine life left on venus', () => {
    const user = new GalacticAge(34, 80);
    expect(user.venus()).toBeCloseTo(28.52);
  })
  test('should correctly determine years lived past life expec. venus', () => {
    const user = new GalacticAge(84, 80);
    expect(user.venus()).toBeCloseTo(2.48);
  })
  test('should correctly determine life left on mars', () => {
    const user = new GalacticAge(34, 80);
    expect(user.mars()).toBeCloseTo(86.48);
  })
  test('should correctly determine years lived past life expec. mars', () => {
    const user = new GalacticAge(84, 80);
    expect(user.mars()).toBeCloseTo(7.52);
  })
  test('should correctly determine life left on jupiter', () => {
    const user = new GalacticAge(34, 80);
    expect(user.jupiter()).toBeCloseTo(545.56);
  })
  test('should correctly determine years lived past life expec. jupiter', () => {
    const user = new GalacticAge(84, 80);
    expect(user.jupiter()).toBeCloseTo(47.44);
  })
})
