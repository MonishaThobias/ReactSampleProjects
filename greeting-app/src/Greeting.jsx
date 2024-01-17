import React from 'react';
import './greeting.css';
import UserGreeting from './GuestGreeing';
import GuestGreeting from './UserGreeting';


function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <GuestGreeting />
  }

    return <UserGreeting />
}

export default Greeting;