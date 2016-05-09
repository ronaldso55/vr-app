angular.
  module('vr-app').
    controller('MainController', ['$scope', '$meteor',

    function ($scope, $meteor) {
      debugger;
      $scope.startVideo = function () {
        YoutubeVideoPlayer.openVideo('PuBZQMcmMxU');
      };
    }]);