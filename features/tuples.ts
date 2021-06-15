const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// Type alias
type Drink = [string,boolean,number];

const pepsi: Drink = ['brown',true,40];
const sprite: Drink = ['clear',true,35];
const tea: Drink = ['brown',false,10];

// Really hard to understand what the meaning of each value
const carSpecs: [number,number] = [400,3354];

// Object is more clear
// Use object is better to model the data
const carStats = {
  horsePower: 400,
  weight: 3354
};

