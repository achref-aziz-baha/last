import React from 'react' ; 



class Favorite extends React.Component {
    
    render(){
        return (
           
           <div>
             <h1>{this.props.like}</h1>
           </div>
        )
    }
}


export default Favorite ; 