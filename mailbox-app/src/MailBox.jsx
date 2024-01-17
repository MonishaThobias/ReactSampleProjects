import React from 'react';
import './mailbox.css';

function MailBox(props){
    const unreadMessages = props.unreadMessages;
    return(
        <>
        <div className='app-container'>
            <div className='app-head'>
            <h1>
            <span className='initials'>JS</span>
            <span className='title'>MailBox App</span>
            </h1>
            </div>
            <div className='app-body'>
                <h3>Hello,World!</h3>
{unreadMessages.length >0 && 
<h2>
    You have {unreadMessages.length} unread messages.
    </h2>
    
    }

            </div>
        </div>
        </>
    );
}

export default MailBox;