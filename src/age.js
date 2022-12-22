export class Age {
  constructor(earthYears) {
    this.earthYears = earthYears;
  };

  toMercuryYears() {
    return this.earthYears / .24;
  };

  toVenusYears() {
    return this.earthYears / .62;
  };

  toMarsYears() {
    return this.earthYears / 1.88;
  };

  toJupiterYears() {
    return this.earthYears / 11.86;
  };
  
  planetYears() {
    return[
      ["mercury", .24],
      ["venus", .62],
      ["mars", 1.88],
      ["jupiter", 11.86]
    ];
  };

  yearsPassed(pastYear) {
    let age = [];
    const planets = this.planetYears();
    for (let i = 0; i <planets.length; i++) {
      let ageOnPlanet = this.earthYears /planets[i][1];
      let pastYearonPlanet = pastYear / planets[i][1];
      age.push([planets[i][0], ageOnPlanet - pastYearonPlanet]);
      }
    return age;
  }
}