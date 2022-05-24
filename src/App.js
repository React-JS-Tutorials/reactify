import React, {useState} from 'react'
import './App.css';
import Alert from './components/Alert';
import Click from './components/Click';
import Hover from './components/Hover';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App(){
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) =>{
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }
    return(
        <> 
            <Router> 
                <Navbar title="Textform"/>
                <Alert alert={alert}/>
                <Routes>                
                    {/* <Textform showAlert={showAlert}/> */}
                    <Route exact path="/" element={<Click showAlert={showAlert}/>} />
                    <Route exact path="/hover" element={<Hover showAlert={showAlert}/>} />
                </Routes>
            </Router>
        </>
    )
}