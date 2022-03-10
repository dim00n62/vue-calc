declare type ButtonType = 'number'|'operand'|'result'|'reset'|'plusMinus';
declare type Operand = 'divide'|'multiply'|'minus'|'plus';
declare type Handler = (a: number, b: number)=>number;

export default class Calculator {
    public displayValue: string;
    private arguments: number[];
    private currentOperand: Operand|null;
    private currentHandler: Handler|null;
    constructor() {
        this.displayValue = '0';
        this.arguments = [];
        this.currentOperand = null;
        this.currentHandler = null;
    }
    public handleKeydown(value: string, id: string|Operand): void {
        const type = this.getKeyType(id);
        if (type==='number') {
            this.updateDisplayValue(value);
            this.updateArguments(this.toNumber(this.displayValue));
        } else if (type==='reset')
            this.reset();
        else if (type==='plusMinus')
            this.processPlusMinus();
        else if (type==='operand') {
            this.process();
            this.currentOperand = id as Operand;
            this.currentHandler = this.getHandler(id as Operand);
        } else if (type==='result')
            this.process();
    }
    private reset(): void {
        this.updateDisplayValue('0', true);
        if (this.arguments.length === 2)
            this.arguments = [this.arguments[0]];
        else {
            this.arguments = [];
            this.currentOperand = null;
            this.currentHandler = null;
        }
    }
    private process(): void {
        if (!this.isReadyToProcess)
            return;
        const handler = this.currentHandler as Handler;
        const result = handler(this.arguments[0], this.arguments[1]);
        this.updateDisplayValue(this.toString(result), true);
        this.arguments = [result];
    }
    private processPlusMinus(): void {
        if (this.arguments.length === 1)
            this.arguments = [-this.arguments[0]];
        else if (this.arguments.length === 2)
            this.arguments[1] = -this.arguments[1];
        this.updateDisplayValue(this.toString(-this.toNumber(this.displayValue)), true);
    }
    private updateArguments(value: number) {
        if (isNaN(value))
            return;
        if (!this.arguments.length || !this.currentOperand)
            return this.arguments = [value];
        else if (this.arguments.length > 0)
            return this.arguments[1] = value;
    }
    private updateDisplayValue(update: string, replace?: boolean) {
        const newValue = (this.currentOperand && this.arguments.length===1 || replace)
            ? update
            : this.displayValue + update;
        this.displayValue = this.normalizeValue(newValue);
    }
    private normalizeValue(value: string): string {
        let newValue = value.replace(/^0(\d.*$)/, '$1');
        newValue = newValue.replace(/^(\d+(,\d*)?(e[+|-]\d+)?).*/, '$1');
        newValue = newValue.replace(/^,/, '0,');
        newValue = newValue.replace(/Infinity/, 'Error');
        return newValue;
    }
    private toNumber(value: string): number {
        return Number(value.replace(/,/, '.'));
    }
    private toString(value: number): string {
        return String(value).replace(/\./, ',');
    }
    private getKeyType(id: string): ButtonType {
        if (['percent', 'divide', 'multiply', 'minus', 'plus'].includes(id))
            return 'operand';
        else if (['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero', 'comma'].includes(id))
            return 'number';
        else if (['ac'].includes(id))
            return 'reset';
        else if (['plusMinus'].includes(id))
            return 'plusMinus';
        return 'result';
    }
    private getHandler(id: Operand): Handler {
        return {
            divide: (a: number, b: number)=>a / b,
            multiply: (a: number, b: number)=>a * b,
            minus: (a: number, b: number)=>a - b,
            plus: (a: number, b: number)=>a + b
        }[id];
    }
    private get isReadyToProcess(): boolean {
        return this.arguments.length === 2;
    }
}
