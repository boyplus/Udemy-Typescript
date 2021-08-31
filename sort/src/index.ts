import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { Sorter } from './Sorter'

// const numersCollection = new NumbersCollection([10,3,-5,0]);
// const sorter = new Sorter(numersCollection);
// sorter.sort();
// console.log(sorter.collection);


const charactersCollection = new CharactersCollection('Xaayb');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(sorter.collection);