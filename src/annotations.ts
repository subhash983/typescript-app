const colors: string[] = ["red", "green"];

const point: { x: number; y: number } = {
  x: 10,
  y: 30,
};

const logNumber = (n: number): number => {
  console.log(n);
  return 9;
};

const forecastWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}) => {
  console.log(date);
  console.log(weather);
};

type Drink = [string, boolean, number];

const pepsi: Drink = ["drink", true, 40];

let test: boolean | number = 5;
test = true;

interface Vehicle {
  color: string;
  name: string;
  summary(): string;
}

const newVehicle: Vehicle = {
  color: "red",
  name: "fsggfj",
  summary(): string {
    console.log(`${this.name}`);
    return "ndkfnhgk";
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  vehicle.summary();
};

printVehicle(newVehicle);

class Car {
  private static instance: Car;
  private constructor(private color: string) {}

  setColor(color: string): void {
    this.color = color;
  }

  static getInstance(): Car {
    if (Car.instance) {
      return Car.instance;
    } else {
      Car.instance = new Car("red");
      return Car.instance;
    }
  }
}

const singleton = Car.getInstance();
singleton.setColor("blue");
