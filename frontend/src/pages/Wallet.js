import React from "react";
import "../scss/Wallet.scss";
import Add from "../img/Add.png";
import Pay from "../img/Pay.png";
import Send from "../img/Send.png";
import ArrowLeft from "../img/ArrowLeft.png";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

const Wallet = ({ walletInfo }) => {
  const income =
    walletInfo && Array.isArray(walletInfo.transactions)
      ? walletInfo.transactions
          .filter((t) => t.income === true)
          .map((t) => t.amount)
          .reduce((sum, amount) => sum + amount, 0)
      : 0;

  console.log(income);
  const expenses =
    walletInfo && Array.isArray(walletInfo.transactions)
      ? walletInfo.transactions
          .filter((f) => f.income === false)
          .map((f) => f.amount)
          .reduce((sum, amount) => sum + amount, 0)
      : 0;

  console.log(expenses);
  const totalBalance = (income - expenses).toFixed(2);
  return (
    <>
      <div className="wallet">
        <div className="topBlueContainer">
          <Link to={"/add"}>
            {" "}
            <img src={ArrowLeft} alt="arrow left" />
          </Link>

          <h4>Wallet</h4>
        </div>
        <div className="whiteContainer">
          <section>
            <p>Total Balance</p>
            <h2>${walletInfo && totalBalance}</h2>
          </section>
          <div className="addPaySendGroup">
            <div className="addGroup">
              <Link to="/add">
                <img src={Add} alt="add" />
                <figcaption>Add</figcaption>
              </Link>
            </div>
            <div className="payGroup">
              <img src={Pay} alt="pay" />
              <figcaption>Pay</figcaption>
            </div>
            <div className="sendGroup">
              <a
                href="https://www.paypal.com/de/home"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Send} alt="send" />
                <figcaption>Send</figcaption>
              </a>
            </div>
          </div>
          <div className="transactionsHistory">
            <h6>Transactions History</h6>
            <div>
              {walletInfo &&
                Array.isArray(walletInfo.transactions) &&
                walletInfo.transactions.map((ele, index) => (
                  <div className="transaction_item" key={index}>
                    <div className="transaction_headline">
                      <div className="transaction_icon">
                        <h3> {ele.name.charAt(0)}</h3>
                      </div>
                      <div className="transaction_name_date">
                        <h5>{ele.name}</h5>
                        <p>
                          {new Date(ele.createdAt).toLocaleDateString("de-DE", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })}
                        </p>
                        {/* moment js */}
                        {/* <p>
                        {new Date(ele.createdAt).toUTCString().slice(0, 17)}
                      </p> */}
                      </div>
                    </div>

                    <p
                      className="transaction_amount"
                      style={
                        ele.income ? { color: "#25A969" } : { color: "#F95B51" }
                      }
                    >
                      {ele.income ? `+ $${ele.amount}` : `- $${ele.amount}`}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </>
  );
};

export default Wallet;
