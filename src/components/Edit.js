import React, { useState, memo } from 'react';
import { Container, Form, Button, InputGroup, FormControl, ButtonGroup } from 'react-bootstrap';
import { updateBlogs, retrieveBlogs } from "../actions/blogs";
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Edit() {
    const location = useLocation();
    const { id } = location.state.post;
    const navigate= useNavigate();
    const dispatch = useDispatch();
    const [post, setPost] = useState(location.state.post);

    const editedPost = async (id, post) =>{
        await dispatch(updateBlogs(id, post));
        await dispatch(retrieveBlogs());
        navigate('/');
    }
    
    const onValueChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value});
    }
  return (
    <Container className="sm">
            <h3 variant="h5" align="center">Add User Details</h3>
            <Form>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Title</InputGroup.Text>
                    <FormControl
                        placeholder="Title"
                        aria-label="Title"
                        aria-describedby="basic-addon1"
                        onChange={(e) => onValueChange(e)}
                        name="title"
                        value={post.title}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Author</InputGroup.Text>
                    <FormControl
                        placeholder="Author"
                        aria-label="Author"
                        aria-describedby="basic-addon1"
                        onChange={(e) => onValueChange(e)}
                        name="author"
                        value={post.author}
                    />
                </InputGroup>
                <ButtonGroup aria-label="First group">
                    <Button variant="primary" onClick={() => editedPost(id, post) } color="primary">Update Post</Button>
                    <Button onClick={()=> navigate("/")} variant="secondary" color="secondary">Home</Button>
                </ButtonGroup>
            </Form>
        </Container>
  )
}
export default memo (Edit)