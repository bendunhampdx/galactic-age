import { GalacticAge } from './../src/js/galactic.js';

describe('GalacticAge', () => {

  test('should correctly determine life left on earth', () => {
    const earth = new GalacticAge(34, 80);
    expect(earth.getEarthLifeLeft()).toBeCloseTo(46);
  })
  test('should correctly determine years lived past life expec. earth', () => {
    const earth = new GalacticAge(84, 80);
    expect(earth.getEarthLifeLeft()).toBeCloseTo(4);
  })
  test('should correctly determine life left on mercury', () => {
    const mercury = new GalacticAge(34, 80);
    expect(mercury.getMercuryLifeLeft()).toBeCloseTo(11.04);
  })
  test('should correctly determine years lived past life expec. mercury', () => {
    const mercury = new GalacticAge(84, 80);
    expect(mercury.getMercuryLifeLeft()).toBeCloseTo(.96);
  })
  test('should correctly determine life left on venus', () => {
    const venus = new GalacticAge(34, 80);
    expect(venus.getVenusLifeLeft()).toBeCloseTo(28.52);
  })
  test('should correctly determine years lived past life expec. venus', () => {
    const venus = new GalacticAge(84, 80);
    expect(venus.getVenusLifeLeft()).toBeCloseTo(2.48);
  })
  test('should correctly determine life left on mars', () => {
    const mars = new GalacticAge(34, 80);
    expect(mars.getMarsLifeLeft()).toBeCloseTo(86.48);
  })
  test('should correctly determine years lived past life expec. mars', () => {
    const mars = new GalacticAge(84, 80);
    expect(mars.getMarsLifeLeft()).toBeCloseTo(7.52);
  })
  test('should correctly determine life left on jupiter', () => {
    const jupiter = new GalacticAge(34, 80);
    expect(jupiter.getJupiterLifeLeft()).toBeCloseTo(545.56);
  })
  test('should correctly determine years lived past life expec. jupiter', () => {
    const jupiter = new GalacticAge(84, 80);
    expect(jupiter.getJupiterLifeLeft()).toBeCloseTo(47.44);
  })
})
