angular.module('state-params-example')
.service('mainService', function() {

  var foodData = [
    {
      item: 'apple',
      id: 1,
      price: 1,
      img: 'https://s-media-cache-ak0.pinimg.com/originals/3e/b1/e7/3eb1e756d66856975d6e43ebb879200a.jpg'
    },
    {
      item: 'pizza',
      id: 2,
      price: 10,
      img: 'http://www.cicis.com/media/1138/pizza_trad_pepperoni.png'
    },
    {
      item: 'ice cream',
      id: 3,
      price: 5,
      img: 'http://kundaliniandcelltowers.com/ben-and-jerrys-ice-cream-4.jpg'
    },
    {
      item: 'peach',
      id: 4,
      price: .50,
      img: 'https://static1.squarespace.com/static/55359ac0e4b0a48fd270d2fa/t/5546f310e4b015ca719c53fd/1430713111513/'
    },
    {
      item: 'chips',
      id: 5,
      price: 2,
      img: 'http://www.fritolay.com/images/default-source/blue-bag-image/doritos-nacho-cheese.png?sfvrsn=2'
    }
  ];

  this.getFoodData = function() {
    return foodData;
  }

})
