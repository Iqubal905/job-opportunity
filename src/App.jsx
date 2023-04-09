import React from 'react';
import './App.css'
import Navigation from './computent/Navigation';
import { Outlet } from 'react-router-dom';
const App = () => {


  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default App;
