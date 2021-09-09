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

// flexible types. if we're initializing with one but we know we'll want two. 

// const importantDates = [new Date(), '2030=-10-10'] this will initialize both
const importantDates: (Date | string)[] = [new Date()]; // this will let us set up for both
importantDates.push(('2030-10-10'))
importantDates.push((new Date()))