import { GET, LOADING, ERROR, SHOW } from '../types/projectsTypes';

const INITIAL_STATE = {
    projects: [],
    project: {},
    loading: false,
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET:
            return {
                ...state,
                projects: action.payload,
                loading: false,
                error: ''
            }

        case SHOW:
            return {
                ...state,
                project: action.payload,
                loading: false,
                error: ''
            }

        case LOADING:
            return {
                ...state, 
                loading: true
            }
        
        case ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        default:
            return state;
    }
}