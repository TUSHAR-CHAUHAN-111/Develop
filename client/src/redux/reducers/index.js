import {combineReducers} from "redux";
import postReducer from "./posts";
import AuthReducer from "./auth";

const rootReducer =  combineReducers({
    data:postReducer,
    auth:AuthReducer
});

export default rootReducer;