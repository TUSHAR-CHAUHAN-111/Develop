import { call, put, takeLatest } from "redux-saga/effects";
import { SIGN_IN, SIGN_UP } from "../constants";
import { signInFailure, signInSuccess, signUpFailure, signUpSuccess } from "../actions/auth";
import {
    singInApi,
    singUpApi
} from "../../api/Api";

function* getUserSignInReq(action){
    try {
      const user = yield call(singInApi,action.payload);
      console.log("userSignInSaga",user);
      const {data} = user;
  
      if(user.status === 200){
        yield put(signInSuccess(data));
      }else{
        yield put(signInFailure(data.error));
      }
  
    } catch (error) {
      console.log(error);
    }
  
  }

  function* getUserSignUpReq(action){
    try {
      const userSignUp = yield call(singUpApi,action.payload);
      console.log("userSignUpSaga",userSignUp);
      const {data} = userSignUp;
  
      if(userSignUp.status === 200){
        yield put(signUpSuccess(data));
      }else{
        yield put(signUpFailure(data.error));
      }
  
    } catch (error) {
      console.log(error);
    }
  
  }
  
  export function* allUserRequest() {
    yield takeLatest(SIGN_IN, getUserSignInReq);
    yield takeLatest(SIGN_UP, getUserSignUpReq);
  }
  