import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import newsReducer from "./modules/News/duck/reducer";
import ReduxThunk from "redux-thunk";
const middlewares = [ReduxThunk];
const rootReducer = combineReducers({
  news: newsReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
