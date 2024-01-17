import React from "react";

function LogoutButton(props){
    return(
        <>
        <div className='app-body'>
            <button onClick={props.onClick}>Logout</button>    
            </div>
        </>
    );
}

export default LogoutButton;