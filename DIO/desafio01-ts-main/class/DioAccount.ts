export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }
  getName = (): string => {
    return this.name;
  };

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      console.log("Voce depositou");
      this.setBalance(value);
    }
  };

  withdraw = (value: number): void => {
    if (this.getBalance() > value && this.status) {
      console.log("Voce sacou");
      this.setBalance(this.getBalance() - value);
    } else {
      console.log("Saldo Insuficiente");
    }
  };
  protected setBalance = (value: number): void => {
    this.balance = value;
  };
  getBalance = (): number => {
    console.log(this.balance);
    return this.balance;
  };

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
