import React from 'react';

function GuestGreeting(){

    return(
    <>
    <div className='app-container mt'>
            <div className='app-head'>
            <h1>
            <span className='initials'>JS</span>
            <span className='title'>Guest Greeting</span>
            </h1>
            </div>
            <div className='app-body'>
                <p>Hello</p>
                <button>Please Sign Up!</button>
            </div>
        </div>
    </> 
    );
}

export default GuestGreeting;