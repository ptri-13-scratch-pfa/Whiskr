import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/login';
import Signup from './pages/signup';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route 
            path='/'
            element={<Home />}/>
          <Route
          />
          <Route 
            path='/login'
            element={<Login />}/>
          <Route
          />
          <Route 
            path='/signup'
            element={<Signup />}
          />
          <Route/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
