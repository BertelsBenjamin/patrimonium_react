import axios from 'axios';
import {
  ACADEMY_DETAILS_FAIL,
  ACADEMY_DETAILS_REQUEST,
  ACADEMY_DETAILS_SUCCESS,
} from '../constants/academyConstants';
import {
  PIANO_LIST_FAIL,
  PIANO_LIST_REQUEST,
  PIANO_LIST_SUCCESS,
  PIANO_DETAILS_FAIL,
  PIANO_DETAILS_REQUEST,
  PIANO_DETAILS_SUCCESS,
  PIANO_BY_ACADEMY_REQUEST,
  PIANO_BY_ACADEMY_SUCCESS,
  PIANO_BY_ACADEMY_FAIL,
} from '../constants/pianoConstants';

export const listPianos = () => async (dispatch) => {
  try {
    dispatch({ type: PIANO_LIST_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get('/api/pianos', config);

    dispatch({ type: PIANO_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PIANO_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPianoDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PIANO_DETAILS_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/pianos/${id}`, config);

    dispatch({ type: PIANO_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PIANO_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPianosByAcademyId = (academy_id) => async (dispatch) => {
  try {
    dispatch({ type: PIANO_BY_ACADEMY_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(
      `/api/pianos/academy/${academy_id}`,
      config
    );

    dispatch({ type: PIANO_BY_ACADEMY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PIANO_BY_ACADEMY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
