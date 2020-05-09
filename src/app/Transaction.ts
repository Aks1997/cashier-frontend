export class Transaction{

    date: Date;
    description: string;
    type: string;
    amount: number;
    balance: number;

    constructor(date: Date, description: string, type: string, amount: number, balance: number){
        this.date=date;
        this.description=description;
        this.type=type;
        this.amount=amount;
        this.balance=balance;
    }
}