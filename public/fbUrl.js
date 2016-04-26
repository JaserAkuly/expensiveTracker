/**
 * Created by jaser.akuly on 4/26/16.
 */
angular.module('app').constant('FirebaseUrl', 'https://expensivetracker.firebaseio.com/')
    .service('rootRef', ['FirebaseUrl', Firebase]);