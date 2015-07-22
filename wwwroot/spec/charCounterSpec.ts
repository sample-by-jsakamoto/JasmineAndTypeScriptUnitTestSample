var myLibModule: { myLib: typeof myLib } = require('../Scripts/myLib.charCounter');

describe('charCounter', () => {
    var myLib = myLibModule.myLib;

    it('should return 0 when argument is null', () => {
        expect(myLib.countOfChars(null)).toBe(0);
    });

    it('should return 0 when argument is empty string', () => {
        expect(myLib.countOfChars('')).toBe(0);
    });

    it('should return the length of argument string', () => {
        expect(myLib.countOfChars('abc')).toBe(3);
    });

    it('should return the length of the string which converted to string from argument object', () => {
        expect(myLib.countOfChars(<any>1234)).toBe(4);
    });
});