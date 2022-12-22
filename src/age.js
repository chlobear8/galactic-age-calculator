export class Age {
  constructor(earthYears) {
    this.earthYears = earthYears;
  };

  toMercuryYears() {
    return this.earthYears / .24;
  }

}