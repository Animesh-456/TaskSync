// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Reg from './components/Reg';
import Dash from './components/Dash';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter> */}

      {/* <Navbar />
      <Home /> */}

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Reg />} />
          <Route path='/dash' element={<Dash />} />
          {/* <Route exact path='/register' element={<Register/>}/> */}
        </Routes>
      </Router>

    </>
  );
}

export default App;
