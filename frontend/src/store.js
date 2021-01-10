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

const reducer = combineReducers({
  academyList: academyListReducer,
  academyDetails: academyDetailsReducer,
  academyDetailsByPianoId: academyDetailsByPianoIdReducer,
  pianoList: pianoListReducer,
  pianoDetails: pianoDetailsReducer,
  pianoListByAcademyId: pianosByAcademyIdReducer,
});
const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
