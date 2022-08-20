const { TransactionsDAO } = require("../db-access");

function updateTransaction({ transactionId, newValue }) {
  return TransactionsDAO.editTransaction(transactionId, newValue);
}

module.exports = {
  updateTransaction,
};
