module myLib {
    export function countOfChars(s: string) {
        s = s || '';
        return s.length;
    }
}

if (typeof (exports) != 'undefined') exports.myLib = myLib;