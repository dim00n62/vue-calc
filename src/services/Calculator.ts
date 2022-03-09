declare type ButtonType = 'number'|'operand'|'result'|'reset';
declare type Operand = 'plusMinus'|'divide'|'multiply'|'minus'|'plus';
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
            const newValue = this.currentOperand && this.arguments.length===1
                ? value
                : this.displayValue+value;
            this.updateDisplayValue(newValue);
            this.updateArguments(this.toNumber(this.displayValue));
        } else if (type==='reset')
            this.reset();
        else if (type==='operand') {
            this.currentHandler = this.getHandler(id as Operand);
            this.currentOperand = id as Operand;
            this.process();
        } else if (type==='result') {
            this.process();
        }
    }
    private reset(): void {
        this.displayValue = '0';
        this.arguments = [];
        this.currentOperand = null;
        this.currentHandler = null;
    }
    private process(): void {
        if (!this.isReadyToProcess)
            return;
        const handler = this.currentHandler as Handler;
        const result = handler(this.arguments[0], this.arguments[1]);
        this.displayValue = this.toString(result);
        this.arguments = [result];
    }
    private updateArguments(value: number) {
        if (!this.arguments.length || !this.currentOperand)
            return this.arguments = [value];
        else if (this.arguments.length > 0)
            return this.arguments[1] = value;
    }
    private updateDisplayValue(value: string) {
        this.displayValue = this.normalizeValue(value);
    }
    private normalizeValue(value: string): string {
        let newValue = value.replace(/0(\d.*$)/, '$1');
        newValue = newValue.replace(/^(\d+(,\d*)?).*/, '$1');
        return newValue;
    }
    private toNumber(value: string): number {
        return Number(value.replace(/,/, '.'));
    }
    private toString(value: number): string {
        return String(value).replace(/\./, ',');
    }
    private getKeyType(id: string): ButtonType {
        console.log(id)
        if (['plusMinus', 'percent', 'divide', 'multiply', 'minus', 'plus'].includes(id))
            return 'operand';
        else if (['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero', 'comma'].includes(id))
            return 'number';
        else if (['ac'].includes(id))
            return 'reset';
        return 'result';
    }
    private getHandler(id: Operand): Handler {
        return {
            plusMinus: (a: number)=>-a,
            divide: (a: number, b: number)=>a / b,
            multiply: (a: number, b: number)=>a * b,
            minus: (a: number, b: number)=>a - b,
            plus: (a: number, b: number)=>a + b
        }[id];
    }
    private get isReadyToProcess(): boolean {
        return this.arguments.length === 1 && this.currentOperand === 'plusMinus'
            || this.arguments.length === 2;
    }
}
