let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;
let passengerId = 0;

class Driver {
  constructor(name) {
    this.id = driverId++;
    this.name = name;
    store.drivers.push(this);
  }
}

class Passenger {
  constructor(name) {
    this.id = passengerID++;
    this.name = name;
  }
}


