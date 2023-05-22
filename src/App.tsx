import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
     <Nav />
     <Home/>
    </div>
  );
}

export default App;
