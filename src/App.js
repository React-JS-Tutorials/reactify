import React, {useState} from 'react';
import './App.css';
import Alert from './components/Alert';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';

export default function App(){
    /**
    |--------------------------------------------------
    | Dynamic alert variable
    |--------------------------------------------------
    */
    const [alert, setAlert] = useState(null);
    /**
    |--------------------------------------------------
    | Function for Setting Alert message dynamically
    |--------------------------------------------------
    */
    const showAlert = (message, type) =>{
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 300);
    }
    /**
    |--------------------------------------------------
    | Checking all component input values dynamically
    |--------------------------------------------------
    */
    const [update, setUpdate] = useState('');
    const updateValue = (secondComp, thirdComp)=>{
        setUpdate({
            secondComp: secondComp,
            thirdComp: thirdComp
        });
    }
    return(
        <> 
            <div className="container">
                <div className="row">
                    <Alert alert={alert}/>
                    <First showAlert={showAlert} updateValue={updateValue} update={update} />
                </div> 
                <div className="row">             
                    <Second showAlert={showAlert} updateValue={updateValue} update={update} />
                    <Third showAlert={showAlert} updateValue={updateValue} update={update} />
                </div>
            </div>
        </>
    )
}