import React,{Component} from 'react';
import './clock.css';

class MyClock extends Component{
    constructor(props){
        super(props);
this.state = {
    date:new Date(),
    initials:'JS',
    title:'MyClock App'
}

    }

    componentDidMount(){
        this.timerID = setInterval(
 () => this.tick(),1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }
tick(){
    this.setState(
        {
            date:new Date()
        }
    );
}

    render(){
        const {date,initials,title}=this.state;
        return(
            <>
            <div className='app-container'>
            <div className='app-head'>
            <h1>
            <span className='initials'>{initials}</span>
            <span className='title'>{title}</span>
            </h1>
            </div>
            <div className='app-body'>
                <button>{date.toLocaleTimeString()}</button>
            </div>
        </div>
            </>
        );
    }
}

export default MyClock;