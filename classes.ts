class Vehicle {
  protected honk(): void {
    console.log('beep beep')
  }
}

const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

// similar to ES2015

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom')
  }

  startDrivingProcess(): void {
    this.drive()
    this.honk()
  }
}

const car = new Car();
car.startDrivingProcess()


// differences

// modifiers public, private, protected can restrict access on different functions and variables. by default they are public. 

// private methods can only be called by other methods inside of the class. this is used if there is a complicated, special way to use the method that we don't want other methods to inadverently use

// protected methods can be accessed in child methods as well but are like private methods