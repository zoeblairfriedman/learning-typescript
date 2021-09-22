class Vehicle {
  //you don't need to initialize it, just define. But you can do it both here
  // color: string;

  //or define it in the construcctor
  //if you add the public modifier, whatever you pass in first will be assigned as an instance variable to the instance of the Vehicle
  constructor(public color: string){
    // this.color = color
  }

  protected honk(): void {
    console.log('beep beep')
  }
}

const vehicle = new Vehicle('orange');
// vehicle.drive();
// vehicle.honk();

// similar to ES2015

class Car extends Vehicle {
  constructor(public wheels: number, color: string){
    super(color)
  }
  
  private drive(): void {
    console.log('vroom')
  }

  startDrivingProcess(): void {
    this.drive()
    this.honk()
  }
}

const car = new Car(4, 'blue');
car.startDrivingProcess()


console.log(vehicle.color)
// differences.... modifiers!!! 

// modifiers public, private, protected can restrict access on different functions and variables. by default they are public. 

// private methods can only be called by other methods inside of the class. this is used if there is a complicated, special way to use the method that we don't want other methods to inadverently use

// protected methods can be accessed in child methods as well but are like private methods