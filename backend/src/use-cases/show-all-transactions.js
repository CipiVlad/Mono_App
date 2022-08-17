const { TransactionsDAO } = require("../db-access");

async function showAllTransactions() {
  const transactions = await TransactionsDAO.findAllTransactionsOfUser();
  return transactions.map((trans) => ({
    _id: trans._id,
    name: trans.name,
    income: trans.income,
    amount: trans.amount,
    createdAt: trans.createdAt,
    img: trans.img,
    userId: trans.userId,
  }));
}

module.exports = {
  showAllTransactions,
};
