import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Second(props) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="mb-3">
      <p>
        <label>Hi {location.state ? location.state.name : ""}</label>
      </p>
      <button type="button" className="btn btn-success" onClick={() => navigate('/', {state:{name:location.state? location.state.name : ""}})}>Back</button>
    </div>
  )
}