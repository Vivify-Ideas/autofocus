(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['angular'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('angular'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.angular);
    }
}(this, function (angular) {
    var moduleName = 'vivify-ideas.angular-autofocus';
    var mod = angular.module(moduleName, []);
    mod.directive('vi-autofocus', ['$timeout', function($timeout) {
        return {
            restrict: 'A',
            link : function($scope, $element) {
                $timeout(function() {
                    $element[0].focus();
                });
            }
        }
    }]);

    return moduleName;
}));