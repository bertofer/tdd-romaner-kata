import {expect} from 'chai'
import romaner from '../src/Romaner'

describe('romaner', () => {
    let tests = [
        {arg: 1, expected: 'I'},
        {arg: 2, expected: 'II'},
        {arg: 3, expected: 'III'},
        {arg: 5, expected: 'V'},
        {arg: 4, expected: 'IV'},
        {arg: 6, expected: 'VI'},
        {arg: 10, expected: 'X'},
        {arg: 9, expected: 'IX'},
        {arg: 11, expected: 'XI'},
        {arg: 15, expected: 'XV'},
        {arg: 18, expected: 'XVIII'},
        {arg: 20, expected: 'XX'},
        {arg: 30, expected: 'XXX'},
        {arg: 40, expected: 'XL'},
        {arg: 45, expected: 'XLV'},
        {arg: 48, expected: 'XLVIII'},
        {arg: 50, expected: 'L'},
        {arg: 51, expected: 'LI'},
        {arg: 87, expected: 'LXXXVII'},
        {arg: 100, expected: 'C'},
        {arg: 543, expected: 'DXLIII'},
        {arg: 2016, expected: 'MMXVI'}
    ]
    tests.forEach(test => {
        it('should return the Roman Numeral for ' + test.arg, () => {
            expect(romaner(test.arg)).to.equal(test.expected)
        })
    })
})