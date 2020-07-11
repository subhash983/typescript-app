"use strict";
const colors = ["red", "green"];
const point = {
    x: 10,
    y: 30,
};
const logNumber = (n) => {
    console.log(n);
    return 9;
};
const forecastWeather = ({ date, weather, }) => {
    console.log(date);
    console.log(weather);
};
const pepsi = ["drink", true, 40];
let test = 5;
test = true;
const newVehicle = {
    color: "red",
    name: "fsggfj",
    summary() {
        console.log(`${this.name}`);
        return "ndkfnhgk";
    },
};
const printVehicle = (vehicle) => {
    vehicle.summary();
};
printVehicle(newVehicle);
class Car {
    constructor(color) {
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
    static getInstance() {
        if (Car.instance) {
            return Car.instance;
        }
        else {
            Car.instance = new Car("red");
            return Car.instance;
        }
    }
}
const singleton = Car.getInstance();
singleton.setColor("blue");
