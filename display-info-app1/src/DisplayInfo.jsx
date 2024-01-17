import React,{Component} from 'react';
import './display-info.css';

class DisplayInfo extends Component{
constructor(){
    super();
    console.log("MLC",this)
    this.state = {displayinfo:true,initials:'JS',title:'DisplayInfo App'}
}

    render(){
        //Destructuring
        const {displayinfo,initials,title} = this.state;
        let info = displayinfo ? (
            <div className='intro'>
                <p>Technologies Training in Tamil.</p>
                <p>React JS Training in Tamil.</p>
            </div>
        ): null ;

        return(
            <>
            <div className='app-container'>
                <div className='app-head'>
                    <h1><span className='initials'>{initials}</span>
                    <span className='title'>{title}</span></h1>
                </div>
                <div className='app-body'>
                    <h1>MLC</h1>
                    <p>MERN,MEAN,Spring</p>
                    <p>Angular JS - Frontend Framework.</p>
                    <p>Redux - State container for JS apps.</p>

                    {info}
                   
                                   </div>
            </div>
            </>
        );
    }
}

export default DisplayInfo;