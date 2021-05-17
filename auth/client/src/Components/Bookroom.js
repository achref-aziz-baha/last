import React from 'react' ; 


class Bookroom extends React.Component {
    constructor(){
        super()
    }

   render(){
       return (
           <form>
               <lable>ENTER YOU CREDENTIALS</lable>
               <input type='text'/>
               <input type='password'/>
          </form>
       )
   }
}

export default Bookroom ; 