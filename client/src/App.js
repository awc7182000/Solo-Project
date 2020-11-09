import React from 'react';
import {Router} from '@reach/router';
import Login from '../src/views/Login'
import Logout from './views/Logout'
import Events from '../src/views/Events'
import Admin from '../src/views/Admin'
import AdminList from './Components/adminList'
import VolunteerBubble from './Components/VolunteerBubble'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Events path="/"/>
        <Login path="/login/"/>
        <Logout path="/main/"/> 
        <Admin path="/admin/"/>
        <AdminList path="/admin/:id/"/>
        <VolunteerBubble path="/volunteer/:id"/>
      </Router>
    </div>
  );
}

export default App;
