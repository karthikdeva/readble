import * as API from '../utils/api';
import { GET_ALL_CATEGORIES, SET_CATEGORY } from './types';

export const getCategories = () => (dispatch, props) => {
 
  fetch(`${API.API_END_POINT}/categories`, API.GET_REQUEST_HEADER)
    .then(res => res.json())
    .then(json => dispatch({ type: GET_ALL_CATEGORIES, payload: json.categories }))
    
};


export const setCategory = category => dispatch => {
  dispatch({ type: SET_CATEGORY, payload: category });
};
