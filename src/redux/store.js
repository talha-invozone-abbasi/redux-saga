import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducers } from "./ducks/users";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/root";
const reducers = combineReducers({
  users: userReducers,
});
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = createStore(reducers, {}, applyMiddleware(...middleware));
sagaMiddleware.run(watcherSaga);
