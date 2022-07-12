import React, { useState, useEffect, memo } from 'react';
import { Container, Form, Button, InputGroup, FormControl, ButtonGroup } from 'react-bootstrap';
import { getallPosts, editPost } from './service';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
    const param = useParams();
    const navigate= useNavigate();
    const [post, setPost] = useState({
        title: "",
        author : ""
    }); 
    useEffect(() => {
        getPost();
    }, [param.id])

    const getPost = async () =>{
        const response = await getallPosts(param.id);
        setPost(response.data);
    }

    const editedPost = async () =>{
        await editPost(param.id, post);
        alert("Value updated successfully!")
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
                    <Button variant="primary" onClick={() => editedPost() } color="primary">Update Post</Button>
                    <Button onClick={()=> navigate("/")} variant="secondary" color="secondary">Home</Button>
                </ButtonGroup>
            </Form>
        </Container>
  )
}
export default memo (Edit)