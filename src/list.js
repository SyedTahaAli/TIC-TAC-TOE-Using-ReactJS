import React,{Component} from 'react';

class List extends Component {
    render(){
        return(
            <ul style={{listStyle:'none',display:'inline',color:'red'}}>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Services</li>
            </ul>
        )
    }
}

export default List