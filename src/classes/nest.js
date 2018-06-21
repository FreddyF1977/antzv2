export class Nest {
  constructor(params) {
    this.maxInhabitant = params.hasOwnProperty("maxInhabitant")
      ? params.maxInhabitant
      : 100;
  }
}
