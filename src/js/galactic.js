export class GalacticAge {
  constructor(age, lifeExpectency) {
    this.age = age;
    this.lifeExpectency = lifeExpectency;
  }

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

