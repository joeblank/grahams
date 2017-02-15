var myCar = {
  make: 'Suzuki',
  model: 'X-90',
  weirdLooking: true
};

function carInspector(param1, param2, param3) {
  if (this.weirdLooking) {
    console.log(`If you drive a ${this.make} ${this.model}, then your car is a little odd looking. Here are some suggestions of slightly better looking cars: ${param1}, ${param2}, ${param3}.`)
  }
}

carInspector() //console.log will not run. Function does not know context of 'this'

// Use explicit context to fix.

// NOTE: syntax for 'apply' -->      <function>.apply(<context>, [ <param1>, <param2>, <param3...> ]);

var listOfCars = ['Nissan Cube', 'AMC Gremlin', 'Pontiac Aztek'];

carInspector.apply(myCar, listOfCars);

// NOTE: carInspector gets invoked immediately when using .apply
