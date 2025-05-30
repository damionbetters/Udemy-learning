"use strict";

// Constructor Function
function HouseKeeper(name, age, cleaningRepertiore, yearsOfExperience) {
  this.name = name;
  this.age = age;
  this.cleaningRepertiore = cleaningRepertiore;
  this.yearsOfExperience = yearsOfExperience;
  this.clean = function () {
    console.log(`${this.name} - Cleaning in progress`);
  };
  this.doneClean = function () {
    console.log(`${this.name} - Cleaning is finished`);
  };
}

const HouseKeeper1 = new HouseKeeper(
  "Mattie",
  97,
  ["bathroom", "kitchen", "patio"],
  50
);
const HouseKeeper2 = new HouseKeeper(
  "Joanne",
  43,
  ["bathroom", "kitchen", "patio", "lawn"],
  17
);

console.log(HouseKeeper1);
console.log(HouseKeeper2);

function Car(brand, model, year, mileage) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.mileage = mileage;
}

Car.prototype.drive = function (distance) {
  this.mileage += distance;
};
Car.prototype.getCarInfo = function () {
  return `${this.brand} ${this.model} ${this.year} - ${this.mileage} miles`;
};

const myCar = new Car("Chevrolet", "Malibu", 2020, 90000);
console.log(myCar);
myCar.drive(500);
console.log(myCar.getCarInfo());

const houseKeeper3 = new HouseKeeper("Ashley", 37, ["bedroom"], 2);
houseKeeper3.clean();
houseKeeper3.doneClean();
