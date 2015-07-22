var myLibModule = require('../Scripts/myLib.charCounter');
describe('charCounter', function () {
    var myLib = myLibModule.myLib;
    it('should return 0 when argument is null', function () {
        expect(myLib.countOfChars(null)).toBe(0);
    });
    it('should return 0 when argument is empty string', function () {
        expect(myLib.countOfChars('')).toBe(0);
    });
    it('should return the length of argument string', function () {
        expect(myLib.countOfChars('abc')).toBe(3);
    });
    it('should return the length of the string which converted to string from argument object', function () {
        expect(myLib.countOfChars(1234)).toBe(4);
    });
});
//# sourceMappingURL=charCounterSpec.js.map