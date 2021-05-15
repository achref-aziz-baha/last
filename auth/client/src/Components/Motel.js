import React from 'react' ;
import { Link } from 'react-router-dom'; 


class Motel extends React.Component{
  constructor(props){
      super(props)
  }




  render(){
    return (
        <div>
        <h1>{this.props.room.price}</h1>
        <img src={this.props.room.img}></img>
        <button><Link to="/book/">RESERVE</Link></button>
        </div>
    )
  }
}

export default Motel ; 
