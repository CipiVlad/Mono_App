import BarChart from '../components/BarChart'
import { useState } from 'react'
import DataExample from '../components/Data'

const Statistic = ({ allFinObj }) => {

    const day = DataExample.map((ele) => new Date(ele.createdAt).getDate())

    const month = DataExample.map((ele) => new Date(ele.createdAt).getMonth())

    const fullYear = [...new Set(DataExample.map((ele) => new Date(ele.createdAt).getFullYear()))]
    //[...new Set(DataExample.map((ele) => new Date(ele.createdAt).getFullYear()))]
    console.log(fullYear);



    const arrAmount = DataExample.map((ele) => ele.amount)
    const reducer = (accumulator, curr) => accumulator + curr;
    const amountReduced = arrAmount.reduce(reducer)
    console.log(amountReduced);

    //data: DataExample.map((ele) => ele.amount)

    const [userData, setUserData] = useState({
        labels: fullYear,
        datasets: [{
            label: "Year",
            data: DataExample.map((ele) => ele.amount),
            backgroundColor: ["rgb(136, 152, 255)"]
        },]
    })

    return (<div>

        <BarChart chartData={userData} />

    </div >);
}

export default Statistic;