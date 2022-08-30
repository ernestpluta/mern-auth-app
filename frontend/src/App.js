import { Routes, Route } from "react-router-dom"
import Login from './components/Login.js';
import Signup from './components/Signup.js'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/signup" element={ <Signup/> } />
      </Routes>
    </div>
  );
}

export default App;