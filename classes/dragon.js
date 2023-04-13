class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons(...dragons) {
    let allDragons = [];

    if (arguments.length === 1) {
      allDragons.push(dragons.name);
    } else {
      for (let dragon of dragons) {
        allDragons.push(dragon.name);
      }
    }

    return allDragons;
  }
}

const puff = new Dragon("Puff", "green");
const toothless = new Dragon("Toothless", "black");
console.log(Dragon.getDragons(puff, toothless));

module.exports = Dragon;
