import './App.scss';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from 'react'
import Home from './pages/Home';
import Nav from './components/Nav';
import Wallet from './pages/Wallet'
import Statistic from './pages/Statistic'



function App() {

  const [allFinObj, setAllFinObj] = useState([])

  useEffect(() => {
    fetch('http://localhost:9000/transactions/all')
      .then((res) => res.json)
      .then((jsonObj) => setAllFinObj(jsonObj))
      .catch((err) => console.log(err))
  }, [])


  return (
    <div className="App">
      <h1>Mono App</h1>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home allFinObj={allFinObj} setAllFinObj={setAllFinObj} />} />
          <Route path="/wallet" element={<Wallet allFinObj={allFinObj} setAllFinObj={setAllFinObj} />} />
          <Route path="/statistic" element={<Statistic allFinObj={allFinObj} setAllFinObj={setAllFinObj} />} />

        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;