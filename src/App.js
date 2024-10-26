import Home from './pages/Home/Home'
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      {/* <div className=""> */}
        <Routes>
          <Route path='/signin' element={<Signin />} /> 
          <Route path='/signup' element={<Signup />} /> 
          <Route path='/' element={<Home />} />       
        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
