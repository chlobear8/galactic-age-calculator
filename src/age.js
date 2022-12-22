export class Age {
  constructor(earthYears) {
    this.earthYears = earthYears;
  };

  toMercuryYears() {
    return this.earthYears / .24;
  }

  toVenusYears() {
    return this.earthYears / .62;
  }

}