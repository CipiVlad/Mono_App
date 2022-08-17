<<<<<<< HEAD
import React from "react";

const Nav = () => {
  return (
    <div className="nav">
      <img src="/frontend/src/img/Home.png" alt="home" />
      <img src="/frontend/src/img/Stats.png" alt="stats" />
      <img src="frontend/src/img/Add.png" alt="add" />
      <img src="/frontend/src/img/Walllet.png" alt="wallet" />
      <img src="frontend/src/img/User.png" alt="profile" />
    </div>
  );
};
=======
import React from 'react'
import Home from '../img/Home.png';
import Stats from '../img/Stats.png';
import Add from '../img/Addblue.png';
import Wallet from '../img/Wallet.png';
import Profile from '../img/User.png';
import '../Nav.scss';

const Nav = () => {
    return (
        <div className="nav">
            <img src={Home} alt="home" />
            <img src={Stats} alt="stats" />
            <img src={Add} alt="add" />
            <img src={Wallet} alt="wallet" />
            <img src={Profile} alt="profile" />
        </div>
    )
}
>>>>>>> 20ac91a7a222ee4b55936fb1b416fc07d768b03a

export default Nav;
