import React from 'react';
import './Tick.css';

function Tick(props){
    return(
        <>
        <div className='app-container'>
            <div className='app-head'>
            <h1>
            <span className='initials'>JS</span>
            <span className='title'>Tick Props Sharing App</span>
            </h1>
            </div>
            <div className='app-body'>
                <p>
                    <strong>
                       {/*  {props.date.toLocalTimeString()} */}
                        {props.date.toLocaleTimeString()}
                    </strong>
                </p>
            </div>
        </div>
        </>
    );
}

export default Tick;