module myApp {
    class MainController {
        public message: string;
        constructor() {
            this.message = 'Hello World';
        }
    }

    function charCounter() {
        return (input: string, max: number) => max - myLib.countOfChars(input);
    }

    angular
        .module('myApp', [])
        .controller('mainController', MainController)
        .filter('charCounter', charCounter);
}