import React,{Component} from 'react';
import './form-validation.css';

class FormValidation extends Component{
constructor(props){
    super(props);
    this.state ={
        FirstName : '',
        LastName : '',
        Email : '',
        Phone : '',
        Address : '',
        Feedback : '',
        AcceptedTerms : false,
        validationErrors :{},
        submitted :0
    }
this.handleOnChange = this.handleOnChange.bind(this);
this.handleOnSubmit = this.handleOnSubmit.bind(this);
this.validateFields = this.validateFields.bind(this);
}

handleOnChange(e){
    const target = e.target;
    const name = target.name;
    const value = (
        target.type === "text"  ? target.value :  target.checked ||
        target.type === "email"  ? target.value :  target.checked ||
        target.type === "number"  ? target.value :  target.checked


    )
    
    this.setState(
        {
            [name]:value,
         
        }
    )

}
validateFields(){
    const {FirstName,LastName,Email,Phone,Address,Feedback,AcceptedTerms} = this.state;  
 const errors ={};
 if(!FirstName){
    errors['FirstName'] = "This field cannot be empty";
 }
 if(!LastName  ){

    errors['LastName'] = "This field cannot be empty"
 }

 if( !Email ){
    
    errors['Email'] = "This field cannot be empty";
    
 }

 if(!Phone ){
    errors['Phone'] = "This field cannot be empty";
 }

 if(!Address ){
    errors['Address'] = "This field cannot be empty";
 
 }
 if(!Feedback ){
  errors['Feedback'] = "This field cannot be empty"
 }

 else if(Feedback && Feedback.length <5){
    errors['Feedback'] = "Feedback should be atleast 5 charasters"
 }
 if(!AcceptedTerms){
    errors['AcceptedTerms'] = "Please accept the terms"
 }
 this.setState(
    {
        
        validationErrors : errors
    }
 )
 return Object.keys(errors).length === 0
 
}
handleOnSubmit(e){
   e.preventDefault()
  
const isFormValid = this.validateFields()
if(isFormValid){
    this.setState(
        (state) =>{
        
         return   {submitted : state.submitted+1 }
       
        }
    )
}

}

    render(){
      const {
        FirstName : FirstNameError,
        LastName : LastNameError,
        Email : EmailError,
        Phone : PhoneError,
        Address : AddressError,
        Feedback : FeedbackError,
        AcceptedTerms : AcceptedTermsError
    } = this.state.validationErrors  ;
    const {
        FirstName,LastName,Email,Phone,Address,Feedback,AcceptedTerms
    } = this.state;
        return(
            <>
            <div className='app-container'>
            <div className='app-head'>
            <h1>
            <span className='initials'>JS</span>
            <span className='title'>Form Validation App</span>
            </h1>
            </div>
            <div className='app-body'>
                <form onSubmit={this.handleOnSubmit}>

            <table className="table table-borderless">
  
  <tbody>
    <tr>
      <td><label htmlFor="First Name">First Name :</label></td>
      <td>
      <em>{FirstNameError}</em><br/>
       <input type='text' name='FirstName' value={FirstName} 
       onChange={this.handleOnChange} placeholder='Enter First Name'/>
       
      </td>
  
    </tr>
    <tr>
      <td><label htmlFor="Last Name">Last Name :</label></td>
      <td>
      <em>{LastNameError}</em><br/>
       <input type='text' name='LastName' value={LastName} 
       onChange={this.handleOnChange} placeholder='Enter Last Name'/>
      </td>
  
    </tr>
    <tr>
      <td><label htmlFor="Email">Email :</label></td>
      <td>
     <em>{EmailError}</em><br/>
       <input type='email' name='Email' value={Email} 
       onChange={this.handleOnChange} placeholder='Enter Email'/>
      </td>
  
    </tr>
    <tr>
      <td><label htmlFor="Phone">Phone :</label></td>
      <td>
     <em>{PhoneError}</em><br/>
       <input type='number' name='Phone' value={Phone}
        onChange={this.handleOnChange} placeholder='Enter Phone'/>
      </td>
  
    </tr>
    <tr>
      <td><label htmlFor="Address">Address :</label></td>
      <td>
      <em>{AddressError}</em><br/>
       <input type='text' name='Address' value={Address} 
       onChange={this.handleOnChange} placeholder='Enter Address'/>
      </td>
  
    </tr>
    <tr>
      <td><label htmlFor="Feedback">Feedback :</label></td>
      <td>
      <em>{FeedbackError}</em><br/>
       <input type='text' name='Feedback' value={Feedback} 
       onChange={this.handleOnChange} placeholder='Enter Feedback'/>
      </td>
  
    </tr>
    <tr>
      
      <td>
      <em>{AcceptedTermsError}</em><br/>
       <input type="checkbox" name='AcceptedTerms' checked={AcceptedTerms} 
       onChange={this.handleOnChange}/>
       <span>&nbsp;I accept the terms</span>
      </td>
  
    </tr>
    <tr>
    <button type="submit">Submit</button>

<p>Submitted {this.state.submitted} times!</p>
           
    </tr>

  </tbody>
</table> 
</form>     
            </div>
        </div>
            </>
        );
    }
}


export default FormValidation;