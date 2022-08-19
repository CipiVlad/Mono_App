import BarChart from "../components/BarChart";
import { useState } from "react";
import DataExample from "../components/Data";
import Nav from "../components/Nav";

const Statistic = ({ allFinObj }) => {
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

  return (
    <>
      <div>
        <BarChart chartData={userData} />
      </div>
      <Nav />
    </>
  );
};

export default Statistic;
