interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string; //has to have a fnction that returns a string
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
}

// const printVehicle = (vehicle: { name: string; year: number; broken: boolean}): void => {
//   console.log(`Name: ${vehicle.name}`)
//   console.log(`Year: ${vehicle.year}`)
//   console.log(`Broken: ${vehicle.broken}`)
// }

const printVehicle = (vehicle: Vehicle): void => {
  // console.log(`Name: ${vehicle.name}`)
  // console.log(`Year: ${vehicle.year}`)
  // console.log(`Broken: ${vehicle.broken}`)
  console.log(vehicle.summary())
}

printVehicle(oldCivic)
