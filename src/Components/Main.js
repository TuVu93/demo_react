import React, {Component} from 'react';
import NavBar from './NavBar';
import Header from './Header';
import ChannelPage from './ChannelPage';
import Channel from './Channel';
import Login from './Login';

const channels = [{
        id: 0,
        imageSrc: "/img/Fashion.png",
        text: "Fashion"
    }, {
        id: 1,
        imageSrc: "/img/Science.png",
        text: "Science"
    }, {
        id: 2,
        imageSrc: "/img/Auto.png",
        text: "Auto"
    }, {
        id: 3,
        imageSrc: "/img/Technology.png",
        text: "Technology"
    }, {
        id: 4,
        imageSrc: "/img/Finances.png",
        text: "Finances"
    }, {
        id: 5,
        imageSrc: "/img/Enviroment.png",
        text: "Enviroment"
}]

var selectedChannel = {
    id: 1,
    imageSrc: "/img/Science.png",
    text: "Science"
    };

class Main extends Component {

    constructor () {
        super()
        this.state = {
            screen: 'login' //display channel grid
        }
        this.channelSelect = this.channelSelect.bind(this);
        this.backToGrid = this.backToGrid.bind(this);
    }

    channelSelect(selected) {
        this.setState({
            screen: 'channel'
        })
        selectedChannel = selected;
    }

    backToGrid() {
        this.setState({
            screen: 'grid'
        })
    }

    render() {
        return(
        <div className='main'>
            {this.state.screen === 'login' && (
                <Login backToGrid={this.backToGrid}/>
            )}
            {this.state.screen === 'grid' && (
                <div>
                    <NavBar screen={this.state.screen} backToGrid={this.backToGrid}/>
                    <Header/>
                    <ChannelPage channels={channels} onChannelSelect={this.channelSelect}/>
                </div>
            )}
            {this.state.screen === 'channel' && (
                <div>
                    <NavBar screen={this.state.screen} backToGrid={this.backToGrid}/>
                    <Channel selectedChannel={selectedChannel}/>
                </div>
            )}
        </div>
        )
    }
}

export default Main
