// Interface is a way for us to create a new type like string, number
interface Vehicle{
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

interface Reportable{
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string{
    return `Name is ${this.name}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string{
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

// the parameter that we pass into function must satisfy the Vehicle interface
// does it has all attributes that Vehicle interface has
// we can have additional attributes
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
}

printSummary(oldCivic);
printSummary(drink);