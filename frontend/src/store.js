import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  academyDetailsReducer,
  academyListReducer,
  academyDetailsByPianoIdReducer,
} from './reducers/academyReducers';

import {
  pianoListReducer,
  pianoDetailsReducer,
  pianosByAcademyIdReducer,
} from './reducers/pianoReducers';

import { userLoginReducer } from './reducers/userReducer';

const reducer = combineReducers({
  academyList: academyListReducer,
  academyDetails: academyDetailsReducer,
  academyDetailsByPianoId: academyDetailsByPianoIdReducer,
  pianoList: pianoListReducer,
  pianoDetails: pianoDetailsReducer,
  pianoListByAcademyId: pianosByAcademyIdReducer,
  userLogin: userLoginReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
