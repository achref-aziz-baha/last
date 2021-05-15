import React from 'react'
import {  Link } from 'react-router-dom';
import Favorite from './Favorite'
class Test extends React.Component{
    constructor(props){
        super(props)

this.onSubmit = this.onSubmit.bind(this)        
   
}

onSubmit(){
return <Favorite like={this.props.name._id}/>

}

    render() {
        return (
           <div className="container">
               <h1>{this.props.name.name}</h1>
               <p>{this.props.name.adresse}</p>
                <p>{this.props.name.stars}</p>
                <Link to={"/hotel/" + this.props.name._id}><img src={this.props.name.img} /></Link>
                <p>{this.props.name.description}</p>
                <button onClick={this.onSubmit}>LIKE</button>
         </div>
       )
    }
}

export default Test ; 
