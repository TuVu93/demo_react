import React from 'react';

function Login(props) {

      return (
        <div>
            <div className='login-overlay'>
                <div className='login-bg'/>
                <div className='big-wave'/>
                <div className='small-wave'/>
                <div className='n-logo'/>
                <div className='username-box'/>
                <div className='password-box'/>
                <div className='user-icon'/>
                <div className='pass-icon'/>
                <button className='create-acc'>Create Account</button>
                <button className='help'>Need Help?</button>
            </div>
            <form>
                <input type="text" className='username' placeholder="Username"/>
                <input type="text" className='password' placeholder="Password"/>
                <button className='login-button'  onClick={() => {props.backToGrid()}}>Get Started!</button>
            </form>
        </div>
        
      )  
}

export default Login