angular.module('angular-stripe')
.controller('mainCtrl', function($scope, mainService, stripe) {

  $scope.payment = {};
  $scope.payment.amount = 23;

  $scope.charge = function () {
    return stripe.card.createToken($scope.payment.card)
    .then(function (response) {
      console.log('token created for card ending in ', response.card.last4);
      var payment = angular.copy($scope.payment);
      payment.card = void 0;
      payment.token = response.id;
      // return $http.post('/api/payment', payment);
      return $http({
        method: 'POST',
        url: '/api/payment',
        data: {
          amount: $scope.stripeTotal,
          payment: payment
        }
      })
    })
    .then(function(payment) {
      console.log('successfully submitted payment for $', payment);
      alert('Thank you for your business!')
      cartService.placeOrder($scope.stripeUserId, $scope.stripeOrderId).then((response) => {
      })
    })
    .catch(function (err) {
       if (err.type && /^Stripe/.test(err.type)) {
         console.log('Stripe error: ', err.message);
       }
       else {
         console.log('Other error occurred, possibly with your API', err.message);
       }
     });
 };


})
