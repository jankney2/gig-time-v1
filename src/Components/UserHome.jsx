import React, { Component } from 'react'
import Gig from './Gig'
export default class UserHome extends Component {
import axios from 'axios'
  
  render(){

    componentDidMount() {
      //get user's gigs from the 
      

    }
    
    return(
<div>

User Dashboard

<div>Mapped Gigs</div>
</div>
    )
  }

}


// const mapStateToProps=(state)=> {
//   return {
//     // input1Val:state.input1Val
//     //these are the props that are put on the component and can be accessed   
//   }
// }
// const mapDispatchToProps= dispatch=>{
// return {
// //this function is used to dispatch things to the store. 
//   inputUpdate: (p)=> dispatch({type: INPUT2_UPDATE, 
//   payload: p
//   }),