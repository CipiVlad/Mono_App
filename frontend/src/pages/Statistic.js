import BarChart from "../components/BarChart";
import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import MobileTopBarIcons from "../img/MobileTopBarIcons2.png";
import Vector from "../img/Vector.png";
import left from "../img/ArrowLeft.png";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TopMobileBar from "../components/TopMobileBar";

const Statistic = ({ walletInfo }) => {
  const reducer = (accumulator, curr) => accumulator + curr;
  const hours24 = 86400000;
  const arrIncomeDay1 =
    walletInfo &&
    walletInfo.transactions
      .filter(
        (t) =>
          t.createdAt > Date.now() - hours24 * 1 && t.createdAt < Date.now()
      )
      .filter((t) => t.income === true)
      .map((t) => t.amount);
  const incomeReducedDay1 = arrIncomeDay1.reduce(reducer);
  // Datensatz INCOME day/48HOURS //// von jetzt an 48h zurück
  const arrIncomeDay2 =
    walletInfo &&
    walletInfo.transactions
      .filter(
        (t) =>
          t.createdAt > Date.now() - hours24 * 2 &&
          t.createdAt < Date.now() - hours24
      )
      .filter((t) => t.income === true)
      .map((t) => t.amount);
  const incomeReducedDay2 = arrIncomeDay2.reduce(reducer);
  // Datensatz INCOME day/72HOURS //// von jetzt an 72h zurück
  const arrIncomeDay3 =
    walletInfo &&
    walletInfo.transactions
      .filter(
        (t) =>
          t.createdAt > Date.now() - hours24 * 3 &&
          t.createdAt < Date.now() - hours24 * 2
      )
      .filter((t) => t.income === true)
      .map((t) => t.amount);
  const incomeReducedDay3 = arrIncomeDay3.reduce(reducer);
  // Datensatz INCOME -day4
  const arrIncomeDay4 =
    walletInfo &&
    walletInfo.transactions
      .filter(
        (t) =>
          t.createdAt > Date.now() - hours24 * 4 &&
          t.createdAt < Date.now() - hours24 * 3
      )
      .filter((t) => t.income === true)
      .map((t) => t.amount);
  const incomeReducedDay4 = arrIncomeDay4.reduce(reducer);
  // Datensatz INCOME -day5
  const arrIncomeDay5 =
    walletInfo &&
    walletInfo.transactions
      .filter(
        (t) =>
          t.createdAt > Date.now() - hours24 * 5 &&
          t.createdAt < Date.now() - hours24 * 4
      )
      .filter((t) => t.income === true)
      .map((t) => t.amount);
  const incomeReducedDay5 = arrIncomeDay5.reduce(reducer);
  // Datensatz INCOME -day6
  const arrIncomeDay6 =
    walletInfo &&
    walletInfo.transactions
      .filter(
        (t) =>
          t.createdAt > Date.now() - hours24 * 6 &&
          t.createdAt < Date.now() - hours24 * 5
      )
      .filter((t) => t.income === true)
      .map((t) => t.amount);
  const incomeReducedDay6 = arrIncomeDay6.reduce(reducer);
  // Datensatz INCOME -day7
  const arrIncomeDay7 =
    walletInfo &&
    walletInfo.transactions
      .filter(
        (t) =>
          t.createdAt > Date.now() - hours24 * 7 &&
          t.createdAt < Date.now() - hours24 * 6
      )
      .filter((t) => t.income === true)
      .map((t) => t.amount);
  const incomeReducedDay7 = arrIncomeDay7.reduce(reducer);

  //EXPENSES 7 days
  //-day1
  const arrExpensesDay1 =
    walletInfo &&
    walletInfo.transactions
      .filter(
        (t) =>
          t.createdAt > Date.now() - hours24 * 1 && t.createdAt < Date.now()
      )
      .filter((t) => t.income === false)
      .map((t) => t.amount);
  const expensesReducedDay1 = arrExpensesDay1.reduce(reducer);

  // Datensatz Expenses day/48HOURS //// von jetzt an 48h zurück
  const arrExpensesDay2 =
    walletInfo &&
    walletInfo.transactions
      .filter(
        (t) =>
          t.createdAt > Date.now() - hours24 * 2 &&
          t.createdAt < Date.now() - hours24
      )
      .filter((t) => t.income === false)
      .map((t) => t.amount);
  const expensesReducedDay2 = arrExpensesDay2.reduce(reducer);

  // Datensatz Expenses -day3
  const arrExpensesDay3 =
    walletInfo &&
    walletInfo.transactions
      .filter(
        (t) =>
          t.createdAt > Date.now() - hours24 * 3 &&
          t.createdAt < Date.now() - hours24 * 2
      )
      .filter((t) => t.income === false)
      .map((t) => t.amount);
  const expensesReducedDay3 = arrExpensesDay3.reduce(reducer);

  // Datensatz Expenses -day4
  const arrExpensesDay4 =
    walletInfo &&
    walletInfo.transactions
      .filter(
        (t) =>
          t.createdAt > Date.now() - hours24 * 4 &&
          t.createdAt < Date.now() - hours24 * 3
      )
      .filter((t) => t.income === false)
      .map((t) => t.amount);
  const expensesReducedDay4 = arrExpensesDay4.reduce(reducer);

  // Datensatz Expenses -day5
  const arrExpensesDay5 =
    walletInfo &&
    walletInfo.transactions
      .filter(
        (t) =>
          t.createdAt > Date.now() - hours24 * 5 &&
          t.createdAt < Date.now() - hours24 * 4
      )
      .filter((t) => t.income === false)
      .map((t) => t.amount);
  const expensesReducedDay5 = arrExpensesDay5.reduce(reducer);

  // Datensatz Expenses -day6
  const arrExpensesDay6 =
    walletInfo &&
    walletInfo.transactions
      .filter(
        (t) =>
          t.createdAt > Date.now() - hours24 * 6 &&
          t.createdAt < Date.now() - hours24 * 5
      )
      .filter((t) => t.income === false)
      .map((t) => t.amount);
  const expensesReducedDay6 = arrExpensesDay6.reduce(reducer);

  // Datensatz Expenses -day7
  const arrExpensesDay7 =
    walletInfo &&
    walletInfo.transactions
      .filter(
        (t) =>
          t.createdAt > Date.now() - hours24 * 7 &&
          t.createdAt < Date.now() - hours24 * 6
      )
      .filter((t) => t.income === false)
      .map((t) => t.amount);
  const expensesReducedDay7 = arrExpensesDay7.reduce(reducer);

  const dataWeek = {
    labels: [
      new Date(Date.now()).toDateString().slice(0, 10),
      new Date(Date.now() - 86400000).toDateString().slice(0, 10),
      new Date(Date.now() - 86400000 * 2).toDateString().slice(0, 10),
      new Date(Date.now() - 86400000 * 3).toDateString().slice(0, 10),
      new Date(Date.now() - 86400000 * 4).toDateString().slice(0, 10),
      new Date(Date.now() - 86400000 * 5).toDateString().slice(0, 10),
      new Date(Date.now() - 86400000 * 6).toDateString().slice(0, 10),
    ],
    datasets: [
      {
        label: "Income 7 Days",
        data: [
          incomeReducedDay1,
          incomeReducedDay2,
          incomeReducedDay3,
          incomeReducedDay4,
          incomeReducedDay5,
          incomeReducedDay6,
          incomeReducedDay7,
        ],
        backgroundColor: ["#00B495"],
        borderRadius: "3",
      },
      {
        label: "Expense 7 Days",
        data: [
          expensesReducedDay1,
          expensesReducedDay2,
          expensesReducedDay3,
          expensesReducedDay4,
          expensesReducedDay5,
          expensesReducedDay6,
          expensesReducedDay7,
        ],
        backgroundColor: ["#E4797F"],
        borderRadius: "3",
      },
      {
        label: "Total 7 Days",
        data: [
          incomeReducedDay1 - expensesReducedDay1,
          incomeReducedDay2 - expensesReducedDay2,
          incomeReducedDay3 - expensesReducedDay3,
          incomeReducedDay4 - expensesReducedDay4,
          incomeReducedDay5 - expensesReducedDay5,
          incomeReducedDay6 - expensesReducedDay6,
          incomeReducedDay7 - expensesReducedDay7,
        ],
        backgroundColor: ["#2B47FC"],
        borderRadius: "3",
      },
    ],
    chartArea: {
      backgroundColor: "rgba(251, 85, 85, 0.4)",
    },
    maintainAspectRatio: false,
  };

  // ________________________________________________________
  const date = new Date();
  const time = date.toLocaleTimeString().slice(0, 5);
  const [statistic, setStatistic] = useState([]);
  const [sortStatistic, setSortStatistic] = useState(walletInfo);
  const [toggleTrans, setToggleTrans] = useState(true);

  const navigate = useNavigate();
  const asIncome = (amount, income) => (income ? amount : -amount);

  const amountSortDesc = () => {
    setSortStatistic([
      ...walletInfo.transactions.sort(
        (a, b) => asIncome(b.amount, b.income) - asIncome(a.amount, a.income)
      ),
    ]);
  };

  const amountSortAsc = () => {
    setSortStatistic([
      ...walletInfo.transactions.sort(
        (a, b) => asIncome(a.amount, a.income) - asIncome(b.amount, b.income)
      ),
    ]);
  };

  const handleToggleAmount = () => {
    setToggleTrans(!toggleTrans);
    toggleTrans ? amountSortDesc() : amountSortAsc();
  };

  const nameSortDesc = () => {
    setSortStatistic([
      ...walletInfo.transactions.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        }
        return 0;
      }),
    ]);
  };
  const dateSortDesc = () => {
    setSortStatistic([
      ...walletInfo.transactions.sort((a, b) => b.createdAt - a.createdAt),
    ]);
  };

  const handleSelect = (e) => {
    e.preventDefault();

    if (e.target.value === "Name") {
      nameSortDesc();
    } else if (e.target.value === "Date") {
      dateSortDesc();
    } else if (e.target.value === "Amount") {
      amountSortDesc();
    }
  };

  return (
    walletInfo && (
      <>
        <div className="statistic_container">
          <TopMobileBar />
          <div className="header_container">
            <div className="img">
              <img onClick={() => navigate(-1)} src={left} alt="left" />
            </div>

            <h4>Statistics</h4>
          </div>
          <div className="chart_data">
            <BarChart chartData={dataWeek} />
          </div>

          <div className="transaction_header">
            <h6>Top Spending</h6>
            <div style={{ display: "flex", gap: "5px" }}>
              <form action="">
                <select
                  style={{
                    borderColor: "#6666",
                    padding: "3px",
                    borderRadius: "8px",
                    width: "90px",
                  }}
                  onChange={handleSelect}
                  name=""
                  id=""
                >
                  <option value="">Filter by</option>
                  <option value="Amount">Amount</option>
                  <option value="Name">Name</option>
                  <option value="Date">Date</option>
                </select>
              </form>
              <img onClick={handleToggleAmount} src={Vector} alt={Vector} />
            </div>
          </div>
          <div className="transactionsHistory">
            <div>
              {walletInfo.transactions.map((ele, index) => (
                <motion.div
                  className="transaction_item"
                  key={index}
                  initial={{ y: "100vh" }}
                  animate={{
                    opacity: [0, 0.5, 1],
                    y: [100, 0, 0],
                  }}
                  transition={{
                    type: "twin",
                    duration: 0.5,
                    delay: (parseInt(index) + 0.5) / 10,
                  }}
                >
                  <div className="transaction_headline">
                    <div className="transaction_icon">
                      <h3>{ele.name && ele.name.charAt(0)}</h3>
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
                    </div>
                  </div>

                  <p
                    className="transaction_amount"
                    style={
                      ele.income ? { color: "#25A969" } : { color: "#F95B51" }
                    }
                  >
                    {ele.income && ele.income
                      ? `+ $${ele.amount.toFixed(2)}`
                      : `- $${ele.amount.toFixed(2)}`}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <Nav />
      </>
    )
  );
};

export default Statistic;
