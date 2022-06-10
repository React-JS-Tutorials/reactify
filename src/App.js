import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import First from './components/First';
import Second from './components/Second';
import {Routes, Route, useNavigate, useLocation} from "react-router-dom";
export default function App(){
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        personalInfo: { fName: '', lName: '', gender: '', profile: { developer: '', designer: '' } },
        contactInfo: { email: '', phone: '' },
        address: {
          state: '', city: '', geolocation: { lat: '', long: '' },
        },
        newsletter: ''
    });
    function submit(e, comp) {
        e.preventDefault();
        navigate(comp);
        console.log(comp);
    };
    function onChange(e) {
        let data = { ...user };
        let name = e.target.name;
        let val = e.target.value;
        if (name === 'fName' || name === 'lName' || name === "gender") {
          data = { ...data, personalInfo: { ...data.personalInfo, [name]: val } };
        } if (name === 'developer' || name === 'designer') {
          data = { ...data, personalInfo: { ...data.personalInfo, profile: { ...data.personalInfo.profile, [name]: val } } };
        } else if (name === 'email' || name === 'phone') {
          data = { ...data, contactInfo: { ...data.contactInfo, [name]: val } };
        } else if (name === 'state' || name === 'city') {
          data = { ...data, address: { ...data.address, [name]: val } };
        } else if (name === 'lat' || name === 'long') {
          data = { ...data, address: { ...data.address, geolocation: { ...data.address.geolocation, [name]: val } } };
        }else if(name === 'newsletter'){
          data = {...data, newsletter: {[name]: val}}
        }
        setUser(data);
    };  
    return(        
        <div className="App">
            <div className="container">
                <NavBar/> 
                <Routes>
                    <Route path="/" element={<First location={location} navigate={navigate} user={user} onChange={onChange} submit={submit}/>} /> 
                    <Route path="/second" element={<Second location={location} navigate={navigate}  user={user} onChange={onChange} submit={submit}/>} />             
                </Routes>
            </div>
        </div>
    )
}