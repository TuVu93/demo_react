import React from 'react';
import Post from './Post';

function Channel(props) {
    console.log(props);
    const channel = props.selectedChannel;
    const name = channel.text + " Channel";
    const posts = [{
        id: 0,
        title: "NASA goes to Mars: astronauts could land on Red Planet by 2039",
        src: "Space.com",
        date: "Apr 5, 2015"
    }, {
        id: 1,
        title: "Archeologists discovered lost city in Honduran jungle",
        src: "CNN",
        date: "Apr 3, 2015"
    }, {
        id: 3,
        title: "The balloons that could fly tourists to the edge of space",
        src: "CNN",
        date: "Apr 1, 2015"
    },{
        id: 0,
        title: "NASA goes to Mars: astronauts could land on Red Planet by 2039",
        src: "Space.com",
        date: "Apr 5, 2015"
    }]

    return <div >
        <figure className='channel-board'>
            <img className='cover' src={channel.imageSrc} alt={channel.text}></img>
            <p className='text-cover'>{name}</p>
            <button className='follow-button'>Following</button>
            <p className='follower'>123 followers</p>
        </figure>
        {posts.map((post, index) => <Post key={index} post = {post}/>)}
    </div>
}

export default Channel