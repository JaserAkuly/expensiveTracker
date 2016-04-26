/**
 * Created by jaser.akuly on 4/25/16.
 */

var app = angular.module('app', ['ngRoute', 'firebase']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            template: '<home></home>'
        })
        .when('/login', {
            template: '<login></login>'
        })
        .otherwise('/home')
});