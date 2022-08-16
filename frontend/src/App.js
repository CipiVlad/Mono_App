<<<<<<< HEAD
import logo from './logo.svg';
import './App.scss';
=======
import './App.scss';
import Home from './components/Home';
import Nav from './components/Nav';
import Button from './components/Button';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
>>>>>>> 661009d28cc9a11dc8a1ff61d49410b4f0afde19

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
=======
      <h1>Mono App</h1>
      <BrowserRouter>
        <Nav />
        <Button />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
>>>>>>> 661009d28cc9a11dc8a1ff61d49410b4f0afde19
