import { Nest } from "./nest.js";
const uuidv1 = require("uuid/v1");

export class Anthill extends Nest {
  constructor(params) {
    super({});
    this.type = "Anthill";
    this.id = params.hasOwnProperty("id")
      ? params.id
      : this.type + "_" + uuidv1();
  }
}
