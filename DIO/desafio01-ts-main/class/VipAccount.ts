import { DioAccount } from "./DioAccount";

export class VipAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }
  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.setBalance(value + 10);
    }
  };
}
