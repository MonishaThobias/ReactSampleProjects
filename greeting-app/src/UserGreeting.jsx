import React from 'react';

function UserGreeting(){

    return(
    <>
    <div className='app-container'>
            <div className='app-head'>
            <h1>
            <span className='initials'>JS</span>
            <span className='title'>User Greeting</span>
            </h1>
            </div>
            <div className='app-body'>
                <p>Hello, User </p>
                <button>Welcome Back!</button>
            </div>
        </div>
    </> 
    );
}

export default UserGreeting;