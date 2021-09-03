import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const reader = new MatchReader('football.csv');
reader.read();
const dateOfFirstMatch = reader.data[0][0];
const matches = reader.data;

let manUnitedWins = 0;

for(let match of matches) { 
  if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
    manUnitedWins++;
  } else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin){
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);