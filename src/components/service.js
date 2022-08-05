import axios from 'axios';

const url = "http://localhost:3000/blogs";

export const getBlogs = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addBlog = async (post) => {
    return await axios.post(url, post);
}

export const editBlog = async (id, post) => {
    return await axios.put(`${url}/${id}`,post);
}


export const delBlog = async (id) => {
    return await axios.delete(`${url}/${id}`);
}
