import React from 'react';

function Post(props) {
    const post = props.post;
    console.log({post});
    return( 
    <div className='post-container'>
        <p className='post-title'>{post.title}</p>
        <button className='post-src-icon'/>
        <p className='post-src'>{post.src}</p>
        <button className='post-date-icon'/>
        <p className='post-date'>{post.date}</p>
    </div>
    )
}

export default Post