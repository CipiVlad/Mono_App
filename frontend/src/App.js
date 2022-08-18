import './App.scss';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from 'react'
import Home from './pages/Home';
import Nav from './components/Nav';
import Wallet from './pages/Wallet'
import Statistic from './pages/Statistic'
import TransactionsDetails from './pages/TransactionsDetails'
import Onboarding from './pages/Onboarding'
import Splashscreen from './pages/SplashScreen'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Profile from './pages/Profile'


function App() {

  const [allFinObj, setAllFinObj] = useState([])

  useEffect(() => {
    fetch('http://localhost:9000/transactions/all')
      .then((res) => res.json())
      .then((alldata) => setAllFinObj(alldata))
      .catch((err) => console.log(err))
  }, [])

  // console.log(allFinObj)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home allFinObj={allFinObj} setAllFinObj={setAllFinObj} />} />
          <Route path="/wallet" element={<Wallet allFinObj={allFinObj} setAllFinObj={setAllFinObj} />} />
          <Route path="/statistic" element={<Statistic allFinObj={allFinObj} setAllFinObj={setAllFinObj} />} />

          <Route path="/:id" element={<TransactionsDetails />} />


          <Route path="/splashscreen" element={<Splashscreen />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/profile" element={<Profile />} />

        </Routes>
      </BrowserRouter>
      <Nav />
    </div >
  );
}

export default App;