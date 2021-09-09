const carMakers = ['ford', 'toyota'];
const dates = [new Date(), new Date()]

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

// Help with inference when extracting values
const newCar = carMakers[0]
const myCar = carMakers.pop();

// Prevent incompatible values 
// carMakers.push(100) <-- this throws an error

// Help with 'map' <-- check out the autocompletes on the car!!
carMakers.map((car: string): string => {
  return car.toLowerCase();
})