const Calculator = require('../calculator.js');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('add', () => {
        it('should return sum of positive numbers', () => {
            const a = 5;
            const b = 3;
            const c = 2;
            const result = calculator.add(a, b, c);
            expect(result).toBe(10);
        });

        it('should return sum of negative numbers', () => {
            const a = -5;
            const b = -3;
            const c = -2;
            const result = calculator.add(a, b, c);
            expect(result).toBe(-10);
        });

        it('should return correct sum for positive and negative numbers', () => {
            const a = 10;
            const b = -5;
            const result = calculator.add(a, b);
            expect(result).toBe(5);
        });

        it('should return 0 when no arguments are provided', () => {
            const result = calculator.add();
            expect(result).toBe(0);
        });

        test.each([
            [1, 2, 3],
            [5, 5, 10],
            [-1, 1, 0],
            [-5, -5, -10]
        ])(
            'adds %i + %i = %i',
            (a, b, expected) => {
                expect(calculator.add(a, b)).toBe(expected);
            }
        );
    });

    describe('spy example', () => {
        it('should track method calls using spy', () => {
            const spy = jest.spyOn(calculator, 'add');

            calculator.add(1, 2);
            calculator.add(5, 5);

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledTimes(2);
            expect(spy).toHaveBeenCalledWith(1, 2);

            spy.mockRestore();
        });
    });

    describe('multiply', () => {
        it('should multiply several numbers', () => {
            const a = 5;
            const b = 3;
            const c = 2;
            const result = calculator.multiply(a, b, c);
            expect(result).toBe(30);
        });

        it('should return 0 if one argument is 0', () => {
            const a = 5;
            const b = 0;
            const c = 10;
            const result = calculator.multiply(a, b, c);
            expect(result).toBe(0);
        });

        it('should multiply negative numbers correctly', () => {
            const a = -2;
            const b = 3;
            const result = calculator.multiply(a, b);
            expect(result).toBe(-6);
        });

        it('should return 1 when no arguments are provided', () => {
            const result = calculator.multiply();
            expect(result).toBe(1);
        });
    });

    describe('subtraction', () => {
        it('should subtract numbers correctly', () => {
            const a = 5;
            const b = 3;
            const result = calculator.subtraction(a, b);
            expect(result).toBe(2);
        });

        it('should return negative result', () => {
            const a = 3;
            const b = 5;
            const result = calculator.subtraction(a, b);
            expect(result).toBe(-2);
        });

        it('should subtract from zero correctly', () => {
            const a = 0;
            const b = 5;
            const result = calculator.subtraction(a, b);
            expect(result).toBe(-5);
        });
    });

    describe('divide', () => {
        it('should divide integers correctly', () => {
            const a = 6;
            const b = 3;
            const result = calculator.divide(a, b);
            expect(result).toBe(2);
        });

        it('should return fractional result', () => {
            const a = 5;
            const b = 2;
            const result = calculator.divide(a, b);
            expect(result).toBe(2.5);
        });

        it('should return Infinity when dividing by zero', () => {
            const a = 7;
            const b = 0;
            const result = calculator.divide(a, b);
            expect(result).toBe(Infinity);
        });
    });

    describe('exponentiation', () => {
        it('should square positive number', () => {
            const a = 5;
            const result = calculator.exponentiation(a);
            expect(result).toBe(25);
        });

        it('should square negative number', () => {
            const a = -5;
            const result = calculator.exponentiation(a);
            expect(result).toBe(25);
        });

        it('should return 0 when zero is squared', () => {
            const a = 0;
            const result = calculator.exponentiation(a);
            expect(result).toBe(0);
        });
    });
});