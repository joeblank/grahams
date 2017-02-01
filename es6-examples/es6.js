const hello = 'hello world';
// hello = 'goodbye';
// console.log(hello);

//Support for constants (also known as "immutable variables"), i.e., variables
// which cannot be re-assigned new content.

let hello2 = 'hello world'
hello2 = 'goodbye'
// console.log(hello2);

let baseball = 'homerun';
baseball = 'strikeout';
// console.log(baseball);

//Notice: this only makes the variable
// itself immutable, not its assigned content (for instance, in case the content
// is an object, this means the object itself can still be altered).

const grapes = {
  size: 'small',
  tastey: 'sometimes'
};
grapes.tastey = 'most of the time'
// console.log(grapes);

//arrow functions
const words = 'I\'m a fat arrow function';
const fn = words => {
  console.log(words);
}
// fn(words);

//default parameter values
const x = 3;
const y = undefined;
const z = undefined;


const fn2 = (x, y = 10, z = 10) => {
  console.log(x + y + z);
}
// fn2(x,y,z);

//spread operator
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1, 6, 7, 8, 9, 10];
// console.log(arr2);

//string interpolation
const name = "Joe";
const hobbies = ['stuff', 'more stuff'];
// console.log('Hi, my name is ' + name + ', and I like to do ' + hobbies[0] + ' and then ' + hobbies[1] + '!');
// console.log(`Hi, my name is ${name}, and I like to do ${hobbies[0]} and then ${hobbies[1]}!`);

//property shorthand
const myName = 'Steph Curry'
const ok = 'no'
const obj1 = { myName: myName};
const obj2 = {
  myName,
  ok: ok
}
// console.log(obj2);


//method properties
const methodObj = {
  fn: function() {
    console.log('fn works');
  },
  fn2 () {
    console.log('fn2 works');
  }
};
methodObj.fn();
methodObj.fn2();
