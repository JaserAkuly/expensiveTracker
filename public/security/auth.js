/**
 * Created by jaser.akuly on 4/26/16.
 */
angular.module('app').factory('auth', function ($firebaseAuth, rootRef) {
    return $firebaseAuth(rootRef);
    
})