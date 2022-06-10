import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import First from './components/First';
import Second from './components/Second';
import {Routes, Route} from "react-router-dom";

export default function App(){
    return(        
        <div className="App">
            <div className="container">
                <NavBar/> 
                <Routes>
                    <Route  path="/" element={<First/>} /> 
                    <Route  path="/second" element={<Second />} />             
                </Routes>
            </div>
        </div>
    )
}