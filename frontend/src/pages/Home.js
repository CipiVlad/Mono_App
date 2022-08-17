<<<<<<< HEAD
import React from 'react';

=======
import React from "react";
>>>>>>> 7a739c1988f07e13623eff2750d87d08eea26a14

const Home = ({ allFinObj, setAllFinObj }) => {
  console.log(allFinObj);

  return (
<<<<<<< HEAD
    <div className='Home'>
      <section className='HomeBox'>
        <h4>Total Balance ^</h4>
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
      <div className='transactionsHistory'>
        <h6>Transactions History</h6>
        <div>
          {allFinObj && allFinObj.map((ele, index) =>
=======
    <div>
      <section>
        <h4>Total Balance</h4>
        <div>
          {allFinObj &&
            allFinObj.map((ele, index) => (
              <div key={index}>
                <h2>$ {ele.amount}</h2>
                <p>Income</p>
                <h4>$ {ele.amount}</h4>
                <p>Expenses</p>
                <h4>$ {ele.amount}</h4>
              </div>
            ))}
        </div>
      </section>
      <h6>Transactions History</h6>
      <div>
        {allFinObj &&
          allFinObj.map((ele, index) => (
>>>>>>> 7a739c1988f07e13623eff2750d87d08eea26a14
            <div key={index}>
              <h4>{ele.name}</h4>
              <p>{ele.date}</p>
              <p>$ {ele.amount}</p>
            </div>
<<<<<<< HEAD
          )}
        </div>
=======
          ))}
>>>>>>> 7a739c1988f07e13623eff2750d87d08eea26a14
      </div>
    </div>
  );
};

export default Home;
