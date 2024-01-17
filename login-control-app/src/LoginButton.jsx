import React from "react";

function LoginButton(props){
    return(
        <>
        
        
            <div className='app-body'>
            <button onClick={props.onClick}>Login</button>    
            </div>
        
        </>
    );
}

export default LoginButton;