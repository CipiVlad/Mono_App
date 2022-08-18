import React from 'react'

const Home = ({ allFinObj, setAllFinObj }) => {

console.log(allFinObj)

  return (
    <div>
      <section>
        <h4>Total Balance</h4>
        <div>{allFinObj && allFinObj.map((ele, index) =>
          <div key={index}>
            <h2>$ {ele.amount}</h2>
            <p>Income</p>
            <h4>$ {ele.amount}</h4>
            <p>Expenses</p>
            <h4>$ {ele.amount}</h4>
          </div>
        )}</div>
      </section>
      <h6>Transactions History</h6>
      <div>
        {allFinObj && allFinObj.map((ele, index) =>
          <div key={index}>
            <h4>{ele.name}</h4>
            <p>{ele.date}</p>
            <p>$ {ele.amount}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home