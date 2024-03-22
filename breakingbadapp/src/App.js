import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>React Router</h1>
      </div>
      <Routes>
        <Route path="/" exact element={<div>Home</div>} />
        {/* <Route path="/signin" Component={Signin} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
