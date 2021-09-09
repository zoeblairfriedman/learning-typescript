// arguments can't use inference, must use annotation
// output can use inference, but we shouldn't use it

const add = (a: number, b: number):number => {
 return a + b; 
}
const sub = (a: number, b: number):number => {
 return a-b; 
}

// alt syntax

function divide(a: number, b: number):number {
  return a / b;
}

const multiply = function(a: number, b:number): number {
  return a * b;
}

// void & never

const logger = (message: string): void => {
  console.log(message);
}

const throwError = (message:string): never => {
  throw new Error(message);
}

// with a destructured object

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
  console.log(date)
  console.log(weather)
}



logWeather(todaysWeather)