angular.module('gulp-example')
.service('mainService', function() {

  const data = [1,2,3,4,5,6,7,8,9,10];

  this.getData = () => {
    return data;
  }



})
