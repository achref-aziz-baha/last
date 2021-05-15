import React from 'react'
import Test from './Test'
import axios from 'axios'

class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            value : [] 
        }
    }

componentDidMount(){
    axios.get('http://localhost:3009/api/getall')
    .then((response)=>{
        this.setState({
            value : response.data
            
        })
        
    })
   
}


    render(){
        return (
           
            <div>
              {
                  this.state.value.map((element,index)=>{
                      return <Test name={element} key={index} />
                  })
              }
            </div>
        )
    }
}

export default Home ; 