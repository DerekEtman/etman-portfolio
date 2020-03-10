import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { NavBar } from './components/navbar/navbar';
import { MainSplash } from './components/splash';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainSplash />

    </div>
  );
}

export default App;
