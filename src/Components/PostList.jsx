import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchPosts} from "../Redux/Blog/Posts/Posts.thunk";
import UserHeader from "./UserHeader";

function PostList() {

    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);


    return (
        <div className='ui relaxed divided list'>
            {posts.map(post =>
                <div className='item' key={post.id}>
                    <i className='large middle aligned icon user'/>
                    <div className='content'>
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>

                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            )}
        </div>
    );
}


export default PostList;