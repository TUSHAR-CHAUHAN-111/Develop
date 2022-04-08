import {allPostRequest} from "./posts";
import {all} from 'redux-saga/effects';
import { allUserRequest } from "./auth";

function* rootSagas() {
    yield all([
        allPostRequest(), 
        allUserRequest(), 
    ])
};

export default rootSagas;