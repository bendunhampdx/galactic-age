export class GalacticAge {
  constructor(planet, age) {
    this.planet = planet;
    this.age = age;
   
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
    }
  };
};

