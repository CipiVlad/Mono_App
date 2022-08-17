import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import left from '../img/chevron-left.png'
import dots from '../img/threeDots.png'
import up from '../img/chevron-up.png'

const TransactionsDetails = () => {

  const { id } = useParams()
  const [detailTransaction, setDetailTransaction] = useState([])


  useEffect(() => {
    fetch(`http://localhost:9000/transactions/details/${id}`)
      .then(res => res.json())
      .then(detailObj => setDetailTransaction(detailObj))
      .catch(err => console.log(err))
  }, [id])

  console.log(detailTransaction)





  if (detailTransaction === undefined) {
    return (
      <div><p>Loading...</p></div>
    )
  }
  return (
    <div>
      <div>
        <img src={left} alt="left" />
        <p>Transaction Details</p>
        <img src={dots} alt="threeDots" />
      </div>
      <div>
        <img src="" alt="" />
        <h3> {detailTransaction.income ? "Income" : "Expense"}</h3>
      </div>
      <h5>Transaction details <span><img src={up} alt="up" /></span> </h5>

      <p>Status <span>{detailTransaction.income ? "Income" : "Expense"}</span> </p>
      <p>From <span>{detailTransaction.name}</span> </p>
      <p>Time <span>{detailTransaction.time}</span> </p>
      <p>Date <span>{detailTransaction.date}</span> </p>

      <p>{detailTransaction.income ? "Earnings" : "Spending"} <span>$ {detailTransaction.amount}</span> </p>

      <p>Total <span>$ {detailTransaction.amount}</span> </p>

      <button>Edit</button>
    </div>
  )
}

export default TransactionsDetails

