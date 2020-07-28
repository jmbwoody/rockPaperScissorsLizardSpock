import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../redux/reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import createSagaMiddleware from "redux-saga";
import mySaga from "./../sagas/index";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware, reduxImmutableStateInvariant())
    )
  );
  // then run the saga
  sagaMiddleware.run(mySaga);
  return store;
}
