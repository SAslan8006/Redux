import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={Home} />
        {/* <Route path="/" exact element={<div>Home</div>} /> */}
        {/* <Route path="/signin" Component={Signin} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
