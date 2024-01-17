
import { useState } from 'react';
import './form-app.css';

function App() {
  const [name,setName] = useState("");
  const [clgname,setClgName] = useState("");
  const [location,setLocation] = useState("");



  const [headingText,setHeading] = useState();
  const [textClg,setTextClg] = useState();
  const [textLocation,setTextLocation] = useState();


function handleOnchange(e){
 setName(e.target.value)
}
function handleOnchange1(e){
  setClgName(e.target.value)
 }
 function handleOnchange2(e){
  setLocation(e.target.value)
 }
function handleOnClick(e){
  setHeading(name);
  setTextClg(clgname);
  setTextLocation(location);
  e.preventDefault();
}
  return (
   <>
   <div className='app-container'>
            <div className='app-head'>
            <h1>
            <span className='initials'>JS</span>
            <span className='title'> Form App </span>
            </h1>
            </div>
            <div className='app-body'>
              <h1>Hello,{name}</h1>
              <h1>After submit {headingText} </h1>
              <h1>After submit {textClg} </h1>
              <h1>After submit {textLocation} </h1>
<form onSubmit={handleOnClick}>
  <input type='text' placeholder='Enter Your Name' value={name} onChange={handleOnchange}/>
  <input type='text' placeholder='Enter Your College Name' 
  value={clgname} onChange={handleOnchange1}/>
  <input type='text' placeholder='Enter Your Location' 
  value={location} onChange={handleOnchange2}/>
  
  
  <button type='submit'>Submit</button>
</form>

            </div>
        </div>
   </>
  );
}

export default App;
