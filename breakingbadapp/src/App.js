import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//Pages
import Home from './pages/Home';
import Detail from './pages/Detail';
import Locations from './pages/Locations';
import Episode from './pages/Episode';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Characters</Link>
          </li>
          <li>
            <Link to="/locations">Location</Link>
          </li>
          <li>
            <Link to="/episode">Episode</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/char/:char_id" exact Component={Detail} />
        <Route path="/locations" exact Component={Locations} />
        <Route path="/episode" exact Component={Episode} />
        {/* <Route path="/" exact element={<div>Home</div>} /> */}
        {/* <Route path="/signin" Component={Signin} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
