export class User {
    email: string;
    password: string;
    biller: string;
    autopay: boolean
    accNo: number;

    constructor(email: string, password: string, biller: string, autopay: boolean, accNo: number) {
        this.email = email;
        this.password = password;
        this.biller = biller;
        this.autopay = autopay;
        this.accNo = accNo;
    }

}
