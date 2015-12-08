'use strict';

/**
 * @ngdoc overview
 * @name ngDashboardApp
 * @description
 * # ngDashboardApp
 *
 * Main module of the application.
 */
angular
    .module('ngDashboardApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'yaru22.md',
        'angularTreeview'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('root', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .state('about', {
                url: "/about",
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            });

        $urlRouterProvider.otherwise('/');
    })
    .run(function($rootScope) {
        // you can inject any instance here
        $rootScope.patternList = [{
            "label": "User",
            "id": "role1",
            "children": [{
                "label": "subUser1",
                "id": "role11",
                "children": []
            }, {
                "label": "subUser2",
                "id": "role12",
                "children": [{
                    "label": "subUser2-1",
                    "id": "role121",
                    "children": [{
                        "label": "subUser2-1-1",
                        "id": "role1211",
                        "children": []
                    }, {
                        "label": "subUser2-1-2",
                        "id": "role1212",
                        "children": []
                    }]
                }]
            }]
        }, {
            "label": "Admin",
            "id": "role2",
            "children": []
        }, {
            "label": "Guest",
            "id": "role3",
            "children": []
        }];
    });
