class Car {
  model: String;
  doors: Number;
  isElectric: Boolean;

  constructor(model: String, doors: Number, isElectric: Boolean) {
    this.model = model;
    this.doors = doors;
    this.isElectric = isElectric;
  }

  make(): string {
    return `
      This car is a ${this.model},
      it has ${this.doors} doors and
      it is ${this.isElectric ? 'electric' : 'not electric'}
    `;
  }
}

let newCar = new Car('Volvo', 4, true);

const car: Node = document.createElement('h2');

car.textContent = newCar.make();

document.body.appendChild(car);
