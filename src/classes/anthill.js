import { Nest } from "./nest.js";
import $ from "jquery";
const uuidv1 = require("uuid/v1");

export class Anthill extends Nest {
  constructor(params) {
    super({});
    this.type = "Anthill";
    this.id = params.hasOwnProperty("id")
      ? params.id
      : this.type + "_" + uuidv1();
    this.width = (params.hasOwnProperty("width") ? params.width : 50) + "px";
    this.height = (params.hasOwnProperty("height") ? params.height : 50) + "px";
    this.color = params.hasOwnProperty("color") ? params.color : "#9B5412";
    this.borderRadius =
      (params.hasOwnProperty("borderRadius") ? params.borderRadius : 50) + "%";
    this.zIndex = params.hasOwnProperty("zIndex") ? params.zIndex : 1;
  }

  build(params) {
    //draw hill on the screen
    $("<div id=idAntHill_'" + this.id + "'> </div>")
      .css({
        position: "absolute",
        left: (params.hasOwnProperty("intPosX") ? params.intPosX : 100) + "px",
        top: (params.hasOwnProperty("intPosY") ? params.intPosY : 100) + "px",
        width: this.width,
        height: this.height,
        "background-color": this.color,
        background:
          "-webkit-radial-gradient(black 1px, " +
          this.color +
          " 10%, white 95%)",
        "border-radius": this.borderRadius + "%",
        "z-index": this.zIndex
      })
      .appendTo("body");
  }
}
