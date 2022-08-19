import BarChart from "../components/BarChart";
import { useState } from "react";

const Statistic = ({ allFinObj, walletInfo }) => {
  const [] = useState();

  return (
    <div>
      <h1>Sta</h1>

      <BarChart allFinObj={allFinObj} />
    </div>
  );
};

export default Statistic;
