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

export default Nav;
