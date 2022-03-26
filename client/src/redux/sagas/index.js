import {allPostRequest} from "./posts";
import {all} from 'redux-saga/effects';

function* rootSagas() {
    yield all([
        allPostRequest(),  
    ])
};

export default rootSagas;