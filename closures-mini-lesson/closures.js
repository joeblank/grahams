//In JavaScript, we have local and global variables;

//Functions can access all the variables defined INSIDE the function, but
//can also access variables defined OUTSIDE the function


var fn = function() {
  var a = 4;
  return a + a;
}
// fn()
//var a is local to the fn function
//it cannot be accessed outside the function

// console.log(a)
//this console.log will not work. it does not have access the variable a



var b = 3;
//var b is a gloabl variable and is accessable to any function.

var fn2 = function() {
  return b * b;
}

var nestingFns = function() {
  (function() {
    (function() {
      (function() {
        (function() {
          console.log(b)
        })()
      })()
    })()
  })()
}
// nestinFns()

//How long do variables live?

//global variables live as long as application is living (web page is running)

//local variables are created when the function is invoked, and get 'deleted' when the function is done running.

//Let's say that we need to keep track of a 'counter' variable. And we need a function that will add 5 to the variable each time it is invoked.

//we can use a global variable to solve this problem.

var count = 0;

var addFive = function() {
  count += 5;
}

addFive();
addFive();
// console.log('current value of count variable: ', count);

//great! problem solved, right? not quite...

//we have introduced a new problem. Our global variable 'count' is accessible to ANY function.

var codeRuiner = function() {
  count -= (10 * .3467);
  count = 'z';
  console.log('Muhahahahahah!');
}

// codeRuiner();
// console.log('Value of count after codeRuiner: ', count);

//Is the realistic? I hope not, but the concept is that you may introduce a bug to your code by accidentally using the count varible in another function (forgot to declare local variable 'count' in function)

//we need to solve this. Let's try to protect our count variable by putting it inside a function

var varProtector = function() {
  var count = 0;
  console.log('Protected? :', count += 1)
}
// varProtector();
// varProtector();
// varProtector();




//what happened? Remember the life span of a local variable? It gets created when the function is invoked and 'deleted' when the function is done running.

//even though we ran the function 3 times, each time, var count was declared/created and initialized with the value of 0;


//inner functions can help us solve this problem...
//nested functions have access to variables outside of it (variables in the parent function)

var outerFn = function() {
  var count = 0;

  var innerFn = function() {
    count += 1;
  }

  innerFn();

  console.log('Count value from outerFn: ',count);
}

// outerFn();
// outerFn();
// outerFn();

//we still don't have a solution. we have an inner fn that has access to the parent function's count variable, but we have no way to call the inner function without calling the outer first...

//...until we use the CLOSURE technique!

//Remember that we create a closure when we
// 1. Call the outer fn
//2. and the outer fn returns the inner fn

//again ... CLOSURES ARE CREATED ON THE INVOCATION OF THE OUTER FN WHICH RETURNS AN INNER FN

var outerFn2 = function() {
  var count = 0;

  var innerFn2 = function returnedFn() {
    count += 1;
    console.log('Count value using closure: ', count);
  }

  return innerFn2
}

var closuresAreCool = outerFn2(); //closure created

// console.log('closuresAreCool: ', closuresAreCool);

// closuresAreCool();
// closuresAreCool();
// closuresAreCool();


//A closure is a function that still has access to the parent functions scope even AFTER the parent function has stopped running.

//by using a closure, we have created a PRIVATE VARIABLE that is protected from other funcitons, and can only be changed by the inner function that was returned.


//Using javascript closures, make the following code work:


// var addTen = outerFn3(10);
// addTen(5); // 15
// addTen(22); // 32

//answer below...
















function outerFn3(num) {
  var privateVar = num;
  return function(num2) {
    console.log(privateVar + num2);
  }
}

//another closure problem to fix. Console.log i, from 0 to 3;


// for (var i = 0; i < 4; i++) {
//   setTimeout(closureFn(i), 1000 * i);
// }

// function closureFn(i) {
//   return function() {
//     console.log(i)
//   }
// }




//create a calculator









var calcCreator = function() {
  var start = 0;
  return {
    add: function(num) {
      return start += num;
    },
    sub: function(num) {
      return start -= num;
    },
    div: function(num) {
      return start /= num;
    },
    mult: function(num) {
      return start *= num;
    }
  };
}
var calc = calcCreator();

// calc.add(20);
// calc.sub(2);
// calc.div(3);
// calc.mult(5);
