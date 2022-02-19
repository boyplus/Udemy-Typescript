import 'reflect-metadata';

@printMetaData
class Plane {
  color: string = 'red';

  @markFunction('332')
  fly(): void {
    console.log('vrrrrr');
  }
}

function markFunction(scretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', scretInfo, target, key);
  };
}

function printMetaData(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}

// const plane = {
//   color: 'red',
// };

// Reflect.defineMetadata('note', 'hi there', plane, 'color');

// const note = Reflect.getMetadata('note', plane, 'color');

// console.log(note);

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);

// console.log(note);
// console.log(height);
