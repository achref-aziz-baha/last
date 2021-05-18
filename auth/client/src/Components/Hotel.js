import React from 'react'
import Motel from './Motel'
import axios from  'axios'

class Hotel extends React.Component{
    constructor(props){
        super(props)
        this.state  = {
            value : this.props.match.params.id , 
            data : [] 
        }
    }
    
componentDidMount(){
 
    axios.get(`http://localhost:3009/api/getone/${this.state.value}`)
    .then((response)=>{
        console.log(response)
        this.setState({
            data : response.data
        })
        console.log(this.state.data)

    })
    .catch((error)=>{
        console.log(error)
    })
    
}



    render(){
        return(
            <div>
             {
                 this.state.data.map((element,index)=>{
                     return <Motel room={element} key={index}/>
                 })
             }
            </div>
        )
       
           
        
    }
}

export default Hotel ; 