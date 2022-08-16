const express = require('express')
const {showAllTransactions} = require('../use-cases/show-all-transactions')
const {createNewIncome} = require('../use-cases/addIncome')
const {removeTransaction} = require('../use-cases/delete-transaction')
const {showDetailTransaction} = require('../use-cases/show-detail-transactions')
const transactionsRouter = express.Router()

transactionsRouter.get("/all", (_,res)=>{
    showAllTransactions()
    .then(transactions => {
        return res.json(transactions)
    })
    .catch(err =>{
        console.log(err)
        res.status(500).json({error:"Failed to load transactions from database"});
    })
})

transactionsRouter.post("/add", (req,res)=>{

    if (!req.body){
        res.status(200).json({error: "Please include a new Income"})
        return;
    }

    const newIncomeObject ={
        name: req.body.name,
        income: req.body.income,
        amount: req.body.amount,
        date: req.body.date,
        time: Date.now(),
        icon: req.body.icon,
        userId: req.body.userId
    }

    createNewIncome(newIncomeObject)
    .then(addedIncome =>res.status(201).json(addedIncome))
    .catch(err =>{
        console.log(err)
        res.status(500).json({error: "Failed to add new income to database."})
    })
})


transactionsRouter.get('/details/:id', (req, res) =>{
    const transactionId = req.params.id;
    console.log(transactionId)

    showDetailTransaction({transactionId})
    .then((details) =>res.json(details))
    .catch(err =>{
        console.log(err)
        res.status(500).json({error: "Failed to show detailed transaction"})
    })
})

transactionsRouter.delete("/delete/:id", (req, res) =>{
    const transactionId = req.params.id;
    removeTransaction({ transactionId})
    .then(removeTransaction =>res.json({removeTransaction}))
    .catch(err =>{
        console.log(err)
        res.status(500).json({error: "Failed to remove transaction from database."})
    })
})




module.exports = {
    transactionsRouter
}