var soccer = {
  origin: 'not America',
  tooMuchFlopping: true
}

function soccerCriticMachine(param1) {
  if (this.tooMuchFlopping) {
    console.log(`${param1} has way too much flopping! It's basically cheating... Maybe I just don't understand soccer because it's origin is ${this.origin}!`);
  }
}

// .bind does not call the function immediately. it will return a bound version of the function to the variable boundFunction with context;

// NOTE: syntax -->     <function>.bind(<context>, <param1>, <param2>...)

var boundFunction = soccerCriticMachine.bind(soccer, 'Soccer');

boundFunction()
