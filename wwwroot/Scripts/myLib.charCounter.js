var myLib;
(function (myLib) {
    function countOfChars(s) {
        s = s || '';
        return s.length;
    }
    myLib.countOfChars = countOfChars;
})(myLib || (myLib = {}));
if (typeof (exports) != 'undefined')
    exports.myLib = myLib;
//# sourceMappingURL=myLib.charCounter.js.map