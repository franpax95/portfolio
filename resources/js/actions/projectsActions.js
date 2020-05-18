import axios from 'axios';
import { GET, LOADING, ERROR, SHOW } from '../types/projectsTypes';

export const get = () => async (dispatch) => {
    dispatch({ 
        type: LOADING 
    });

    try{
        const response = await axios.get('');
        dispatch({
            type: GET,
            payload: response.data
        });
    }catch(error){
        console.log(error.message);
        dispatch({
            type: ERROR,
            payload: error.message
        });
    }
}