import { useState } from "react";
import { Link } from "react-router-dom";
import left from "../img/chevron-left.png";
import dots from "../img/threeDots.png";
import Nav from "../components/Nav";
import { IoAddCircleOutline } from "react-icons/io5";

const Add = ({ token,setWalletInfo }) => {
  const [income, setIncome] = useState(true);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState();
  const [createdAt, setCreatedAt] = useState("");
  const [img, setImg] = useState("");

  const [dropdown, setDropdown] = useState(false);
  function handleDropdown() {
    setDropdown(!dropdown);
    console.log(dropdown);
  }
  function handleTransaction(e) {
    e.preventDefault();
    fetch('http://localhost:9000/transactions/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
              token: "JWT " + token,
            },
            body: JSON.stringify({
              income,
              amount,
              name,
              createdAt,
              img
            })
        })
            .then((response) => response.json(), window.location.reload(true))
            .then((addedTransaction) => setWalletInfo((previous) => [...previous, addedTransaction]))
  }

  return (
    <>
      <div className="add" style={income ?{backgroundColor:"#00B495"}:{backgroundColor:"rgba(228, 121, 127, 1)"}}>
        <div className="switchAddExpanseBtn">
          <button onClick={() => setIncome(true)}>Add Income</button>
          <button onClick={() => setIncome(false)}>Add Expense</button>
        </div>
        <div>
          <div className={"green" }>
            <Link to='/home'>  <img src={left} alt="left"/></Link>
          
            <h4>{income ? "Add Income" : "Add Expense"}</h4>
            <img src={dots} alt="dots" />
          </div>

          <form action="">
            <div className="formContent">
              <label>NAME</label>
              <input type="text" name="name" id="name" value={name} placeholder="Name" onChange={(e)=> setName(e.target.value)} />
             
              <label htmlFor="amount">AMOUNT</label>
              <input
                type="number"
                name="amount"
                id="amount"
                placeholder="Amount"
                required
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
              <label htmlFor="date">DATE</label>
              <input
                type="datetime-local"
                name="date"
                id="date"
                required
                value={createdAt}
                onChange={(e) => setCreatedAt(e.target.value)}
              />
              <label htmlFor="receipt">RECEIPT</label>
              <input
                type="file"
                name="receipt"
                id="receipt"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            <IoAddCircleOutline onClick={handleTransaction} size={25}/>
            </div>
          </form>
        </div>
      </div>
      <Nav />
    </>
  );
};

export default Add;
