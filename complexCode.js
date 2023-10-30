Filename: complexCode.js

/*
This code is a simulation of a bank account management system.
It allows users to create, manage, and perform operations on their bank accounts.
The code is written in JavaScript and follows object-oriented programming principles.
*/

class BankAccount {
  constructor(accountNumber, accountHolder) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      console.error("Invalid deposit amount.");
      return;
    }

    this.balance += amount;
    this.transactions.push({ type: "deposit", amount });
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      console.error("Invalid withdraw amount.");
      return;
    }

    this.balance -= amount;
    this.transactions.push({ type: "withdraw", amount });
  }

  getTransactions() {
    return this.transactions;
  }

  getBalance() {
    return this.balance;
  }

  getAccountInfo() {
    return `Account Number: ${this.accountNumber}\nAccount Holder: ${this.accountHolder}\nBalance: ${this.balance}`;
  }
}

// Creating instances of BankAccount
const account1 = new BankAccount("123456789", "John Doe");
const account2 = new BankAccount("987654321", "Jane Smith");

console.log("Initial Account 1 Info:");
console.log(account1.getAccountInfo());

console.log("\nInitial Account 2 Info:");
console.log(account2.getAccountInfo());

account1.deposit(500);
account1.withdraw(200);

account2.deposit(1000);
account2.withdraw(500);

console.log("\nFinal Account 1 Info:");
console.log(account1.getAccountInfo());

console.log("\nFinal Account 2 Info:");
console.log(account2.getAccountInfo());

console.log("\nAccount 1 Transactions:");
console.log(account1.getTransactions());

console.log("\nAccount 2 Transactions:");
console.log(account2.getTransactions());