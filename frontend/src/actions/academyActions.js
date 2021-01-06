import axios from 'axios';
import {
  ACADEMY_LIST_FAIL,
  ACADEMY_LIST_REQUEST,
  ACADEMY_LIST_SUCCESS,
  ACADEMY_DETAILS_FAIL,
  ACADEMY_DETAILS_REQUEST,
  ACADEMY_DETAILS_SUCCESS,
} from '../constants/academyConstants';

export const listAcademies = () => async (dispatch) => {
  try {
    dispatch({ type: ACADEMY_LIST_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get('/api/academies', config);

    dispatch({ type: ACADEMY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ACADEMY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAcademyDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ACADEMY_DETAILS_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/academies/${id}`, config);

    dispatch({ type: ACADEMY_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ACADEMY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
