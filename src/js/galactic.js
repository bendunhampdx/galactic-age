export class GalacticAge {
  constructor(age, lifeExpectency) {
    this.age = age;
    this.lifeExpectency = lifeExpectency;
    this.earthAge = 0;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
  }


  getEarthLifeLeft() {
    this.earthAge = this.age * 1;
    this.lifeExpectency = this.lifeExpectency * 1;
    if (this.lifeExpectency < this.earthAge) {
    return (this.lifeExpectency - this.earthAge) * -1;
    } else {
      return this.lifeExpectency - this.earthAge;
    }
  };
  getMercuryLifeLeft() {
    this.mercuryAge = this.age * .24;
    this.lifeExpectency = this.lifeExpectency * .24;
    if (this.lifeExpectency < this.mercuryAge) {
    return (this.lifeExpectency - this.mercuryAge) * -1;
    } else {
      return this.lifeExpectency - this.mercuryAge;
    }
  };

  getVenusLifeLeft() {
    this.venusAge = this.age * .62;
    this.lifeExpectency = this.lifeExpectency * .62;
    if (this.lifeExpectency < this.venusAge) {
      return (this.lifeExpectency - this.venusAge) * -1;
      } else {
        return this.lifeExpectency - this.venusAge;
      }
    };

  getMarsLifeLeft() {
    this.marsAge = this.age * 1.88;
    this.lifeExpectency = this.lifeExpectency * 1.88;
    if (this.lifeExpectency < this.marsAge) {
      return (this.lifeExpectency - this.marsAge) * -1;
      } else {
        return this.lifeExpectency - this.marsAge;
      }
  };
  getJupiterLifeLeft() {
    this.jupiterAge = this.age * 11.86;
    this.lifeExpectency = this.lifeExpectency * 11.86;
    if (this.lifeExpectency < this.jupiterAge) {
      return (this.lifeExpectency - this.jupiterAge) * -1;
      } else {
        return this.lifeExpectency - this.jupiterAge;
      }
  }
};

