import _ from 'lodash';
import jsonPlaceholder from "../../../Apis/jsonPlaceholder";
import {fetchUserSuccess} from './User.action'


export const fetchUser = (id) => dispatch => {
    _fetchUser(id, dispatch)
};

const _fetchUser = _.memoize(async (id, dispatch) => {
    const res = await jsonPlaceholder.get(`/users/${id}`);
    dispatch(fetchUserSuccess(res.data))
});

// وقتی ما رکوئست میزدیم به ازای یک آیدی 10 تا رکوئست میخورد، الان با کتابخونه لودش کاری کردیم که به ازای هر آیدی یکبار رکوئست بخوره

