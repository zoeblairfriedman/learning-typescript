const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// creates a new type of a tuple a "Type alias"
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

