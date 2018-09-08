import React from 'react';

function Login(props) {
    
    return (
        <div className='login-container'>
            <div className='login-overlay'>
                <div className='login-bg'></div>
            </div>
            <div className='login-logo'>
                <div className='big-wave'/>
                <div className='small-wave'/>
                <div className='n-logo'/>
            </div>
            <form className='login-form'>
                <div className='username-box'>
                    <div className='user-icon'/>
                    <input type="text" className='username' placeholder="Username"/>
                </div>
                <div className='password-box'>
                <div className='pass-icon'/>
                <input type="text" className='password' placeholder="Password"/>
                </div>
                <button className='login-button'  onClick={() => {props.backToGrid()}}>Get Started</button>
                <div className='footer'>
                    <button className='create-acc'>Create Account</button>
                    <button className='help'>Need Help?</button>
                </div>
            </form>
        </div>

    )  
}

export default Login