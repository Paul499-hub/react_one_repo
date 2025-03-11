import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home.js';
import Users from './Users.js';

function App() {
  return (
    <Router>

        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/users' element={<Users/>}/>
        </Routes>




    </Router>
  );
}

export default App;
