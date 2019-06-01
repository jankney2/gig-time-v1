
import {createStore} from 'redux'

let initialState= {

}



export const 
export const 
export const 


function reducer(state=initialState, action){
let {type, payload} = action

switch(type){



  default: return state;
}



}



export default createStore(reducer)