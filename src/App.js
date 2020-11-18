import React from 'react';
import './App.css';
import Apidragon from './pages/apidragon/apidragon';
import Github from './pages/github/github';
import Home from './pages/home/home';

function App() {
  return (
    <div className="App">
      <Github></Github>
      <Apidragon></Apidragon>
      <Home></Home>
    </div>
  );
}

export default App;
