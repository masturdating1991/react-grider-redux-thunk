import types from './Posts.types'

const initial_state = [];


const postsReducer = (state = initial_state, action) => {
    switch (action.type) {
        case (types.FETCH_POSTS) :
            return action.payload;

        default:
            return state
    }
};

export default postsReducer