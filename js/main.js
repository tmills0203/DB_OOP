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

// display info on character in h2
const btn = document.querySelector(".btn");
const imgs = document.querySelectorAll(".card-track img");
const track = document.querySelector(".card-track");
const info = document.querySelector(".card-content");
console.log(info);
const powerLvl = document.querySelector(".power");

let idx = 0;

// interval through pic
let interval = setInterval(run, 2000);

// increase the index by 1
function run() {
  idx++;

  // function that changes the img by the index
  changeImage();
}

// changes the translate value
function changeImage() {
  // are we at the end of the node list?
  if (idx > imgs.length - 1) {
    //  go back to index 0
    idx = 0;
  } else if (idx < 0) {
    //  check to see if we are at the beginning
    idx = imgs.length;
  }
}
btn.addEventListener("click", () => {
  if (imgs[0] === idx) {
    info.innerHTML = goku.bio();
    powerLvl.innerHTML = goku._powerLvl;
  } else if (imgs[1] === idx) {
    info.innerHTML = vegeta.bio();
    powerLvl.innerHTML = vegeta._powerLvl;
  }
  imgs.style.transform = `translateY(${-idx * 307}px)`;
});
