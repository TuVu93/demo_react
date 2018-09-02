import React, {Component} from 'react';

class Header extends Component {

    render() {
        return(
            <div className='header-bg'>
                <button className='header-button'>Following</button>
                <button className='header-button'>Popular</button>
                <button className='header-button'>Explore</button>
            </div>
        )
    }
}

export default Header