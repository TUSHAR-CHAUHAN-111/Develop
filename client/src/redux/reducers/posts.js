import {
  CREATE_POSTS,
  CREATE_POSTS_SUCCESS,
  DELETE_POSTS,
  DELETE_POSTS_SUCCESS,
  GET_POST,
  GET_POST_SUCCESS,
  LIKE_POSTS,
  LIKE_POSTS_SUCCESS,
  UPDATE_POSTS,
  UPDATE_POSTS_SUCCESS,
  UPDATE_SINGLE_POST,
} from "../constants";

const postReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        posts:action.payload,
      };
    case CREATE_POSTS:
    case CREATE_POSTS_SUCCESS:
      return { ...state, posts:action.payload };

      
      case UPDATE_POSTS:
        return {...state,posts:action.payload};
        
        case LIKE_POSTS:
        return {...state,posts:action.payload};
      case LIKE_POSTS_SUCCESS:
        return{...state}; 
    case UPDATE_POSTS_SUCCESS:
      return { ...state };
    
    case DELETE_POSTS:
      return {...state,posts:action.payload};
    // case UPDATE_SINGLE_POST:
    //     return {...state,posts:action.payload};


    default:
      return state;
  }
};

export default postReducer;
