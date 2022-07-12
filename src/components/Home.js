import React, {useEffect, useState, memo} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Table} from "react-bootstrap";
import { deletePost, getallPosts } from './service'; 
import { useNavigate } from 'react-router-dom';

function Home() {
    
    const navigate= useNavigate();
    const [posts, setPosts] = useState([]);    
    useEffect(() => {
        getPosts();
    }, [])  
    
    const getPosts = async () =>{
        const response = await getallPosts();
        setPosts(response.data);
    }
    
    const deletPosts = async (id) =>{
        await deletePost(id);
        window.location.reload();
    }
    return (
        <div className="container">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((post)=>(
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.author}</td>
                                <td><Button variant="primary" onClick={(e)=>{navigate("/edit/"+ post.id)}}>Edit</Button><Button variant="danger" onClick={(e)=>{deletPosts(post.id)}}>Delete</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
                
            </Table>
            <div className="d-grid">
                <Button size="lg" onClick={()=> navigate("/create")} variant="primary" color="secondary">Add Post</Button>
            </div>
        </div>

    )
}
export default memo(Home)