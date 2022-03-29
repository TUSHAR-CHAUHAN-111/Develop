import { call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_POSTS,
  DELETE_POSTS,
  GET_POST,
  UPDATE_POSTS,
} from "../constants";
import {
  createPostsFailure,
  createPostsSuccess,
  getPostsFailure,
  getPostsSuccess,
  updatePostsSuccess,
  updatePostsFailure,
  deletePostsSuccess,
  deletePostsFailure,
  registerUpdatedPost,
} from "../actions/posts";
import {
  fetchPostsApi,
  createPostsApi,
  updatePostsApi,
  deletePostsApi,
} from "../../api/Api";
import { select } from "redux-saga/effects";
function* getPostsReq(action) {
  try {
    const postsData = yield call(fetchPostsApi, action.payload);
    let { data } = postsData;
    console.log(data);
    if (postsData.status === 200) {
      yield put(getPostsSuccess(data));
    } else {
      yield put(getPostsFailure(data));
    }
  } catch (error) {
    console.log(error);
  }
}

function* createPostsReq(action) {
  try {
    const createPost = yield call(createPostsApi, action.payload);
    let { data } = createPost;
    if (createPost.status === 200) {
      yield put(createPostsSuccess(data));
    } else {
      yield put(createPostsFailure(data));
    }
  } catch (error) {
    console.log(error);
  }
}

function* updatePostsReq(action) {
  debugger;
  // state.map((post)=>post._id !== payload._id ? payload : post);

  // console.log(updatePost);
  // yield put (updatePostsSuccess(updatePost));
  try {
    const updatePost = yield call(updatePostsApi, action.payload);
    const { data } = updatePost;
    console.log("updatedPostSaga", updatePost);
    if (updatePost.status === 200) {
      // let  statePayload = yield select((state)=>state?.posts?.payload);
      // console.log('statePayload: ', statePayload);
      // let clonePayload= [...statePayload];
      // console.log('state',statePayload);
      //     const updatedId = clonePayload.findIndex(post=>post._id === action.payload._id);
      //     if(updatedId !== -1){
      //       clonePayload[updatedId] = action.payload;
      //       console.log('cloneData: ', clonePayload);
      //   }
      // yield put(registerUpdatedPost(statePayload));
      yield put(getPostsSuccess(data));
    } else {
      yield put(updatePostsFailure(data.message.error));
    }
  } catch (error) {
    console.log(error);
  }
}

function* deletePostsReq(action) {
  try {
    debugger;
    const deletePost = yield call(deletePostsApi, action.payload);
    let { data } = deletePost;
    yield put(getPostsSuccess(data));
    console.log(deletePost);
    // if(deletePost.status === 200){
    //   yield put(deletePostsSuccess(deletePost));
    // }else{
    //   yield put(deletePostsFailure(deletePost));
    // }
  } catch (error) {
    console.log(error);
  }
}

export function* allPostRequest() {
  yield takeLatest(GET_POST, getPostsReq);
  yield takeLatest(CREATE_POSTS, createPostsReq);
  yield takeLatest(UPDATE_POSTS, updatePostsReq);
  yield takeLatest(DELETE_POSTS, deletePostsReq);
}
