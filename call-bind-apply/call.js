var person = {
  firstName: 'Ned',
  lastName: 'Needles',
  age: 20,
  bday: 'March 8th'
};

function welcomeMachine(param1) {
  console.log('Hello ' + this.firstName + ', welcome to the ' + param1 +'!');
}

welcomeMachine() // this.firstName will be undefined.

//Context can fix this issue.

//By using explicit binding (call), we can set the context of 'this'.

// NOTE: syntax -->      <function>.call(<context>, param1, param2, param3...)

welcomeMachine.call(person, 'party')

// NOTE: welcomeMachine gets invoked immediately when using .call
