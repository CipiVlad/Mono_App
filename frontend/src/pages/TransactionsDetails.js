import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import left from '../img/chevron-left.png';
import dots from '../img/threeDots.png';
import up from '../img/chevron-up.png';
import '../TransactionDetails.scss';
import Icon from '../img/icon.png';

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
    <div className="transactionDetails">
      <div className="topBlueContainer">
        <img src={left} alt="left" />
        <h4>Transaction Details</h4>
        <img src={dots} alt="threeDots" />
      </div>
      <div className="whiteContainer">
        <img src={Icon} alt="icon" className="icon" />
        <p className="incomeOrExpense"> {detailTransaction.income ? "Income" : "Expense"}</p>
        <h2>$</h2>
        <div className="transactionDetailsContainer">
          <div className="headlineGroup">
            <h5>Transaction details  </h5>
            <img src={up} alt="up" />
          </div>
          <div className="status">
            <p>Status <span>{detailTransaction.income ? "Income" : "Expense"}</span> </p>
            <p>From <span>{detailTransaction.name}</span> </p>
            <p>Time <span>{detailTransaction.time}</span> </p>
            <p>Date <span>{detailTransaction.date}</span> </p>
          </div>
          <p className="spending">{detailTransaction.income ? "Earnings" : "Spending"} <span>$ {detailTransaction.amount}</span> </p>
          <p className="total">Total <span>$ {detailTransaction.amount}</span> </p>
          <button>Edit</button>
        </div>
      </div>
    </div>
  )
}

export default TransactionsDetails

