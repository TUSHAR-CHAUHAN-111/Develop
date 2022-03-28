import {combineReducers} from "redux";
import postReducer from "./posts";

const rootReducer =  combineReducers({
    data:postReducer,
});

export default rootReducer;