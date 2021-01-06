import {
  ACADEMY_DETAILS_FAIL,
  ACADEMY_DETAILS_REQUEST,
  ACADEMY_DETAILS_SUCCESS,
  ACADEMY_LIST_FAIL,
  ACADEMY_LIST_REQUEST,
  ACADEMY_LIST_SUCCESS,
} from '../constants/academyConstants';

export const academyListReducer = (
  state = { loading: true, academies: [] },
  action
) => {
  switch (action.type) {
    case ACADEMY_LIST_REQUEST:
      return { loading: true, academies: [] };
    case ACADEMY_LIST_SUCCESS:
      return { loading: false, academies: action.payload };
    case ACADEMY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const academyDetailsReducer = (
  state = { loading: true, academy: {} },
  action
) => {
  switch (action.type) {
    case ACADEMY_DETAILS_REQUEST:
      return { loading: true, academy: {} };
    case ACADEMY_DETAILS_SUCCESS:
      return { loading: false, academy: action.payload };
    case ACADEMY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
