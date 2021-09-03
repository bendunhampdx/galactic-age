export class GalacticAge {
  constructor(age, lifeExpectency) {
    this.age = age;
    this.lifeExpectency = lifeExpectency;
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
    this.age = this.age * 1;
    this.lifeExpectency = this.lifeExpectency * 1;
    if (this.lifeExpectency < this.age) {
    return (this.lifeExpectency - this.age) * -1;
    } else {
      return this.lifeExpectency - this.age;
    }
  };
  getMercuryLifeLeft() {
    this.age = this.age * .24;
    this.lifeExpectency = this.lifeExpectency * .24;
    if (this.lifeExpectency < this.age) {
    return (this.lifeExpectency - this.age) * -1;
    } else {
      return this.lifeExpectency - this.age;
    }
  };

  getVenusLifeLeft() {
    this.age = this.age * .62;
    this.lifeExpectency = this.lifeExpectency * .62;
    if (this.lifeExpectency < this.age) {
      return (this.lifeExpectency - this.age) * -1;
      } else {
        return this.lifeExpectency - this.age;
      }
    };

  getMarsLifeLeft() {
    this.age = this.age * 1.88;
    this.lifeExpectency = this.lifeExpectency * 1.88;
    if (this.lifeExpectency < this.age) {
      return (this.lifeExpectency - this.age) * -1;
      } else {
        return this.lifeExpectency - this.age;
      }
  };
  getJupiterLifeLeft() {
    this.age = this.age * 11.86;
    this.lifeExpectency = this.lifeExpectency * 11.86;
    if (this.lifeExpectency < this.age) {
      return (this.lifeExpectency - this.age) * -1;
      } else {
        return this.lifeExpectency - this.age;
      }
  }
};

