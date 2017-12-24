import React,{Component} from 'react';
 class Button extends Component{
     constructor(props){
         super(props)
     }
    //  let increment=()=>alert()
     render(){
         return(
             <button className="btn btn-outline-danger my-2 my-sm-0" onClick={this.props.onClick} style={this.props.style}>{this.props.text}</button>
         )
     }
 }

 export default Button;