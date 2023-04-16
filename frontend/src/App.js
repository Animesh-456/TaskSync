import './App.css';
import Home from "./components/Home"
import Register from './components/Register';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
// function App() {


//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={Home}/>
//         <Route path='register' element={Register} />
//       </Routes>
//     </>

//   );

// }

// export default App;

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'register', element: <Register /> },
  ]);

  return (
    <>
      <Navbar />
      <Router>
        {routes}
      </Router>
    </>
  );
};

export default App;
