import React,{Component} from 'react';
import './greeting.css';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import Greeting from './Greeting';


class LoginControl extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false
        }
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);

    }
handleLoginClick (){
    this.setState(
        {isLoggedIn : true}
    )
}
handleLogoutClick(){
    this.setState(
        {isLoggedIn : false}
    )
}

    render(){
        const {isLoggedIn} = this.state;
        let button;
        if(isLoggedIn){
            button =<LogoutButton onClick ={this.handleLogoutClick}/>;
        }
       else{
        button = <LoginButton onClick={this.handleLoginClick}/>
       }

return(
    <>
    <div className='app-container'>
           
            <div className='app-body'>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        </div>
    </>
);


    }
}

export default LoginControl;