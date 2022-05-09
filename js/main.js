// display info on character in h2
const imgs = document.querySelector("#imgs");
const btn = document.querySelector(".btn");
const h1 = document.querySelector(".info h1");
const span = document.querySelector(".info span");
const power = document.querySelector(".powerLvl");

// gets specific index
const img = document.querySelectorAll("#imgs img");

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

  scouter() {
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

class Villans extends Saiyans {
  constructor(
    name,
    powerLvl,
    hairColor,
    eyeColor,
    hasTail,
    isAggressive,
    specialMove
  ) {
    super(
      name,
      powerLvl,
      hairColor,
      eyeColor,
      hasTail,
      isAggressive,
      specialMove
    );
    this.specialMove = specialMove;
  }
}
const raditz = new Villans(
  "Raditz",
  "1600",
  "black",
  "black",
  "a tail",
  "aggressive",
  "saturday crash"
);
const nappa = new Villans(
  "Nappa",
  "4000",
  "no",
  "black",
  "a tail",
  "aggressive",
  "volcano explosion"
);

btn.addEventListener("click", run);

// starts img index at index 0
let idx = 0;

// interval through pic
// let interval = setInterval(run, 2000);

// increase the index by 1

function info() {
  if (idx === 0) {
    h1.textContent = "Vegeta";
    span.textContent = vegeta.bio();
    power.textContent = vegeta._powerLvl;
  } else if (idx === 1) {
    h1.textContent = "Goku";
    span.textContent = goku.bio();
    power.textContent = goku._powerLvl;
  }
}

function run() {
  info();
  idx++;

  // function that changes the img by the index
  changeImage();
}

// changes the translate value
function changeImage() {
  // are we at the end of the node list?

  if (idx > img.length - 1) {
    //  go back to index 0
    idx = 0;
  } else if (idx < 0) {
    //  check to see if we are at the beginning
    idx = img.length;
  }

  // beginning or at the end
  // index times the width of the current 500 px

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}
