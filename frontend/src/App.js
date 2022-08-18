import "./App.scss";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Wallet from "./pages/Wallet";
import Statistic from "./pages/Statistic";
import TransactionsDetails from "./pages/TransactionsDetails";
import Onboarding from "./pages/Onboarding";
import Splashscreen from "./pages/SplashScreen";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Add from "./pages/Add";
import data from "./components/Data.js";

function App() {
  const [token, setToken] = useState(null);
  console.log(token);

  const [allFinObj, setAllFinObj] = useState(data);

  console.log(allFinObj);
  // console.log(allFinObj);

  // console.log(allFinObj);

  // useEffect(() => {
  //   fetch("http://localhost:9000/transactions/all")
  //     .then((res) => res.json())
  //     .then((alldata) => setAllFinObj(alldata))
  //     .catch((err) => console.log(err));
  // }, []);

  // console.log(allFinObj);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={token ? "/home" : "/splash"} />}
          />
          <Route path="/splash" element={<Splashscreen />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/home" element={<Home allFinObj={allFinObj} />} />
          <Route path="/wallet" element={<Wallet allFinObj={allFinObj} />} />
          <Route
            path="/statistic"
            element={<Statistic allFinObj={allFinObj} />}
          />

          <Route
            path="/:id"
            element={<TransactionsDetails allFinObj={allFinObj} />}
          />

          <Route path="/profile" element={<Profile />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
      {/* <Nav /> */}
    </div>
  );
}

export default App;
