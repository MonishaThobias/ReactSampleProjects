import React from 'react';

function MyClock2(props){

    
        return(
            <>
<div className='app-container'>
            <div className='app-head'>
            <h1>
            <span className='initials'>{props.initials}</span>
            <span className='title'>{props.title}</span>
            </h1>
            </div>
            <div className='app-body'>
                <button>{props.date.toLocaleTimeString()}</button>
            </div>
        </div>
            </>
        );
   
}

export default MyClock2;