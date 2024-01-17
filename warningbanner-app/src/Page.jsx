import React,{Component} from "react";
import './warning-banner.css';
import WarningBanner from "./WarningBanner";

class Page extends Component{
    constructor(props){
        super(props);
this.state ={showWarning:true}
this.handleToggleClick = this.handleToggleClick.bind(this);
    }
handleToggleClick (){

    this.setState(
        state=>({
            showWarning:!state.showWarning
        })
    )
}

    render(){
        const {showWarning} = this.state;
        return(
            <>
            <div className='app-container'>
            <div className='app-head'>
            <h1>
            <span className='initials'>JS</span>
            <span className='title'>Warning Banner App</span>
            </h1>
            </div>
            <div className='app-body'>
                <WarningBanner warn={showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        </div>
            </>
        );
    }
}

export default Page;