import {getBlogs, addBlog, editBlog, delBlog} from "../components/service"
import {CREATE_BLOG, RETRIEVE_BLOGS, UPDATE_BLOG, DELETE_BLOG} from "./index"


export const createBlog = (data) => async dispatch =>
{       
    try{
        const result = await addBlog(data);
        dispatch({
            type: CREATE_BLOG, 
            payload: result.data
        });        
    }
    catch(e){
        console.log(e);
    }
}
export const retrieveBlogs = (data) => async dispatch =>
{
    try{
        const result = await getBlogs(data);
        dispatch({
            type: RETRIEVE_BLOGS, 
            payload: result.data
        });
    }
    catch(e){
        console.log(e);
    }
}
export const updateBlogs = (id, data) => async dispatch =>
{
    try{
        const result = await editBlog(id, data);
        dispatch({
            type: UPDATE_BLOG, 
            payload: result.data
        });
    }
    catch(e){
        console.log(e);
    }
}
export const deleteBlogs = (data) => async dispatch =>
{
    try{
        const result = await delBlog(data);
        dispatch({
            type: DELETE_BLOG, 
            payload: result.data
        });
    }
    catch(e){
        console.log(e)
    }
}