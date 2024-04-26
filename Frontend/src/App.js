import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Studentenroll from './components/studentenroll';
import academics from './components/academics';
import StaffManagement from './components/staff-management';
import Academics from './components/academics';
import Grades from './components/grades';
import FeeManagement from './components/fee-management';




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/studentenroll" element={<Studentenroll />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/academics" element={<Academics/>} />
          <Route path="/staff-management" element={<StaffManagement/>} />
          <Route path="/academics" element={<Academics/>} />
          <Route path="/fee-management" element={<FeeManagement/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

