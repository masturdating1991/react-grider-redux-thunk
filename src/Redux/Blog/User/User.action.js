import types from './User.types';


export const fetchUserSuccess = (data) => {
    return {
        type: types.FETCH_USER,
        payload: data
    }
};



