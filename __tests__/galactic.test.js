import { GalacticAge } from './../src/js/galactic.js';

describe('GalacticAge', () => {

  let user;

  beforeEach(() => {
    user = new GalacticAge(34, 80)
  });
  test('should correctly determine age on Earth', () => {
    user.earth();
    expect(user.earthAge).toBeCloseTo(34);
  })

  test('should correctly determine users age on Mercury', () => {
    user.mercury();
    expect(user.mercuryAge).toBeCloseTo(8.16);
  })
  test('should correctly determine users age on venus', () => {
    user.venus();
    expect(user.venusAge).toBeCloseTo(21.08);
  })
  test('should correctly determine users age on mars', () => {
    user.mars();
    expect(user.marsAge).toBeCloseTo(63.92);
  })
  test('should correctly determine users age on jupiter', () => {
    user.jupiter();
    expect(user.jupiterAge).toBeCloseTo(403.24);
  })

  test('should correctly determine life left on earth', () => {
    expect(user.earth()).toBeCloseTo(46);
  })

  test('should correctly determine life left on mercury', () => {
    expect(user.mercury()).toBeCloseTo(11.04);
  })

  test('should correctly determine life left on venus', () => {
    expect(user.venus()).toBeCloseTo(28.52);
  })

  test('should correctly determine life left on mars', () => {
    expect(user.mars()).toBeCloseTo(86.48);
  })

  test('should correctly determine life left on jupiter', () => {
    expect(user.jupiter()).toBeCloseTo(545.56);
  })
});
  describe('GalacticAge', () => {

  let user;

  beforeEach(() => {
    user = new GalacticAge(84, 80)
  });

  test('should correctly determine years lived past life expec. earth', () => {
    expect(user.earth()).toBeCloseTo(4);
  })
  test('should correctly determine years lived past life expec. mercury', () => {
    expect(user.mercury()).toBeCloseTo(.96);
  })
  test('should correctly determine years lived past life expec. venus', () => {
    expect(user.venus()).toBeCloseTo(2.48);
  })
  test('should correctly determine years lived past life expec. mars', () => {
    expect(user.mars()).toBeCloseTo(7.52);
  })
  test('should correctly determine years lived past life expec. jupiter', () => {
    expect(user.jupiter()).toBeCloseTo(47.44);
  })
})
