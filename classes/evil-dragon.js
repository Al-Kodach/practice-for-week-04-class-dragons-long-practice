const Dragon = require('./dragon');

class EvilDragon extends Dragon {
  constructor(name, color, evilDoings, nemesis) {
    super(name, color); // inherit constructor from the Dragon class
    this.evilDoings = evilDoings; // initialize evile doing array argument
    this.nemesis = nemesis; // initialize nemesis argument
  }

  // loop evil-doing array and form a sentence with each element.
  dontInviteThemOverForDinner() {
    for (let doEvil of this.evilDoings) {
      // form sentence with literal/templete strings
      console.log(`${this.name} will ${doEvil}`);
    }
  }

  // form a sentence with the
  burnsNemesis() {
      // return sentence formed using literal/templete strings
    return (
      `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`
    )
  }
}


module.exports = EvilDragon;
