import './App.css';
import {Routes, Route} from "react-router-dom"

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about/*' element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
