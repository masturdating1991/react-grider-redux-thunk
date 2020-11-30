import types from './User.types'

const initial_state = [];


const userReducer = (state = initial_state, action) => {
    switch (action.type) {
        case types.FETCH_USER:
            return [...state, action.payload];
        default:
            return state;
    }
};



export default userReducer