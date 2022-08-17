import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import left from '../img/chevron-left.png'
import dots from '../img/threeDots.png'
import up from '../img/chevron-up.png'

const TransactionsDetails = () => {

  const { id } = useParams()
  const [detailTransaction, setDetailTransaction] = useState([])


  useEffect(() => {
    fetch(`http://localhost:9000/transactions/details/${id}`)
      .then(res => res.json())
      .then(detailObj => setDetailTransaction([detailObj]))
      .catch(err => console.log(err))
  }, [id])

  console.log(detailTransaction[0])


  


if(detailTransaction[0]=== undefined){
return(
  <div><p>Loading...</p></div>
)
}
  return (
    <div>
      <div>
        <img src={left} alt="left" />
        <p>Transaction Details</p>
        <img src={dots} alt="threeDots" />
      </div>
      <div>
        <img src="" alt="" />
        <h3> {detailTransaction[0].income ? "Income" : "Expense"}</h3>
      </div>
      <h5>Transaction details <span><img src={up} alt="up" /></span> </h5>

      <p>Status <span>{detailTransaction[0].income ? "Income" : "Expense"}</span> </p>
      <p>From <span>{detailTransaction[0].name}</span> </p>
      <p>Time <span>{detailTransaction[0].time}</span> </p>
      <p>Date <span>{detailTransaction[0].date}</span> </p>

      <p>{detailTransaction[0].income ? "Earnings" : "Spending"} <span>$ {detailTransaction[0].amount}</span> </p>

      <p>Total <span>$ {detailTransaction[0].amount}</span> </p>

      <button>Edit</button>
    </div>
  )
} 

export default TransactionsDetails



// return (
    
//   <div>
//     <div>
//       <img src="" alt="" />
//       <p>Income</p>
//       <h3>$ {detailTransaction && detailTransaction[0].income ? "Income" : "Expense"}</h3>
//     </div>
//     <h5>Transaction details <span><img src="" alt="" /></span> </h5>

//     <p>Status <span>{detailTransaction[0].income ? "Income" : "Expense"}</span> </p>
//     <p>From <span>{detailTransaction[0].name}</span> </p>
//     {/* <p>Time <span>{detailTransaction.time}</span> </p>  wie soll hier Am/PM dargestellt werden ? */}
//     {/* <p>Date <span>{detailTransaction[0].date}</span> </p>

//     <p>{detailTransaction[0].income ? "Earnings" : "Spending"} <span>$ {detailTransaction[0].amount}</span> </p>

//     <p>Total <span>$ {detailTransaction[0].amount}</span> </p> */}
//   </div>
// )