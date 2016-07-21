'use strict';

angular.module('devmtnTravel', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: "../views/about.html",
        controller: 'homeCtrl'
    }).state('adventurers', {
        url: '/adventurers',
        parent: 'home',
        templateUrl: "../views/about-adventurers.html"
    }).state('contact', {
        url: '/contact',
        parent: 'home',
        templateUrl: "../views/contact.html",
        controller: 'contactCtrl'
    }).state('packages', {
        url: '/packages',
        templateUrl: "../views/packages.html",
        controller: "packagesCtrl",
        controllerAs: 'vm'
    }).state('booked', {
        url: '/booked/:id',
        templateUrl: "../views/booked.html",

        controllerAs: 'vm'
    }).state('locations', {
        url: '/locations',
        templateUrl: "../views/locations.html",
        controller: 'locationsCtrl',
        controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('devmtnTravel').directive('adventurerCard', function () {
  return {
    restrict: 'A',
    templateUrl: '../views/adventureCard.html',
    scope: {
      img: '@',
      title: '@',
      summary: '@'
    }
  };
});
'use strict';

angular.module('devmtnTravel').controller('contactCtrl', function ($scope) {});
'use strict';

angular.module('devmtnTravel').controller('homeCtrl', function ($scope) {
  var foo = function foo(a, b) {
    return a + b;
  };
});
"use strict";

angular.module('devmtnTravel').controller("locationsCtrl", function ($scope, mainSrv) {
  this.locations = mainSrv.travelInfo;
});
'use strict';

angular.module('devmtnTravel').controller('packagesCtrl', function ($scope, mainSrv) {
  $scope.packages = mainSrv.travelInfo;

  $scope.lowestPrice = function () {
    var lowest = $scope.packages.reduce(function (a, b) {
      return a.price < b.price ? a.price : b.price;
    });
    // lowest = lowest.toString().replace(/(\d{3})+(?!\d)/, ',')
    return lowest;
  }();
});