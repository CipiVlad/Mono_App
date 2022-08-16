import './App.scss';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from 'react'
import Home from './pages/Home';
import Nav from './components/Nav';
import Wallet from './pages/Wallet'
import Statistic from './pages/Statistic'
import TransactionsDetails from './pages/TransactionsDetails'


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

          <Route path="/details/:id" element={<TransactionsDetails allFinObj={allFinObj} />} />

        </Routes>
      </BrowserRouter>
      <Nav />
    </div >
  );
}

export default App;