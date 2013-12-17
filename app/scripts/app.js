'use strict';

angular.module('onlineSoapboxApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/About.html',
        controller: 'AboutCtrl'
      })
      .when('/login/:service', {
        templateUrl: 'views/Login.html',
        controller: 'LoginCtrl'
      })
      .when('/c/:candidateId', {
        templateUrl: 'views/Candidate.html',
        controller: 'CandidateCtrl'
      })
      .when('/c/:candidateId/edit', {
        templateUrl: 'views/EditCandidate.html',
        controller: 'EditCandidateCtrl'
      })
      .when('/c/:candidateId/present/:presentationId', {
        templateUrl: 'views/CandidatePresentation.html',
        controller: 'CandidatePresentationCtrl'
      })
      .when('/th/:townHallId', {
        templateUrl: 'views/TownHall.html',
        controller: 'TownHallCtrl'
      })
      .when('/121/:meetingId', {
        templateUrl: 'views/Exclusive.html',
        controller: 'ExclusiveCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
