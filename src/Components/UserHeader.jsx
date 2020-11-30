import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchUser} from "../Redux/Blog/User/User.thunk";


function UserHeader({userId}) {
    const user = useSelector(state => state.users.find(user => user.id === userId));
    // const user = users.find(user => user.id === userId);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchUser(userId))
    }, []);

    return (
        <div className='header'>
            {user && user.name}
        </div>
    );
}

export default UserHeader;