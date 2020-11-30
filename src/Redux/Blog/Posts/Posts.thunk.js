import jsonPlaceholder from "../../../Apis/jsonPlaceholder";
import {fetchPostsSuccess} from './Posts.action'


export const fetchPosts = () => async (dispatch, getState) => {
    await jsonPlaceholder.get(`/posts`).then(res => {
        dispatch(fetchPostsSuccess(res.data));
    })
};





