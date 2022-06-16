import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Edit from './components/Edit';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
