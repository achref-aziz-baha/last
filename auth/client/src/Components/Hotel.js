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
        this.setState({
            data : response.data.room
        })
        console.log(this.state.data)

    })
    .catch(err=>{
        console.log(err)
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