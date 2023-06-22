import './App.css';
import {Link, Routes, Route} from "react-router-dom"

import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <h1>Code Goes Here</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
