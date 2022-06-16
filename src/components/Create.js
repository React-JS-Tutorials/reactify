import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from "react-router-dom";


export default function Create() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const onClick = (e) => {
    e.preventDefault();
    const ids = uuid();
    let unique = ids.slice(0,8);
    array.push({id:unique, Name:name, Age:age});
    navigate("/");
  }
  return (
    <div className="container">
        <Form className="d-grid gap-2" style={{margin:'15rem'}}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" required value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" placeholder="Enter Age" required value={age} onChange={(e)=>{setAge(e.target.value)}}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(e) => {onClick(e)}}>Submit</Button>
            <Link className="d-grid gap-2" to='/'>
              <Button variant="warning" size="lg">Home</Button>
            </Link>
        </Form>
    </div>
  )
}
