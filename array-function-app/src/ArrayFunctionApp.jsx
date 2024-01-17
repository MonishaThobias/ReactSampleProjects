import React from 'react';
import './array-func-app.css';
export default function ArrayFunctionApp(){
const countries =[
    {
    id:1,
    name:'India',
    capital:'New Delhi',
    
},
{
    id:2,
    name:'China',
    capital:'Beijing',
   
},
{
    id:3,
    name:'Japan',
    capital:'Tokyo',
    
},
{
    id:4,
    name:'Pakistan',
    capital:'Islamabad',
    
},
{
    id:5,
    name:'America',
    capital:'Washington,D.C',

},
]

    return(
        <>
        <div className='app-container'>
            <div className='app-head'>
            <h1>
            <span className='initials'>JS</span>
            <span className='title'>Array Map Function App</span>
            </h1>
            </div>
            <div className='app-body'>
                <ul>
                    {
                        countries.map(country =>{
                            return(
<li key={country.id}>
<span>{country.id}.&nbsp;</span> <span className='style-attribute'><b>{country.name}</b></span>
<span>&nbsp;&nbsp;(The capital of <span className='style-attribute'>{country.name} </span>is <span className='style-attribute'>
    {country.capital} . </span> )</span>
</li>);
                        })
                    
     }           </ul>
            </div>
        </div>
        </>
    );

}

