import React from 'react'
import { Link } from 'react-router-dom'

const Wallet = ({ allFinObj, setAllFinObj }) => {


  return (
    <div className="wallet">
      <section>
        <h4>Total Balance</h4>
        <h2>{allFinObj && allFinObj.map((ele, index) =>
          <p key={index}>{ele.amount}</p>
        )}</h2>
      </section>
      <h6>Transactions History</h6>
      <div className="transactionsHistory">
        {allFinObj && allFinObj.map((ele, index) =>
          <div key={index}>
            <Link to={`/${ele._id}`}>
              <h4>{ele.name}</h4>
              <p>{ele.date}</p>
              <p>{ele.amount}</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Wallet