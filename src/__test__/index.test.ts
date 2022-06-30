import {  displayHello, twoNumSum  } from '../index'

describe('Utils', () =>  {
    describe('displayHello', () => {
        it('should return hello along with the name passed', () => {
            expect(displayHello('foo')).toBe('HELLO: foo')
        })
    })

    describe('twoNumSum', () => {
        it('should sum two numbers', () => {
            expect(twoNumSum(2, 2)).toBe(4)
            expect(twoNumSum(2, 1)).not.toBe(4)
        })

        it('should not support negative number', () => {

            function ExceptionCase() {
                twoNumSum(-1, 2)
            }

            expect(ExceptionCase).toThrow(new Error('Sorry we do not support negative numbers'))
        })
    })

})