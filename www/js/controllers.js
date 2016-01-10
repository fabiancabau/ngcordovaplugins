angular.module('starter.controllers', ['ngCordova'])

.controller('DashCtrl', function($scope, $cordovaPrinter, $cordovaDialogs, $cordovaTouchID) {
  $scope.print = function() {
    if (window.cordova) {
      $ionicPlatform.ready(function() {
        var printerAvail = $cordovaPrinter.isAvailable()

        var doc = "<html> ... </html>";
        $cordovaPrinter.print(doc)
      });
    }
  }

  $scope.nativeAlert = function() {
    $cordovaDialogs.alert('message', 'title', 'button name')
    .then(function() {
      // callback success
    });
  }

  var success = function() {
    alert('logado');
  }

  var error = function() {
    alert('erro');
  }

  $scope.touchid = function() {
    
    $cordovaTouchID.checkSupport().then(function() {
      // success, TouchID supported
      alert('suporta touchid');
      $cordovaTouchID.authenticate("text", success, error);
    }, function (error) {
      alert(error); // TouchID not supported
    });

  }

    

})

.controller('ChatsCtrl', function($scope) {


})

.controller('ChatDetailCtrl', function($scope, $stateParams) {
  // $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  // $scope.settings = {
  //   enableFriends: true
  // };
});
