import './App.css';
import MyHeader from './components/Header';
import PoliciesPage from './components/Policies';
import PolicyDetails from './components/PolicyDetails';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tasks from './components/Tasks';


function App() {
  return(

    <Router>

    <div className='content'>

<div>
      <MyHeader/>
</div>

<div>
      <Routes>
         
          <Route path="/Dashboard" element={<div>Dashboard</div>} />
          <Route path="/Policies" element={<PoliciesPage/>} />
          <Route path="/Tasks" element={<Tasks/>} />
          <Route path="/Assessments" element={<div>Assessments</div>} />
          <Route path="/Compliance" element={<div>Compliance</div>} />
          <Route path="/Users" element={<div>Users</div>} />
          <Route path="/policy-details" element={<PolicyDetails/>} />
          
      </Routes>
</div>

    </div>

    </Router>
  );


}


export default App;
