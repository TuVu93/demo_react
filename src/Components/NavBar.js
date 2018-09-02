import React from 'react';

function NavBar(props){
        return(            
        <div className='navBar-bg'>
            <button className='menu-icon'/>
            <button className='logo' onClick={() => {props.backToGrid()}}/>
            {props.screen === 'grid' && (
                <button className='search-icon'/>
            )}
            {props.screen === 'channel' && (
                <button className='setting-icon'/>
            )}
                
            </div>
        )
}

export default NavBar