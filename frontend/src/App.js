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
import AuthRequired from "./components/AuthRequired";
import { apiBaseUrl } from "./api/api";

function App() {
  const [token, setToken] = useState(null);
  console.log(token);

  const [allFinObj, setAllFinObj] = useState(data);

  console.log(allFinObj);
  const [walletInfo, setWalletInfo] = useState(null);
  useEffect(() => {
    if (!token) {
      return;
    }

    fetch(`${apiBaseUrl}/users/showWallet`, {
      method: "GET",
      headers: {
        token: "JWT " + token,
      },
    })
      .then((response) => response.json())
      .then((walletResult) => setWalletInfo(walletResult));
  }, [token]);

  console.log(walletInfo);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={token ? "/home" : "/onboarding"} />}
          />
          <Route path="/splash" element={<Splashscreen />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login setToken={setToken} />} />

          <Route
            path="/home"
            element={
              <AuthRequired token={token} setToken={setToken}>
                <Home
                  token={token}
                  setToken={setToken}
                  walletInfo={walletInfo}
                />
              </AuthRequired>
            }
          />

          <Route
            path="/wallet"
            element={
              <AuthRequired token={token} setToken={setToken}>
                <Wallet
                  token={token}
                  setToken={setToken}
                  walletInfo={walletInfo}
                />
              </AuthRequired>
            }
          />

          <Route
            path="/statistic"
            element={
              <AuthRequired token={token} setToken={setToken}>
                <Statistic
                  token={token}
                  setToken={setToken}
                  allFinObj={allFinObj}
                  walletInfo={walletInfo}
                />
              </AuthRequired>
            }
          />

          <Route
            path="/detail/:id"
            element={
              <AuthRequired token={token} setToken={setToken}>
                <TransactionsDetails
                  token={token}
                  setToken={setToken}
                  walletInfo={walletInfo}
                />
              </AuthRequired>
            }
          />

          <Route
            path="/profile"
            element={
              <AuthRequired token={token} setToken={setToken}>
                <Profile
                  walletInfo={walletInfo}
                  token={token}
                  setToken={setToken}
                />
              </AuthRequired>
            }
          />

          <Route
            path="/add"
            element={
              <AuthRequired token={token} setToken={setToken}>
                <Add
                  token={token}
                  setToken={setToken}
                  walletInfo={walletInfo}
                />
              </AuthRequired>
            }
          />
        </Routes>
      </BrowserRouter>
      {/* <Nav /> */}
    </div>
  );
}

export default App;
