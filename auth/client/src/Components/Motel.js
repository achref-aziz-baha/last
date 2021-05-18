import React, { useState } from 'react' ;
import { Link , useHistory, useParams } from 'react-router-dom'; 
import axios from 'axios'
 

function Motel(props){

  

  const[_id,setid] = useState(props.room._id || currentHotel._id); 
  const[img,setimg] = useState(props.room.img || currentHotel.img); 
  const [price,setprice] = useState(props.room.price || currentHotel.price); 
  const [datei,setdatei] = useState(''); 
  const [dateo,setdateo] = useState(''); 
  const [message,setmessage] = useState(''); 
  const history = useHistory(); 


function reserve(){
  
    const obj={
      _id : _id , 
      img : img , 
      price : price, 
      datei : datei , 
      dateo : dateo
    }
    axios.post('http://localhost:3009/api/getroom',obj,{headers : {
      'acces-token' : localStorage.getItem('token')
    }}).then((response)=>{
      console.log(response)
        if(response.data.isAuth===false){
         history.push('/login/')
         }
         else 
          {
          if(response.data==="the room is not available"){
           alert("the room is not available")
          }
          else if(response.data==="welcome") {
            alert('The reservation is DONE!')
      
         }
        }
      
    
    })
    .catch(err=>{
      console.log(err)
    })
}; 
return (
    <div>
     
  <h1>{price}</h1>
  <img src={img}></img>
  <form>
         <lable>ENTER date</lable>
         <input  className="create-input" type='date' value={datei} onChange={e => setdatei(e.target.value)}/>
         <input  className="create-input" type='date' value={dateo} onChange={e => setdateo(e.target.value)}/>
    </form>
  <button onClick={reserve}>RESERVE</button>
 <div>{message}</div>
  </div>
)






}

// class Motel extends React.Component{
//   constructor(props){
//       super(props)
//       this.state={
//         message : "",
//         _id :  this.props.room._id ,
//         img : this.props.room.img ,
//         price : this.props.room.price,
//         datei : "",
//          dateo:""
//       }
      
//       this.reserve = this.reserve.bind(this) 
//       this.handleChange=this.handleChange.bind(this)
//       this.handleChange1=this.handleChange1.bind(this)
//   }

// reserve(){
// const history = useHistory()
//   var obj=this.state
// axios.post('http://localhost:3009/api/getroom',obj,{headers : {
//   'acces-token' : localStorage.getItem('token')
// }}).then((response)=>{
//     if(response.data.isAuth===false){
//       this.setState({message : '<a href="/login">You need to login before!</a>'})
//      }
  

// })
// .catch(err=>{
//   console.log(err)
// })
// }
// handleChange(e){
//   this.setState({datei: e.target.value})
// }
// handleChange1(e){
//   this.setState({dateo: e.target.value})
// }

//   render(){
//     return (
//         <div>
           
//         <h1>{this.props.room.price}</h1>
//         <img src={this.props.room.img}></img>
//         <form>
//                <lable>ENTER date</lable>
//                <input  className="create-input" type='date' value={this.state.datei} onChange={this.handleChange}/>
//                <input  className="create-input" type='date' value={this.state.dateo} onChange={this.handleChange1}/>
//           </form>
//         <button onClick={this.reserve}>RESERVE</button>
//        <div>{this.state.message}</div>
//         </div>
//     )
//   }
// }

export default Motel ; 
