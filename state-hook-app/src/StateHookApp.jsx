import React, { useState } from 'react';
import './state-hook-app.css';

function StateHookApp(){
    const [count,setCount] = useState(0);
return(
    <>
<div className='app-container'>
            <div className='app-head'>
            <h1>
            <span className='initials'>JS</span>
            <span className='title'>State Hook App</span>
            </h1>
            </div>
            <div className='app-body'>
                <p>You click the button <span><strong>{count}</strong></span> times.</p>
                <button onClick={()=> setCount(count+1) }> Click Me </button>
            </div>
        </div>
    </>
);

}

export default StateHookApp;