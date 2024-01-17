import React from 'react';
import './clock.css';
import MyClock1 from './MyClock1';
import MyClock2 from './MyClock2';

function Clock(){
    return(
        <>
        <p className='para'>
            It shows the result of class based component and function based component.
        </p>
<h3>
    <MyClock1 initials='JS' title= 'Class Based Component' date={new Date()}/>
</h3>
<h3>
  <MyClock2 initials='JS' title= 'Function Based Component' date={new Date()}/>  
</h3>
        </>
    );
}

export default Clock;