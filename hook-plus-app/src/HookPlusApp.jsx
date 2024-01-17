import React from 'react';
import './hook-plus-app.css';
import { useState } from 'react';

function HookPlusApp(){

    const [count,SetCount] = useState(1000);
function increase(){
    SetCount(count+1);
}
function decrease(){
    SetCount(count-1);
}
    return(
        <>
<div className='app-container'>
            <div className='app-head'>
            <h1>
            <span className='initials'>JS</span>
            <span className='title'>Hook Plus App</span>
            </h1>
            </div>
            <div className='app-body'>
                <p>It shows React Hook State - <span>{count}</span></p>
                <p><span className='plus'><button onClick={increase}>Plus + </button></span>
                <span className='minus'><button onClick={decrease}>Minus - </button></span></p>
            </div>
        </div>
        </>
    );
}

export default HookPlusApp;