angular.module('stripe-app')
.controller('mainCtrl', ($scope, stripe, $http) => {



//==========STRIPE==================
  $scope.passValues = (userId, orderId, schmotal) => {
    $scope.stripeUserId = userId;
    $scope.stripeOrderId = orderId;
    $scope.stripeTotal = schmotal;
  }


  $scope.payment = {};
  $scope.payment.amount = 23;

  $scope.charge = function () {
    return stripe.card.createToken($scope.payment.card)
    .then(function (response) {
      console.log('token created for card ending in ', response.card.last4);
      var payment = angular.copy($scope.payment);
      payment.card = void 0;
      payment.token = response.id;

      return $http({
        method: 'POST',
        url: '/api/payment',
        data: {
          amount: $scope.mockPrice,
          payment: payment
        }
      })
    })
    .then(function(payment) {
      console.log('successfully submitted payment for $', payment);

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





 //===END CTRL=======
})
