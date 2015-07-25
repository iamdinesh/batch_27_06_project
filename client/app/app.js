'use strict';

var app = angular.module('finalProjectApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/login');

    $stateProvider.state("login",{
    	"url" : '/login',
    	"templateUrl" : "/app/login/login.html",
    	"controller" : "loginCtrl"
    }).state("home",{
      "url" : "/home",
      "templateUrl" : "/app/home/home.html",
      "controller" : "homeCtrl"
    });

    $locationProvider.html5Mode(true);
  });