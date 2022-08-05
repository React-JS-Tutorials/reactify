import {CREATE_BLOG, RETRIEVE_BLOGS, UPDATE_BLOG, DELETE_BLOG} from "../actions/index";

const initialState = {
    blogs: []
};

export const blogReducer = (state = initialState, action) =>{
    const {type, payload} = action;
    switch (type){
        case CREATE_BLOG:
            return {
                ...state,
                blogs: [
                    ...state.blogs, 
                    {
                       payload 
                    }

                ]
            }
        case RETRIEVE_BLOGS:
            return {
                ...state,
                blogs: payload
            }
        case UPDATE_BLOG:
            return state.blogs.map((blog) => {
                if (blog.id === payload.id) {
                    return {
                        ...blog,
                        ...payload,
                    };
                } else {
                    return blog;
                }
            });

        case DELETE_BLOG:
            return {
                ...state,
                ...state.blogs.filter(({ id }) => id !== payload.id)
            }
        default:
            return state;
    }
}