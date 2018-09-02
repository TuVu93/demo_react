import React from 'react';

function ChannelGrid(props) {
    const channel = props.channel;
    
    return <figure className='channel-container' onClick={() => {props.onChannelSelect(channel)}}>
        <img className='channel-image' src={channel.imageSrc} alt={channel.text}></img>
        <div className='channel-overlay'/>
        <p className='channel-text'>{channel.text}</p>
    </figure>
}

export default ChannelGrid