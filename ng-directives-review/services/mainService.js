angular.module('app')
.service('mainService', function($http, $q, $state) {

var creds = {
  id: 4646,
  password: 'teach'
};

var students = [
  {
    studentId: 1,
    name: 'Joe Blank',
    grade: 'C-',
    effort: 'subpar, needs improving'
  },
  {
    studentId: 2,
    name: 'Ryan Clark',
    grade: 'B-',
    effort: 'A for effort'
  },
  {
    studentId: 3,
    name: 'Gabe Lang',
    grade: 'B+',
    effort: 'Killer attitude'
  },
  {
    studentId: 4,
    name: 'Niall Z.',
    grade: 'F',
    effort: 'Zero eFFort'
  },
  {
    studentId: 5,
    name: 'George Escobar',
    grade: 'A-',
    effort: 'Has problems lying'
  },
  {
    studentId: 6,
    name: 'Julie Anne',
    grade: 'A+',
    effort: 'Doesn\'t even try'
  },
  {
    studentId: 7,
    name: 'Matt French',
    grade: 'F+',
    effort: 'Too much...easy kid...slow it down'
  }
]

this.getData = function() {
  return students;
}


this.login = function(teacher) {

  if(parseInt(teacher.id) === creds.id && teacher.password === creds.password) {
    $state.go('dashboard')
  } else {
    alert('FRAUD ALERT')
  }
}

this.getStudent = function(id) {
for (var i = 0; i < students.length; i++) {
  if(students[i].studentId === parseInt(id)) {
    return students[i];
  }
}
}


})
