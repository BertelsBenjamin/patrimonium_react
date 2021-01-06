import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  academyDetailsReducer,
  academyListReducer,
} from './reducers/academyReducers';

const reducer = combineReducers({
  academyList: academyListReducer,
  academyDetails: academyDetailsReducer,
});
const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
