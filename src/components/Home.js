import React from 'react'
import { Button,Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import array from './array'; 
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {
    let navigate = useNavigate();

    function setTable(id, name, age){
        localStorage.setItem('id', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Age', age);
    }
    function deleteItem(id){
      
        // Getting index of the item to be deleted
        var index = array.map(function(e) { return e.id; }).indexOf(id);

        // deleting the entry with index
        array.splice(index, 1);
      
        // We need to re-render the page for getting 
        // the results so redirect to same page.
        navigate('/')
      }
    return (
        <div className="container">
            <Table striped bordered hover>
                <thead>
                    <tr key="0">
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {array.map((item) => {
                        return(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.Name}</td>
                                <td>{item.Age}</td>
                                <td><Link to={`/edit/` + item.id}><Button onClick={(e) =>
      setTable(item.id,item.Name,item.Age)} variant="info">
        Edit</Button></Link><Button onClick={e => deleteItem(item.id)} 
      variant="danger">Delete</Button></td>
                            </tr>
                        )}
                    )}
                </tbody>
                </Table>
                <Link className="d-grid gap-2" to='/create'>
  <Button variant="warning" size="lg">Create</Button>
</Link>
        </div>
    );
}

export default Home;
