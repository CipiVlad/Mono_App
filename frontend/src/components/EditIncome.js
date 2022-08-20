import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import left from "../img/chevron-left.png";
import Delete from "../components/Icons/Delete";
import down from "../img/chevron-downADD.png";
import up from "../img/chevron-upADD.png";
import Nav from "../components/Nav";
import "../scss/EditIncome.scss";
import { apiBaseUrl } from "../api/api";

const EditIncome = ({ token }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [receipt, setReceipt] = useState();
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    fetch(`${apiBaseUrl}/transactions/details/${id}`, {
      headers: {
        token: "JWT " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setAmount(data.amount);
        setCreatedAt(new Date(data.createdAt).toISOString().substring(0, 16)); //2022-05-26T12:23
        // setReceipt(data.img);
        console.log(data);
      });
  }, [token, id]);

  const deleteTransaction = () => {
    fetch(`${apiBaseUrl}/transactions/delete/${id}`, {
      method: "DELETE",
      headers: {
        token: "JWT " + token,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.acknowledged) {
          navigate("/home");
        }
      });
    console.log(id);
  };
  const editTransaction = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("amount", amount);
    formData.set("createdAt", createdAt);
    formData.set("income", true);

    fetch(`${apiBaseUrl}/transactions/edit/${id}`, {
      method: "PUT",
      headers: {
        token: "JWT " + token,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.acknowledged) {
          navigate("/home");
        }
      });

    console.log(id);
    console.log(name, amount, createdAt);
  };

  return (
    <>
      <div className="edit_income">
        <div className="green">
          <div className="icon_income">
            <Link to="/home">
              <img src={left} alt="left" />
            </Link>
            <div onClick={deleteTransaction} className="del_icon">
              <Delete />
            </div>
          </div>
          <h4>Edit Income</h4>
        </div>

        <form action="">
          <div className="formContent">
            <label htmlFor="amount">Name</label>
            <input
              type="text"
              name="amount"
              id="amount"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="amount">AMOUNT</label>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="Amount"
              required
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
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
              placeholder="Add Receipt"
              value={receipt}
              //   onChange={(e) => setReceipt(e.target.files[0])}
            />
            <button onClick={editTransaction}>Edit Transaction</button>
          </div>
        </form>
      </div>
      <Nav />
    </>
  );
};

export default EditIncome;
