import React,{Component} from 'react';

class MyClock1 extends Component{

    render(){
        return(
            <>
<div className='app-container'>
            <div className='app-head'>
            <h1>
            <span className='initials'>{this.props.initials}</span>
            <span className='title'>{this.props.title}</span>
            </h1>
            </div>
            <div className='app-body'>
                <button>{this.props.date.toLocaleTimeString()}</button>
            </div>
        </div>

            </>
        );
    }
}

export default MyClock1;