import React from "react";
import Home from "../img/Home.png";
import Stats from "../img/Stats.png";
import Add from "../img/Addblue.png";
import Wallet from "../img/Wallet.png";
import Profile from "../img/User.png";
import "../Nav.scss";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <img onClick={() => navigate("/home")} src={Home} alt="home" />
      <img onClick={() => navigate("/statistic")} src={Stats} alt="stats" />
      <img onClick={() => navigate("/add")} src={Add} alt="add" />
      <img onClick={() => navigate("/wallet")} src={Wallet} alt="wallet" />
      <img onClick={() => navigate("/profile")} src={Profile} alt="profile" />
    </div>
  );
};

export default Nav;
