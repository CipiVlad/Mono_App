import BarChart from "../components/BarChart";
import { useState } from "react";
import DataExample from "../components/Data";
import Nav from "../components/Nav";
import MobileTopBarIcons from "../img/MobileTopBarIcons2.png";
import Vector from "../img/Vector.png";
import left from "../img/left_statistic.png";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Statistic = ({ walletInfo }) => {
  const day = DataExample.map((ele) => new Date(ele.createdAt).getDate()); // 0 = Sonntag =>19 Aug

  const month = DataExample.map((ele) => new Date(ele.createdAt).getMonth()); // 0 = Januar => Jan

  const fullYear = [
    ...new Set(DataExample.map((ele) => new Date(ele.createdAt).getFullYear())),
  ]; // 2022
  //[...new Set(DataExample.map((ele) => new Date(ele.createdAt).getFullYear()))]
  console.log(fullYear);

  const arrAmount = DataExample.map((ele) => ele.amount);
  const reducer = (accumulator, curr) => accumulator + curr;
  const amountReduced = arrAmount.reduce(reducer);
  console.log(amountReduced);

  //data: DataExample.map((ele) => ele.amount)

  const [userData, setUserData] = useState({
    labels: fullYear, // [2022, 2023] 0 , 1
    datasets: [
      {
        label: "Year",
        data: DataExample.map((ele) => ele.amount), // von jedem Element/ Object  den Amount    0 , 1, 2, 3,
        backgroundColor: ["rgb(136, 152, 255)"],
      },
    ],
  });
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
    console.log(e.target.value);

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
          <div className="top_mobile_bar">
            <p>{time}</p>
            <div>
              <img src={MobileTopBarIcons} alt={MobileTopBarIcons} />
            </div>
          </div>
          <div className="header_container">
            <div className="img">
              <img onClick={() => navigate(-1)} src={left} alt="left" />
            </div>

            <h4>Statistics</h4>
          </div>
          <div className="chart_data">
            <BarChart statistic={statistic} chartData={userData} />
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
                    width: "70%",
                  }}
                  onChange={handleSelect}
                  name=""
                  id=""
                >
                  <option value="">Choose select</option>
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
