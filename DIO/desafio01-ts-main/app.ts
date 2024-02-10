import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { VipAccount } from "./class/VipAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Allan", 10);
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 2);
const vipAccount: VipAccount = new VipAccount("João", 3);

peopleAccount.deposit(10);
companyAccount.deposit(12.5);
vipAccount.deposit(15);

peopleAccount.getBalance();
peopleAccount.getName();
peopleAccount.withdraw(5);
peopleAccount.getBalance();

companyAccount.getBalance();
companyAccount.getName();
companyAccount.withdraw(5);
companyAccount.getBalance();

vipAccount.getBalance();
vipAccount.getName();
vipAccount.withdraw(5);
vipAccount.getBalance();
