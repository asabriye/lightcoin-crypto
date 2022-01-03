class Account {

  constructor(username) {
    this.username = username;
    this.balance = 0;
  }

}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount
  }

}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('billybob');

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();
console.log('Transaction 1:', t1);
console.log('Balance:', myAccount.balance);

t2 = new Withdrawal(9.99);
t2.commit();
console.log('Transaction 2:', t2);
console.log('Balance:', myAccount.balance);

console.log('Ending Balance:', myAccount.balance);
