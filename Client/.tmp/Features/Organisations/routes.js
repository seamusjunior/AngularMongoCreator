'use strict';

var cov_2o6fla4orw = function () {
    var path = 'C:\\Repos\\NodeMongoAngular\\Client\\src\\Features\\Organisations\\routes.js',
        hash = '1f2122e7d83dc7478a7b117672fe17bb783945f1',
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: 'C:\\Repos\\NodeMongoAngular\\Client\\src\\Features\\Organisations\\routes.js',
        statementMap: {
            '0': {
                start: {
                    line: 1,
                    column: 13
                },
                end: {
                    line: 8,
                    column: 1
                }
            },
            '1': {
                start: {
                    line: 3,
                    column: 0
                },
                end: {
                    line: 7,
                    column: 6
                }
            },
            '2': {
                start: {
                    line: 10,
                    column: 0
                },
                end: {
                    line: 10,
                    column: 37
                }
            }
        },
        fnMap: {
            '0': {
                name: '(anonymous_0)',
                decl: {
                    start: {
                        line: 1,
                        column: 13
                    },
                    end: {
                        line: 1,
                        column: 14
                    }
                },
                loc: {
                    start: {
                        line: 1,
                        column: 39
                    },
                    end: {
                        line: 8,
                        column: 1
                    }
                }
            }
        },
        branchMap: {},
        s: {
            '0': 0,
            '1': 0,
            '2': 0
        },
        f: {
            '0': 0
        },
        b: {},
        _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}();

++cov_2o6fla4orw.s[0];
var config = function config($stateProvider) {
    ++cov_2o6fla4orw.f[0];
    ++cov_2o6fla4orw.s[1];


    $stateProvider.state('organisations', {
        url: '/organisations',
        templateUrl: 'Features/Organisations/Views/index.html'
    });
};

++cov_2o6fla4orw.s[2];
angular.module('app').config(config);