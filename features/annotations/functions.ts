// we always use type annotation for arguments and return type of function

const add = (a: number,b: number):number =>{
  return a+b;
}

const substract = (a:number,b:number):number =>{
  return a-b;
}

function divide(a:number,b:number): number{
  return a/b;
}

const multiply = function(a:number,b:number):number{
  return a*b;
}

const logger = (message:string): void =>{
  console.log(message);
  // void return type can return void and undefind
}

const throwError = (message: string): void =>{
  // we use never when we sure that we did not return anything
  if(!message){
    throw new Error(message);
  }
}

const todayWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({date, weather}: {date: Date, weather: string}) =>{
  console.log(date,weather);
}

logWeather(todayWeather);