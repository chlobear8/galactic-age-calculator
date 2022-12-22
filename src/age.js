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

  yearsPassed() {
    let age = this.earthYears;
    return age;
  }
}