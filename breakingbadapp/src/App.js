import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//Pages
import Home from './pages/Home';
import CharactersDetail from './pages/CharactersDetail';
import Locations from './pages/Locations';
import Episode from './pages/Episode';
import LocationDetail from './pages/LocationsDetail';
import EpisodeDetail from './pages/EpisodeDetail';


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
        <Route path="/char/:char_id" exact Component={CharactersDetail} />
        <Route path="/location/:locations_id" exact Component={LocationDetail} />
        <Route path="/episodes/:episodes_id" exact Component={EpisodeDetail} />
        <Route path="/locations" exact Component={Locations} />
        <Route path="/episode" exact Component={Episode} />
        {/* <Route path="/" exact element={<div>Home</div>} /> */}
        {/* <Route path="/signin" Component={Signin} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
