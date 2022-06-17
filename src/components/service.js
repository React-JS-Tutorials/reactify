import axios from 'axios';

const url = "http://localhost:3000/posts";

export const getallPosts = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addPost = async (post) => {
    return await axios.post(url,post);
}

export const editPost = async (id, post) => {
    return await axios.put(`${url}/${id}`,post);
}


export const deletePost = async (id) => {
    return await axios.delete(`${url}/${id}`);
}
