/**
 * Created by jaser.akuly on 4/25/16.
 */

angular.module('app').component('home', {
    templateUrl: '/home/home.html',
    controller: function (rootRef) {
        rootRef.on('value', function () {
            console.log('connected')
        })
    }
})