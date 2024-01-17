import React from 'react';
import './Tick.css';

function Tick(){
    return(
        <>
        <div className='app-container'>
            <div className='app-head'>
            <h1>
            <span className='initials'>JS</span>
            <span className='title'>Basic Tick App</span>
            </h1>
            </div>
            <div className='app-body'>

<p>
    <strong>{new Date().toLocaleTimeString()}</strong>
</p>
            </div>
        </div>
        </>
    );
}

export default Tick;