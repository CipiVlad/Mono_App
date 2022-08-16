import './App.scss';
import Home from './components/Home';
import Nav from './components/Nav';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.scss';

function App() {



  return (
    <div className="App">
      <h1>Mono App</h1>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;