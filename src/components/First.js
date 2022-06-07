import React, {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
export default function First() {  
  const location = useLocation();
  const [name, setName] = useState(location.state ? location.state.name : "");
  const navigate = useNavigate();
  
  return (
    <div>
        <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">Name: </span>
            <input type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <button type="button" className="btn btn-success" onClick={() => navigate('/second', {state:{name:name}})}>Submit</button>
    </div>
  )
}