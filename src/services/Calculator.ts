declare type ButtonType = 'number'|'operand'|'result'|'reset';

export default class Calculator {
    public displayValue: string;
    private prevResult: number|null;
    constructor() {
        this.displayValue = '0';
        this.prevResult = null;
    }
    reset(): void{
        this.displayValue = '0';
        this.prevResult = null;
    }
    handleButton(value: string, id: string): void {
        const type = this.getButtonType(id);
        if (type==='number')
            this.updateDisplayValue(this.displayValue+value);
        if (type==='reset')
            this.reset();
    }
    updateDisplayValue(value: string) {
        this.displayValue = value;
    }
    toNumber(value: string): number {
        return Number(value.replace(/,/, '.'));
    }
    getButtonType(id: string): ButtonType {
        if (['plusMinus', 'percent', 'divide', 'multiply', 'minus', 'plus', ].includes(id))
            return 'operand';
        else if (['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero', 'comma'].includes(id))
            return 'number';
        else if (['ac'].includes(id))
            return 'reset';
        return 'result';
    }
}