export class GalacticAge {
  constructor(planet, age, lifeExpectency ) {
    this.planet = planet;
    this.age = age;
    this.lifeExpectency = lifeExpectency;
   
  }

  getAge() {
    if (this.planet === "earth") {
      return this.age * 1;
    } else if (this.planet === "mercury") {
      return this.age * .24;
    } else if (this.planet === "venus") {
      return this.age * .62;
    } else if (this.planet === "mars") {
      return this.age * 1.88;
    } else if (this.planet === "jupiter") {
      return this.age * 11.86;
    } else {
      return this.age;
    }
  };

  getLife() {
    if (this.planet === "earth") {
      return this.lifeExpectency * 1;
    }
  }
};

