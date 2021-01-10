import {
  PIANO_LIST_REQUEST,
  PIANO_LIST_SUCCESS,
  PIANO_LIST_FAIL,
  PIANO_DETAILS_REQUEST,
  PIANO_DETAILS_SUCCESS,
  PIANO_DETAILS_FAIL,
  PIANO_BY_ACADEMY_REQUEST,
  PIANO_BY_ACADEMY_SUCCESS,
  PIANO_BY_ACADEMY_FAIL,
} from '../constants/pianoConstants';

export const pianoListReducer = (
  state = { loading: true, pianos: [] },
  action
) => {
  switch (action.type) {
    case PIANO_LIST_REQUEST:
      return { loading: true, pianos: [] };
    case PIANO_LIST_SUCCESS:
      return { loading: false, pianos: action.payload };
    case PIANO_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const pianoDetailsReducer = (
  state = { loading: true, piano: {} },
  action
) => {
  switch (action.type) {
    case PIANO_DETAILS_REQUEST:
      return { loading: true, piano: {} };
    case PIANO_DETAILS_SUCCESS:
      return { loading: false, piano: action.payload };
    case PIANO_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const pianosByAcademyIdReducer = (
  state = { loading: true, pianos: [] },
  action
) => {
  switch (action.type) {
    case PIANO_BY_ACADEMY_REQUEST:
      return { loading: true, pianos: [] };
    case PIANO_BY_ACADEMY_SUCCESS:
      return { loading: false, pianos: action.payload };
    case PIANO_BY_ACADEMY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
