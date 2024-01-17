import React,{Component} from 'react';
import './displayinfo.css';

class DisplayInfo extends Component{


    render(){
        let info = ( <div className='intro'>
            <p>Technologies training in Tamil. </p>
        <p>React JS training in Tamil.</p>
        </div>
        )
        return(
            <>
            <div className='app-container'>
                <div className='app-head'>
                    <h1><span className='initials'>JS</span>
                    <span className='title'>DisplayInfo Basic App</span></h1>
                </div>
                <div className='app-body'>
                    <h1>Maanavan Learn Code</h1>
                    <p>MERN,MEAN,Spring</p>
                    <p>Angular JS - Frontend Framework</p>
                    <p>Redux - State container for JS apps</p>
                     
                    {info} 
                     
                </div>
            </div>
            </>
        );
    }
}

export default DisplayInfo;