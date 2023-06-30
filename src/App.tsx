import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Home />
    </div>
  );
}

export default App;
