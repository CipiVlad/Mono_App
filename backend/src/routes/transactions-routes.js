const express = require('express')
const {showAllTransactions} = require('../use-cases/show-all-transactions')
const transactionsRouter = express.Router()

const multer = require('multer')
transactionsRouter.get("/all", (_,res)=>{
    showAllTransactions()
    .then(transactions => res.json(transactions))
    .catch(err =>{
        console.log(err)
        res.status(500).json({error:"Failed to load transactions from database"});
    })
})