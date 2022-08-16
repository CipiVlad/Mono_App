import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'



const TransactionsDetails = () => {

  const { id } = useParams()
  const [detailTransaction, setDetailTransaction] = useState([])


  useEffect(() => {
    fetch(`http://localhost:9000/transactions/${id}`)
      .then(res => res.json())
      .then(detailObj => setDetailTransaction([detailObj])) // obj erwartet, daher [ ]
      .catch(err => console.log(err))
  }, [id])

  console.log(detailTransaction)

  return (
    <div>
      <div>
        <img src="" alt="" />
        <p>Income</p>
        <h3>$ {detailTransaction[0].income ? "Income" : "Expense"}</h3>
      </div>
      <h5>Transaction details <span><img src="" alt="" /></span> </h5>

      <p>Status <span>{detailTransaction.income ? "Income" : "Expense"}</span> </p>
      <p>From <span>{detailTransaction.name}</span> </p>
      {/* <p>Time <span>{detailTransaction.time}</span> </p>  wie soll hier Am/PM dargestellt werden ? */}
      <p>Date <span>{detailTransaction.date}</span> </p>

      <p>{detailTransaction.income ? "Earnings" : "Spending"} <span>$ {detailTransaction.amount}</span> </p>

      <p>Total <span>$ {detailTransaction.amount}</span> </p>
    </div>
  )
}

export default TransactionsDetails