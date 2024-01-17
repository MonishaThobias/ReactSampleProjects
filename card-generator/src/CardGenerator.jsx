import React,{Component} from 'react';
import './CardGenerator.css';

class CardGenerator extends Component{

    constructor(props){
        super(props);

        this.state = {
            name:'',
            collegeName:'',
            location:'',
            validationErrors : {},
            submitted : 0
        }
 this.handleOnChange=this.handleOnChange.bind(this);
 //this.handleOnChangeClgName=this.handleOnChangeClgName.bind(this);
 //this.handleOnChangeLocation=this.handleOnChangeLocation.bind(this);
 this.handleOnSubmit = this.handleOnSubmit.bind(this);
 this.validateFields = this.validateFields.bind(this);

    }
    handleOnChange(e){
        const target = e.target;
        const name = target.name;
        const value = target.value
        
        this.setState(
            {
                [name]:value,
             
            }
        )
    
    }
    handleOnChange(e){
//console.log(e);
        const target = e.target;
        //console.log(target);
        const name = target.name;
        const value = (target.type === "text"  ? target.value :  null)
        this.setState({
            [name]:value
        })
    }

    /* handleOnChangeClgName(e){
        const target = e.target;
        const collegeName = target.collegeName;
        const value = target.value;
        this.setState({
            [collegeName]:value
        })
    }
    handleOnChangeLocation(e){
        const target = e.target;
        const location = target.location;
        const value = target.value;
        this.setState({
            [location]:value
        })
    }
 */
    validateFields(){
        const{name,collegeName,location} = this.state
        const errors = {}
        
if(!name){
    errors['name']='Please enter name'
}
if(!collegeName){
    errors['collegeName']='Please enter college name'
}
if(!location){
    errors['location']='Please enter location'
}

this.setState({
    validationErrors:errors
  })
  return Object.keys(errors).length === 0
console.log( Object.keys(errors).length)

    }

    handleOnSubmit(e){
        e.preventDefault();
const {submitted,name,collegeName,location} = this.state;
const isFormValid = this.validateFields()
if(isFormValid){
    this.setState((state)=>{
            return { 
                submitted:state.submitted+1,
                name:'',
                collegeName:'',
                location:''
             }

        }
    )
}
    }

    render(){
        const{
            name:nameError,
            collegeName:collegeNameError,
            location:locationError
        } = this.state.validationErrors;
        const{name,collegeName,location,submitted} = this.state

        return(
            <>
            <div className='app-container'>
                <div className='app-head'>
                <h1>
                <span className='fa fa-id-card'></span>
                <span className='title'>Student Id Card Generator</span>
                </h1>
                </div>
                <div className='app-body'>
                    <div className="id-card">
                        <div className="input-form">
                        <h2>Input Form</h2>
    <form onSubmit={this.handleOnSubmit}>
        <div className="inputs">
           <label>Enter Name: &nbsp;</label>
           <em>{nameError}</em><br/>
            <input type="text" placeholder="Enter Name" name='name'
            value={name} onChange={this.handleOnChange} />
        </div>
        <div className="inputs">
           <label>Enter College Name: &nbsp;</label>
           <em>{collegeNameError}</em><br/>
            <input type="text" placeholder="Enter College Name" name='collegeName'
            value={collegeName} onChange={this.handleOnChange} />
        </div>
        <div className="inputs">
            <label>Enter Location: &nbsp;</label>
            <em>{locationError}</em><br/>
           <input type="text" placeholder="Enter Location" name='location'
            value={location}  onChange={this.handleOnChange} />
        </div>
    
        <button type="submit">Generate Id</button>
        <p>Form submitted {submitted} times.</p>
    </form>
                        </div>
                        <div className="output-card">
    <h2>Generated Id</h2>
    <div className="card-wrapper">
        <div className="user-card">
            <span className="fa fa-user-circle"></span>
        </div>
        <div className="card-info">
    <h3>Name : <span>{name}</span></h3>
    <h3>College Name : <span>{collegeName}</span></h3>
    <h3>Location : <span>{location}</span></h3>
    
        </div>
    </div>
                        </div>
                    </div>
                </div>
            </div>

            </>
        );
    }
}

export default CardGenerator;