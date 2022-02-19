class Boat {
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  pilot(): void {
    console.log('swish');
  }
}

function testDecorator(target: any, key: string): void {
  console.log('target:', target);
  console.log('key', key);
}
