import React from 'react'
import {  Link } from 'react-router-dom';

import axios from 'axios';
class Test extends React.Component{
    constructor(props){
        super(props)
    
        

this.onSubmit = this.onSubmit.bind(this)        
   
}

onSubmit(){
    axios.get("http://localhost:3009/api/test")
    .then((response)=>{
       
        console.log(response)

    })
    .catch(err=>{
        console.log(err)
    })

}

    render() {
        return (
           <div className="container">
               <h1>{this.props.name.name}</h1>
               <p>{this.props.name.adresse}</p>
                <p>{this.props.name.stars}</p>
                <Link to={"/hotel/" + this.props.name._id}><img src={this.props.name.img} /></Link>
                <p>{this.props.name.description}</p>
               
         </div>
       )
    }
}

export default Test ; 
