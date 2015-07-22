var myApp;
(function (myApp) {
    var MainController = (function () {
        function MainController() {
            this.message = 'Hello World';
        }
        return MainController;
    })();
    function charCounter() {
        return function (input, max) { return max - myLib.countOfChars(input); };
    }
    angular
        .module('myApp', [])
        .controller('mainController', MainController)
        .filter('charCounter', charCounter);
})(myApp || (myApp = {}));
//# sourceMappingURL=myApp.js.map