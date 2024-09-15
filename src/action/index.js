export const SET_HLS_URL = 'SET_HLS_URL';
export const ADD_HLS_URL = 'ADD_HLS_URL';
export const EDIT_HLS_URL = 'EDIT_HLS_URL';
export const REMOVE_HLS_URL = 'REMOVE_HLS_URL';

export const setHlsUrl = (url) => ({
  type: SET_HLS_URL,
  payload: url,
});
export const addHlsUrl = (url) => ({
    type : ADD_HLS_URL,
    payload: url,
})

export const editHlsUrl = (url) => ({
  type: EDIT_HLS_URL,
  payload: url,
});

export const removeHlsUrl = () => ({
  type: REMOVE_HLS_URL,
});
