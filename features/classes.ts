class Vehicle {
  // public -> can be called any where
  // protected -> can be called only in this class or child class
  // private -> can be called only inside that class

  // This is shortcut to initialize the attribute
  constructor(public color: string) {

  }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('black');
// vehicle.honk();
console.log(vehicle.color);

class Car extends Vehicle{
  // we did not put public on the color because we did not want create
  // the new color, but use the same color of parent
  constructor(public wheels: number, color: string){
    super(color);
  }

  // if we want to override the method, we cannot change modifiers
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void{
    this.drive();
    this.honk();
  }
}

const car = new Car(4,'blue');
car.startDrivingProcess();