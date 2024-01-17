import React from 'react';
import { useState } from 'react';
import './hook-timer.css';

function HookTimer(){

    const [time,setTime] = useState( now() );
    function now(){
        return new Date().toLocaleTimeString();
    }
function updateTime(){
    setTime(
        now()
    );
}

setInterval(updateTime,1000);
    return(
        <>
<div className='app-container'>
            <div className='app-head'>
            <h1>
            <span className='initials'>JS</span>
            <span className='title'>Hook Timer App</span>
            </h1>
            </div>
            <div className='app-body'>
                <p>It shows the time.</p>
                <button>{time}</button>
            </div>
        </div>

        </>
    );
}

export default HookTimer;