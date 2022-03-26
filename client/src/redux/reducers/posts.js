import {
  CREATE_POSTS,
  CREATE_POSTS_SUCCESS,
  DELETE_POSTS,
  DELETE_POSTS_SUCCESS,
  GET_POST,
  GET_POST_SUCCESS,
  UPDATE_POSTS,
  UPDATE_POSTS_SUCCESS,
  UPDATE_SINGLE_POST,
} from "../constants";
import {select} from 'redux-saga/effects';
const postReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        payload,
      };
    case CREATE_POSTS:
    case CREATE_POSTS_SUCCESS:
      return { ...state, payload };

    case UPDATE_POSTS:
      debugger
      return {...state,payload};
        // return state.map((post)=>post._id !== payload._id ? payload : post);
    case UPDATE_POSTS_SUCCESS:
      debugger
      return { ...state };
      // return  state && state.posts.map((post)=>post._id === payload._id ? payload : post);
    
    // case DELETE_POSTS:
    //   debugger
    //   return {...state,payload};
      // return state.filter((post)=>post._id !== payload);
    // case DELETE_POSTS_SUCCESS:
    //   debugger
    //   return state.filter((post)=>post._id !== payload);
    case UPDATE_SINGLE_POST:
        return {...state,payload};

    default:
      return state;
  }
};

export default postReducer;
