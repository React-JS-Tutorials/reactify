import React, { useState } from 'react';
import { Container, Form, Button, InputGroup, FormControl, ButtonGroup } from 'react-bootstrap';
import { addPost } from './service';
import { useNavigate } from 'react-router-dom';

export default function Create() {
    const [post, setPost] = useState({
        title: "",
        author : ""
    });
    const location = useNavigate();

    const onValueChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value});
    }
    const addPostDetails = async () =>{
        await addPost(post);
        location('/');
    }

    return(
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
                    <Button variant="primary" onClick={() => addPostDetails() } color="primary">Add Post</Button>
                    <Button onClick={()=> location("/")} variant="danger" color="secondary">Cancel</Button>
                </ButtonGroup>
            </Form>
        </Container>
    )

}
