const express = require("express");
const { showAllTransactions } = require("../use-cases/show-all-transactions");
const { createNewTransaction } = require("../use-cases/add-transaction");
const { removeTransaction } = require("../use-cases/delete-transaction");
const { updateTransaction } = require("../use-cases/edit-transactions");
const {
  showDetailTransaction,
} = require("../use-cases/show-detail-transactions");
const { makeDoAuthMiddleware } = require("../auth/doAuthMiddleware");
const doAuthMiddleware = makeDoAuthMiddleware("access");
const transactionsRouter = express.Router();

transactionsRouter.get("/all", doAuthMiddleware, (req, res) => {
  const userId = req.userClaims.sub;
  showAllTransactions({ userId })
    .then((transactions) => {
      return res.json(transactions);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ error: "Failed to load transactions from database" });
    });
});

transactionsRouter.post("/add", doAuthMiddleware, (req, res) => {
  if (!req.body) {
    res.status(200).json({ error: "Please include a new Income" });
    return;
  }

  //   userId: req.userClaims.sub später
  const userId = req.userClaims.sub;
  console.log("userId", userId);

  createNewTransaction({ userId, ...req.body })
    .then((addedIncome) => res.status(201).json(addedIncome))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to add new income to database." });
    });
});
transactionsRouter.get("/details/:id", doAuthMiddleware, (req, res) => {
  const transactionId = req.params.id;
  console.log(transactionId);

  showDetailTransaction({ transactionId })
    .then((details) => res.json(details))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to show detailed transaction" });
    });
});

transactionsRouter.delete("/delete/:id", doAuthMiddleware, (req, res) => {
  const transactionId = req.params.id;
  removeTransaction({ transactionId })
    .then((removeTransaction) => res.json({ removeTransaction }))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ error: "Failed to remove transaction from database." });
    });
});

transactionsRouter.put("/edit/:id", doAuthMiddleware, async (req, res) => {
  // const transactionId = req.params.id;
  // const newTransactionValue = {
  //   transactionId,
  //   " name": req.body.name,
  //   " amount": req.body.amount,
  //   income: req.body.income === "false" ? false : true,
  //   createdAt: new Date(req.body.createdAt).getTime(),
  // };

  // updateTransaction({ transactionId, transactionObject: newTransactionValue })
  //   .then((updateTransaction) => res.json(updateTransaction))
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).json({ error: "Failed to update transaction" });
  //   });

  try {
    const transactionId = req.params.id;
    const transactioUpdateInfo = {
      transactionId,
      name: req.body.name,
      amount: Number(req.body.amount),
      income: req.body.income,
      createdAt: new Date(req.body.createdAt).getTime(),
    };

    const updatedTransaction = await updateTransaction(transactioUpdateInfo);
    console.log(updatedTransaction);
    res.json(updatedTransaction);
  } catch (error) {
    console.log(error);
    res.status(500).json("Unknown error while editing a Transaction.");
  }
});

module.exports = {
  transactionsRouter,
};
