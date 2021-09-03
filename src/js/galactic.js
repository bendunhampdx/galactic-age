export class GalacticAge {
  constructor(age, lifeExpectency) {
    this.age = age;
    this.lifeExpectency = lifeExpectency;
    this.earthLife = 0;
    this.venusLife = 0;
    this.marsLife = 0;
  }

  getEarthAge() {
    this.age = this.age *1;
    return this.age
  };
  getMercuryAge() {
    this.age = this.age * .24;
    return this.age
  };
  getVenusAge() {
    this.age = this.age * .62;
    return this.age
  };
  getMarsAge() {
    this.age = this.age * 1.88;
    return this.age
  };
  getJupiterAge() {
    this.age = this.age * 11.86;
    return this.age
  };

  getEarthLifeLeft() {
    this.lifeExpectency = this.lifeExpectency * 1;
    return this.earthLife = this.lifeExpectency - this.age;
  };
  getMercuryLifeLeft() {
    this.age = this.age * .24;
    this.lifeExpectency = this.lifeExpectency * .24;
    return this.mercuryLife = this.lifeExpectency - this.age;
  };

  getVenusLifeLeft() {
    this.age = this.age * .62;
    this.lifeExpectency = this.lifeExpectency * .62;
    return this.venusLife = this.lifeExpectency - this.age;
  };

  getMarsLifeLeft() {
    this.age = this.age * 1.88;
    this.lifeExpectency = this.lifeExpectency * 1.88;
    return this.marsLife = this.lifeExpectency - this.age;
  };
  getMarsLifeLeft() {
    this.age = this.age * 1.88;
    this.lifeExpectency = this.lifeExpectency * 1.88;
    return this.marsLife = this.lifeExpectency - this.age;
  };
  getJupiterLifeLeft() {
    
    
  }
};

