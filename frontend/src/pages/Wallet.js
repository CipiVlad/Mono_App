import React from "react";
import "../Wallet.scss";
import Add from "../img/Add.png";
import Pay from "../img/Pay.png";
import Send from "../img/Send.png";
import ArrowLeft from "../img/ArrowLeft.png";
import Nav from "../components/Nav";

const Wallet = ({ allFinObj, setAllFinObj }) => {
  return (
    <>
      <div className="wallet">
        <div className="topBlueContainer">
          <a href="#">
            <img src={ArrowLeft} alt="arrow left" />
          </a>
          <h4>Wallet</h4>
        </div>
        <div className="whiteContainer">
          <section>
            <p>Total Balance</p>
            <h2>
              ${" "}
              {allFinObj &&
                allFinObj.map((ele, index) => <p key={index}>{ele.amount}</p>)}
            </h2>
          </section>
          <div className="addPaySendGroup">
            <div className="addGroup">
              <img src={Add} alt="add" />
              <figcaption>Add</figcaption>
            </div>
            <div className="payGroup">
              <img src={Pay} alt="pay" />
              <figcaption>Pay</figcaption>
            </div>
            <div className="sendGroup">
              <img src={Send} alt="send" />
              <figcaption>Send</figcaption>
            </div>
          </div>
          <div className="transactionsHistory">
            <h6>Transactions History</h6>
            {allFinObj &&
              allFinObj.map((ele, index) => (
                <div key={index} className="transactionsDetails">
                  <h4>{ele.name}</h4>
                  <p>{ele.date}</p>
                  <p>{ele.amount}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Nav />
    </>
  );
};

export default Wallet;
