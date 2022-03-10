import Calculator from './calculator.ts';

describe('Calculator', ()=>{
    let calc;
    beforeEach(()=>{
        calc = new Calculator();
    });
    it('input number key change displayValue', ()=>{
        calc.handleKeydown('5', 'five');
        expect(calc.displayValue).toBe('5');
        calc.handleKeydown('1', 'one');
        expect(calc.displayValue).toBe('51');
    });
    it('operand should not influence on displayValue if no prevResult', ()=>{
        calc.handleKeydown('5', 'five');
        expect(calc.displayValue).toBe('5');
        calc.handleKeydown('+', 'plus');
        expect(calc.displayValue).toBe('5');
    });
    it('plus-minus operand', ()=>{
        calc.handleKeydown('5', 'five');
        expect(calc.displayValue).toBe('5');
        calc.handleKeydown('±', 'plusMinus');
        expect(calc.displayValue).toBe('-5');
        calc.handleKeydown('±', 'plusMinus');
        expect(calc.displayValue).toBe('5');
    });
    it('sum', ()=>{
        calc.handleKeydown('1', 'one');
        expect(calc.displayValue).toBe('1');
        calc.handleKeydown('+', 'plus');
        expect(calc.displayValue).toBe('1');
        calc.handleKeydown('2', 'two');
        expect(calc.displayValue).toBe('2');
        expect(calc.arguments).toEqual([1, 2]);
        calc.handleKeydown('=', 'result');
        expect(calc.displayValue).toBe('3');
        expect(calc.arguments).toEqual([3]);
    });
    it('minus', ()=>{
        calc.handleKeydown('1', 'one');
        expect(calc.displayValue).toBe('1');
        calc.handleKeydown('-', 'minus');
        expect(calc.displayValue).toBe('1');
        calc.handleKeydown('2', 'two');
        expect(calc.displayValue).toBe('2');
        expect(calc.arguments).toEqual([1, 2]);
        calc.handleKeydown('=', 'result');
        expect(calc.displayValue).toBe('-1');
        expect(calc.arguments).toEqual([-1]);
    });
    it('multiply', ()=>{
        calc.handleKeydown('2', 'two');
        calc.handleKeydown('*', 'multiply');
        calc.handleKeydown('2', 'two');
        expect(calc.arguments).toEqual([2, 2]);
        calc.handleKeydown('=', 'result');
        expect(calc.displayValue).toBe('4');
        expect(calc.arguments).toEqual([4]);
    });
    it('divide', ()=>{
        calc.handleKeydown('2', 'two');
        calc.handleKeydown('0', 'zero');
        calc.handleKeydown('÷', 'divide');
        calc.handleKeydown('2', 'two');
        expect(calc.arguments).toEqual([20, 2]);
        calc.handleKeydown('=', 'result');
        expect(calc.displayValue).toBe('10');
        expect(calc.arguments).toEqual([10]);
    });
    it('divide with plusMinus', ()=>{
        calc.handleKeydown('2', 'two');
        calc.handleKeydown('÷', 'divide');
        calc.handleKeydown('2', 'two');
        calc.handleKeydown('±', 'plusMinus');
        expect(calc.arguments).toEqual([2, -2]);
        calc.handleKeydown('=', 'result');
        expect(calc.displayValue).toBe('-1');
        expect(calc.arguments).toEqual([-1]);
    });
    it('sequential operations', ()=>{
        calc.handleKeydown('2', 'two');
        calc.handleKeydown('*', 'multiply');
        calc.handleKeydown('3', 'three');
        calc.handleKeydown('+', 'plus');
        calc.handleKeydown('4', 'four');
        expect(calc.arguments).toEqual([6, 4]);
        calc.handleKeydown('=', 'result');
        expect(calc.displayValue).toBe('10');
        expect(calc.arguments).toEqual([10]);
    });
    it('sequential operations with plusMinus', ()=>{
        calc.handleKeydown('2', 'two');
        calc.handleKeydown('+', 'plus');
        calc.handleKeydown('3', 'three');
        calc.handleKeydown('±', 'plusMinus');
        expect(calc.displayValue).toBe('-3');
        expect(calc.arguments).toEqual([2, -3]);
        calc.handleKeydown('+', 'plus');
        calc.handleKeydown('4', 'four');
        expect(calc.arguments).toEqual([-1, 4]);
        calc.handleKeydown('=', 'result');
        expect(calc.displayValue).toBe('3');
        expect(calc.arguments).toEqual([3]);
    });
});
