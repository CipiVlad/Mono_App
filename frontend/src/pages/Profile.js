import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import left from "../img/chevron-left.png";
import userprofile from "../img/userProfile.png";
import users from "../img/users.png";
import envelope from "../img/envelope.png";
import shield from "../img/shield.png";
import lock from "../img/lock.png";
import Nav from "../components/Nav";
import ProfilePicture from "../img/ProfilePicture.png";
import Wallet from "./Wallet";
import { apiBaseUrl } from "../api/api";

const Profile = ({ walletInfo, setToken }) => {
  const navigate = useNavigate();

  const logOut = () => {
    fetch(apiBaseUrl + "/users/logout", { credentials: "include" });

    setToken(null);
    navigate("/onboarding");
  };

  return (
    <div>
      <div className="profile">
        <div className="topBlueContainer">
          <Link to={"/wallet"}>
            <img src={left} alt="left" />
          </Link>
          <h4>Profile</h4>
        </div>
        {/* <div> */}
        <img
          src={walletInfo && walletInfo.userImg}
          alt={walletInfo && walletInfo.userImg}
          className="profilePicture"
        />
        {/* hier nach Styling wieder reinnehmen */}
        {/* <img src={userData} alt="profile picture" /> */}
        {/* </div> */}
        <h2 className="name">{walletInfo && walletInfo.name}</h2>
        <p className="username">{walletInfo && walletInfo.email}</p>
        <div className="profileContent">
          <p>
            {" "}
            <img src={userprofile} alt="profile icon" />{" "}
            <Link to="/profile">Account info</Link>
          </p>
          <p>
            {" "}
            <img src={users} alt="personal profile icon" />{" "}
            <Link to="/profile">Personal profile</Link>{" "}
          </p>
          <p>
            {" "}
            <img src={envelope} alt="message" />{" "}
            <Link to="/profile">Message center</Link>
          </p>
          <p>
            {" "}
            <img src={shield} alt="shield" />{" "}
            <Link to="/profile">Login and security</Link>{" "}
          </p>
          <p>
            {" "}
            <img src={lock} alt="lock" />{" "}
            <Link to="/profile">Data and privacy</Link>
          </p>
          <p onClick={logOut}>
            <img src={lock} alt="lock" /> <Link to="/profile">Log Out</Link>
          </p>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Profile;
