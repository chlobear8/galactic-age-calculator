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
      ["mercury"],
      ["venus"],
      ["mars"],
      ["jupiter"]
    ];
  };
}