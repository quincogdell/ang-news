'use strict';
/* global app:true */

var app = angular.module('angNewsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: '/views/showpost.html',
        controller: 'PostViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

.constant('FIREBASE_URL', 'https://fiery-fire-7125.firebaseio.com/')
