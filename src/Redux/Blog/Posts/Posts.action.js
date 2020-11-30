import types from './Posts.types';


export const fetchPostsSuccess = (data) => {
    return {
        type: types.FETCH_POSTS,
        payload: data
    }
};





