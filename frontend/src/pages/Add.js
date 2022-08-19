import { useState } from "react";
import left from "../img/chevron-left.png";
import dots from "../img/threeDots.png";
import down from "../img/chevron-downADD.png";
import up from "../img/chevron-upADD.png";
import Nav from "../components/Nav";

const Add = () => {
  const [income, setIncome] = useState(true);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [receipt, setReceipt] = useState([]);

  const [dropdown, setDropdown] = useState(false);

  function handleDropdown() {
    setDropdown(!dropdown);
    console.log(dropdown);
  }
  function handleTransaction(e) {
    e.preventDefault();
    console.log(income);
    console.log(name);
    console.log(amount);
    console.log(date);
  }

  return (
    <>
      <div className="add">
        {/* ONCLICK INVISIBLE  && set income true/false*/}
        <div>
          <button onClick={() => setIncome(true)}>Add Income</button>
          <button onClick={() => setIncome(false)}>Add Expense</button>
        </div>
        <div>
          <div className={income ? "green" : "pink"}>
            <img src={left} alt="left" />
            <h4>{income ? "Add Income" : "Add Expense"}</h4>
            <img src={dots} alt="dots" />
          </div>

          <form action="">
            <div className="formContent">
              <label>NAME</label>
              <div onClick={handleDropdown} className="dropdown">
                <div>
                  {" "}
                  <p onClick={() => setName("Netflix")}>Netflix</p>{" "}
                  {dropdown ? (
                    <img src={up} alt="up" />
                  ) : (
                    <img src={down} alt="down" />
                  )}{" "}
                </div>
                <div
                  style={dropdown ? { display: "block" } : { display: "none" }}
                >
                  <p onClick={() => setName("Amazon")}>Amazon</p>
                  <p onClick={() => setName("Youtube")}>Youtube</p>
                  <p
                    onClick={() =>
                      console.log("hier kÃ¶nnte es dynamisch werden")
                    }
                  >
                    Add Your Transaction
                  </p>
                </div>
              </div>
              <label htmlFor="amount">AMOUNT</label>
              <input
                type="text"
                name="amount"
                id="amount"
                placeholder="Amount"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <label htmlFor="date">DATE</label>
              <input
                type="date"
                name="date"
                id="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <label htmlFor="receipt">RECEIPT</label>
              <input
                type="file"
                name="receipt"
                id="receipt"
                placeholder="Add Receipt"
                value={receipt}
                onChange={(e) => setReceipt(e.target.value)}
              />
              <button onClick={handleTransaction}>Add Transaction</button>
            </div>
          </form>
        </div>
      </div>
      <Nav />
    </>
  );
};

export default Add;
