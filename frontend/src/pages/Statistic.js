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
  const navigate = useNavigate();
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
            <BarChart chartData={userData} />
          </div>

          <div className="transaction_header">
            <h6>Top Spending</h6>
            <Link to="/wallet">
              <img src={Vector} alt={Vector} />
            </Link>
          </div>
          <div className="transactionsHistory">
            <div>
              {walletInfo.transactions.map((ele, index) => (
                <Link to={`/detail/${ele._id}`}>
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
                      <div
                        // style={
                        //   ele.income
                        //     ? { backgroundColor: "#25A969" }
                        //     : { backgroundColor: "#F95B51" }
                        // }
                        className="transaction_icon"
                      >
                        <h3 style={{ color: "white" }}>
                          {ele.name && ele.name.charAt(0)}
                        </h3>
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
                      {ele.income && ele.income
                        ? `+ $${ele.amount.toFixed(2)}`
                        : `- $${ele.amount.toFixed(2)}`}
                    </p>
                  </motion.div>
                </Link>
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
