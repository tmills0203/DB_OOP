const h1 = document.querySelector("h2");
const h2 = document.querySelector("h2");
const gokuImg = document.querySelector("#goku");
const vegetaImg = document.querySelector("#vegeta");

const imgArr = [gokuImg, vegetaImg];

// saiyan race
class Saiyans {
  constructor(name, powerLvl, hairColor, eyeColor, hasTail, isAggressive) {
    this._name = name;
    this._powerLvl = powerLvl;
    this.hairColor = hairColor;
    this.hasTail = hasTail;
    this.eyeColor = eyeColor;
    this.isAggressive = isAggressive;
  }

  get name() {
    return this._name;
  }

  get powerLvl() {
    return this._powerLvl;
  }

  introduction() {
    return `${this.name} is a saiyan with ${this.hairColor} hair, ${this.eyeColor} eyes, ${this.isAggressive} and has ${this.hasTail}.`;
  }

  powerLvl() {
    return `${this._name} has the power level of ${this._powerLvl}`;
  }
}

const bardock = new Saiyans(
  "Bardock",
  "~10000",
  "black",
  "black",
  "tail",
  "aggressive"
);

// family of saiyans

class Family extends Saiyans {
  constructor(
    name,
    powerLvl,
    hairColor,
    eyeColor,
    hasTail,
    isAggressive,
    partner,
    children,
    specialMove
  ) {
    // from parent class
    super(name, powerLvl, hairColor, eyeColor, hasTail, isAggressive);
    // Goku own features
    this._partner = partner;
    this._children = children;
    this.specialMove = specialMove;
  }

  // family

  get partner() {
    return this._partner;
  }

  get children() {
    return this._children;
  }

  // about the character

  bio() {
    return `${this._name} is a saiyan whose partner is ${this.partner}, their children are ${this._children[0]} and ${this._children[1]}.`;
  }

  // special move
  techniques() {
    return `${this._name} signature move is ${this.specialMove}`;
  }
}

const goku = new Family(
  "Goku",
  "24 Billion  ",
  "black",
  "black",
  "no tail",
  "not aggressive",
  "Chi-Chi",
  ["Gohan", "Goten"],
  "Kamehameha"
);

const vegeta = new Family(
  "Vegeta",
  "4.5 Billion  ",
  "black",
  "black",
  "no tail",
  "aggressive",
  "Bulma",
  ["Trunks", "Bulla"],
  "Galick Gun"
);

// Saiyan villans

// display info on character in h2

let saiyans = [goku, vegeta];

imgArr.forEach((img) => {
  img.addEventListener("click", () => {});
});
