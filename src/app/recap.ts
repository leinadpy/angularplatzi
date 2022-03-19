const username: string = 'Daniel';
const sum = (a: number, b: number) => {
  return a + b;
};
sum(1, 2);

class Person {
  constructor(public age: number, public lastName: string) {}
}

const dani = new Person(33, 'Ojeda');
dani.age;
