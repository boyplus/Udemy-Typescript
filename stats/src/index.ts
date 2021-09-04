import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

//Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
// now we can reference to matchReader.matches

const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());

summary.buildAndPrintReport(matchReader.matches);
