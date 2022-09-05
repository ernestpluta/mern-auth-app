import { Routes, Route } from "react-router-dom"
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx'
import Dashboard from './pages/Dashboard.jsx'
import './globals.css'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/dashboard" element={ <Dashboard/> } />
      </Routes>
    </div>
  );
}

export default App;
