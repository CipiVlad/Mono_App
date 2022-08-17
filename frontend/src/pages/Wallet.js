import React from 'react';
import '../Wallet.scss';
import Add from '../img/Add.png';
import Pay from '../img/Pay.png';
import Send from '../img/Send.png';

const Wallet = ({ allFinObj, setAllFinObj }) => {

  return (
    <div className="wallet">
      <section>
        <h4>Total Balance</h4>
        <h2>{allFinObj && allFinObj.map((ele, index) =>
          <p key={index}>{ele.amount}</p>
        )}</h2>
      </section>
      <div className="addPaySend">
        <img src={Add} alt="add" />
        <img src={Pay} alt="pay" />
        <img src={Send} alt="send" />
      </div>
      <h6>Transactions History</h6>
      <div className="transactionsHistory">
        {allFinObj && allFinObj.map((ele, index) =>
          <div key={index} className="transactionsDetails">
            <h4>{ele.name}</h4>
            <p>{ele.date}</p>
            <p>{ele.amount}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Wallet