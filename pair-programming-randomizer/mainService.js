angular.module('app')
.service('mainService', function() {

  var dm21 = [
      'Samuel Brewer'
    ,  'Christopher Coburn'
    ,  'Camden England'
    ,  'Drew Larson'
    ,  'Andrew Nguyen'
    ,  'Harry Vu'
    ,  'Kaliegh Niemala'
    ,  'Wang Bhotia'
    ,  'Jesse Boone'
    ,  'Dominic Decicco'
    ,  'Jake Headley'
    ,  'Carlos Larios'
    ,  'Ian Schoen'
    ,  'Christopher Walker'
    ,  'Andrew Chen'
    ,  'John D\'Agostino'
    ,  'Josh Harris'
    ,  'Kevin Kim'
    ,  'Zachary McClung'
    ,  'Seth Rumbaugh'
    ,  'Jason Stickel'
    ,  'Cameron Walker'
  ];

  var random = []

  this.getDm21 = function() {

    var arr = dm21.slice(0)
    
    function randomNum() {
      return Math.floor( Math.random() * arr.length );
    }

    for (var i = 0; i < arr.length; i++) {
      var newPair = [];
      var firstToAdd = randomNum();
      newPair.push(arr[firstToAdd]);
      arr.splice(firstToAdd, 1);
      if (arr.length === 0) return;
      var secondToAdd = randomNum();
      newPair.push(arr[secondToAdd]);
      arr.splice(secondToAdd, 1);
      random.push(newPair);
    }

    return random;
  }







})
