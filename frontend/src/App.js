import './App.scss';
import Home from './components/Home';
import Nav from './components/Nav';
import Button from './components/Button';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <h1>Mono App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      <Home />
      <Nav />
      <Button />
    </div>
  );
}

export default App;