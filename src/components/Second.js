import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Second(props) {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div className="mb-3">
      <p>
        <label>Hi {params ? params.name : ""}</label>
      </p>
      <button type="button" className="btn btn-success" onClick={() => navigate('/', {state:{name:params ? params.name : ""}})}>Back</button>
    </div>
  )
}