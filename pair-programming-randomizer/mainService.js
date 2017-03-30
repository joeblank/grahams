angular.module('app')
.service('mainService', function() {
  console.log('hey');
      var store = function(name, data) {
        console.log('running');
        localStorage.setItem('joe', JSON.stringify(7));
        console.log('saved');
      };
      store();
      var get = function(name) {
        var item = localStorage.getItem('joe');
        console.log('got it', JSON.parse(item));
      };
      get();



  var dm21 = [
      'Samuel Brewer'
    ,  'Christopher Coburn'
    ,  'Nick Celaya'
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
  var cohorts = {
    dm21: [
        'Samuel Brewer'
      ,  'Christopher Coburn'
      ,  'Nick Celaya'
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
    ]
  }

  var random = []

  this.getDm21 = function() {

    random = [];

    var arr = cohorts.dm21.slice(0)
    console.log(arr, dm21);

    function randomNum() {
      return Math.floor( Math.random() * arr.length );
    }

    for (var i = arr.length - 1; i > 0; i-=2) {
      console.log('running', i);
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
