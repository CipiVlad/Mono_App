import React from "react";
import { Link } from "react-router-dom";
import arrowUp from "../img/ArrowUp.png";
import threeDots from "../img/threeDots.png";
import ArrowUpIcon from "../components/Icons/ArrowUpIcon";
import ArrowDownIcon from "../components/Icons/ArrowDownIcon";
import Nav from "../components/Nav";

const Home = ({ walletInfo }) => {
  console.log(walletInfo);

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
  const totalBalance = income - expenses;

  return (
    <>
      <div className="home">
        <h4 className="home_headline">Home</h4>
        <section>
          <div className="headline">
            <h4>Total Balance </h4>
            <img src={arrowUp} alt="arrow up" />
            <img src={threeDots} alt="three dots" />
          </div>
          <div className="topBlueContainerContent">
            <h2>$ {walletInfo && totalBalance.toFixed(2)}</h2>
            <div className="income_expenses_container">
              <div className="income">
                <h4>
                  <span>
                    <ArrowUpIcon />
                  </span>
                  Income
                </h4>
                <p>$ {income.toFixed(2)}</p>
              </div>
              <div className="expenses">
                <h4>
                  <span>
                    <ArrowDownIcon />
                  </span>
                  Expenses
                </h4>

                <p>$ {expenses.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </section>
        <div className="transactionsHistory">
          <div className="transaction_header">
            <h6>Transactions History</h6>
            <Link to="/wallet">
              <h3>See all</h3>
            </Link>
          </div>

          <div>
            {walletInfo &&
              Array.isArray(walletInfo.transactions) &&
              walletInfo.transactions.map((ele, index) => (
                <Link to={`/detail/${ele._id}`}>
                  <div className="transaction_item" key={index}>
                    <div className="transaction_headline">
                      <div className="transaction_icon">
                        <h3>{ele.name}</h3>
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
                </Link>
              ))}
          </div>
        </div>
      </div>
      <Nav />
    </>
  );
};

export default Home;
