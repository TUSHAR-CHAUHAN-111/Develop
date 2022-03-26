import {createStore,applyMiddleware,compose} from "redux";
import createSagaMiddleware from "redux-saga";
// import "regenerator-runtime/runtime";
import rootReducer from "../redux/reducers/index";
import rootSagas from  "../redux/sagas/index";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,compose(applyMiddleware(sagaMiddleware),    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

sagaMiddleware.run(rootSagas);

export default store;