/*
    link : https://github.com/rocketseat-education/bootcamp-launchbase-desafios-01/blob/master/desafios/01-4-aplicacao-operacoes-bancarias.md
*/

const type = "credit" || "debit ";

const user = {
  name: "Mariana",
  transactions: [],
  balance: 0,
};

function createTransaction({ type, value }) {
  const transaction = { type, value };
  if (type === "credit") {
    user.transactions.push(transaction);
    user.balance += value;
  } else if (type === "debit") {
    user.transactions.push(transaction);
    user.balance -= value;
  }
}

function getHigherTransactionByType(type) {
  let highValue = 0;

  for (transaction of user.transactions) {
    if (transaction.type === type) {
      if (highValue <= transaction.value) {
        highValue = transaction.value;
      }
    }
  }

  return { type: type, value: highValue };
}

function getAverageTransactionValue() {
  let sum = 0;

  for (transaction of user.transactions) {
    sum += transaction.value;
  }

  const average = sum / user.transactions.length;

  return average;
}

function getTransactionsCount() {
    let credit = 0;
    let debit = 0;

    for (transaction of user.transactions) {
        if(transaction.type === 'credit') {
            credit++;
        } else {
            debit++;
        }
    }

    return { credit, debit}
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance);

console.log(getHigherTransactionByType("credit"));
console.log(getHigherTransactionByType("debit"));

console.log(getAverageTransactionValue());

console.log(getTransactionsCount());
