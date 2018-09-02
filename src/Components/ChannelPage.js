import React from 'react';
import ChannelGrid from './ChannelGrid';

function ChannelPage(props) {
    const a = props.channels;
    console.log({a});
    return( 
    <div>
        <div className="channels-grid">
            {props.channels.map((channel, index) => <ChannelGrid key={index} channel = {channel} onChannelSelect={props.onChannelSelect}/>)}
        </div>
    </div>
    )
}

export default ChannelPage