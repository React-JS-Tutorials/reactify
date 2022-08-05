import React, { memo, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from "react-bootstrap";
import { deleteBlogs, retrieveBlogs } from "../actions/blogs";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


function Home() {    
    const navigate= useNavigate();
    const blogs = useSelector((state)=>state.blogReducer.blogs);
    const dispatch = useDispatch();

    const fetchBlogs = () => {
        dispatch(retrieveBlogs());
    }
    
    useEffect(() => {
        fetchBlogs();
    }, [dispatch]);

    const deleteItem = (id) => {
        dispatch(deleteBlogs(id));
        fetchBlogs();
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
                        blogs.length > 0 ? blogs.map((post)=>(
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.author}</td>
                                <td><Button variant="primary" onClick={(e)=>{navigate("/edit", {state:{post:post}})}}>Edit</Button><Button variant="danger" onClick={(e)=> deleteItem(post.id)}>Delete</Button></td>
                            </tr>
                        )): <tr><td colSpan={4}>Nothing to show</td></tr>
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
