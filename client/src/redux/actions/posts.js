import * as types from "../constants";

export const getPosts = (post) => {
    return {
        type: types.GET_POST,
        payload:post,
    };
};

export const getPostsSuccess = (post) => {
    return {
        type: types.GET_POST_SUCCESS,
        payload:post,
    };
};

export const getPostsFailure = (error) => {
    return {
        type: types.GET_POST_FAILURE,
        payload:error,
    };
};




export const createPosts = (posts) => {
    return {
        type: types.CREATE_POSTS,
        payload:posts,
    };
};

export const createPostsSuccess = (posts) => {
    return {
        type: types.CREATE_POSTS_SUCCESS,
        payload:posts,
    };
};

export const createPostsFailure = (error) => {
    return {
        type: types.CREATE_POSTS_FAILURE,
        payload:error,
    };
};



export const updatePosts = (postData) => {
    return {
        type: types.UPDATE_POSTS,
        payload:postData,
    };
};

export const updatePostsSuccess = (postData) => {
    return {
        type: types.UPDATE_POSTS_SUCCESS,
        payload:postData,
    };
};

export const updatePostsFailure = (error) => {
    return {
        type: types.UPDATE_POSTS_FAILURE,
        payload:error,
    };
};




export const deletePosts = (data) => {
    return {
        type: types.DELETE_POSTS,
        payload:data,
    };
};

export const deletePostsSuccess = (data) => {
    return {
        type: types.DELETE_POSTS_SUCCESS,
        payload:data,
    };
};

export const deletePostsFailure = (error) => {
    return {
        type: types.DELETE_POSTS_FAILURE,
        payload:error,
    };
};

export const registerUpdatedPost=(payload)=>{
    return {
        type:types.UPDATE_SINGLE_POST,
        payload
    }
}



export const likePosts = (data) => {
    return {
        type: types.LIKE_POSTS,
        payload:data,
    };
};

export const likePostsSuccess = (data) => {
    return {
        type: types.LIKE_POSTS_SUCCESS,
        payload:data,
    };
};

export const likePostsFailure = (error) => {
    return {
        type: types.LIKE_POSTS_FAILURE,
        payload:error,
    };
};