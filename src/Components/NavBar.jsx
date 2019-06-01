import React, { Component } from 'react'
import axios from 'axios'

export default class NavBar extends Component {

  constructor() {
    super()
    this.state= {
      emailInput:'', 
      passInput:'', 

    }
  }
  
changeHandler= (e)=> {

  this.setState({
    [e.target.name]:e.target.value
  })

}

// fireLogin= ()=> {

// }

  render() {
    return(
<div>
<input type="email" name="emailInput" placeholder='email' onChange={this.changeHandler}/>
<input type="password" name="passInput" placeholder='password' onChange={this.changeHandler}/>
<button onClick={()=>{
//  this.fireLogin()


}}>Login</button>
</div>
    )
  }



}