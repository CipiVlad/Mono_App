import React from "react";
import { Link } from "react-router-dom";
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

  return (
    <div className="Home">
      <section className="HomeBox">
        <h4>Total Balance ^</h4>
        <div>
          <h2>$ {walletInfo && walletInfo.totalBalance.toFixed(2)}</h2>

          <div>
            <p>Income</p>
            <h4>$ {income.toFixed(2)}</h4>
            <p>Expenses</p>
            <h4>$ {expenses.toFixed(2)}</h4>
          </div>
        </div>
      </section>
      <div className="transactionsHistory">
        <h6>Transactions History</h6>
        <div>
          {walletInfo &&
            Array.isArray(walletInfo.transactions) &&
            walletInfo.transactions.map((ele, index) => (
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                key={index}
              >
                <div>
                  <h4>{ele.name}</h4>
                  {/* <p>
                    {new Date(ele.createdAt).toLocaleDateString("de-DE", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </p> */}
                  {/* moment js */}
                  <p>{new Date(ele.createdAt).toUTCString()}</p>
                </div>

                <p style={ele.income ? { color: "green" } : { color: "red" }}>
                  {ele.income ? `+ $${ele.amount}` : `- $${ele.amount}`}
                </p>
              </div>
            ))}
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Home;
