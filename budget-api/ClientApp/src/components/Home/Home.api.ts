import moment, { Moment } from "moment";

export class Transaction {
    transactionId: number;
    userId: number;
    description: string;
    amount: number;
    acountType: AccountType;
    transactionDate: Moment;

    constructor(data: any) {
        this.transactionId = data.transactionId;
        this.userId = data.userId;
        this.description = data.description;
        this.amount = data.amount;
        this.acountType = data.accountType;
        this.transactionDate = moment(data.transactionDate);
    }
}

export enum AccountType {
    Checking = 1,
    Savings = 2,
}