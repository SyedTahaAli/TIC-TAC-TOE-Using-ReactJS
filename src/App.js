import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './button.js'
import Modalcom from './modal'
import {browserHistory} from 'react-router'

let buttonstyle =
  { color: "red", backgroundColor: "black", padding: "5px" }






class App extends Component {


  constructor() {
    super()
    this.state = {
      oneone: "",
      onetwo: "",
      onethree: "",
      twoone: "",
      twotwo: "",
      twothree: "",
      threeone: "",
      threetwo: "",
      threethree: "",
      player1: "",
      player2: "",
      turn: 1,
      draw:false,
      player1Name:undefined,
      player2Name:undefined,
      open: false,
      modaltext:"",
      modalstyle:{},
      player1turn:'*',
      player2turn:undefined
    }
  }
  closemodalfunc=()=>{
    this.setState({open:false})
}

  result=()=>{
    let x= setInterval(()=>{
if(this.state.oneone==this.state.player1 && this.state.onetwo==this.state.player1 && this.state.onethree==this.state.player1){
  this.setState({open:'true',modaltext:`${this.state.player1Name} has won`,modalstyle:{textAlign:'center',margin:'4% 1%',width:'400px'}})
  this.setState({
    draw:true
  })
  setTimeout(()=>{
    window.location.href='/Game'
  },1000)
  clearInterval(x)
}
else if(this.state.oneone==this.state.player2 && this.state.onetwo==this.state.player2 && this.state.onethree==this.state.player2){
  this.setState({open:'true',modaltext:`${this.state.player2Name} has won`,modalstyle:{textAlign:'center',margin:'4% 1%',width:'400px'},draw:true
})
setTimeout(()=>{
  window.location.href='/Game'
},1000)
  clearInterval(x)
}
else if(this.state.twoone==this.state.player1 && this.state.twotwo==this.state.player1 && this.state.twothree==this.state.player1){
  this.setState({open:'true',modaltext:`${this.state.player1Name} has won`,modalstyle:{textAlign:'center',margin:'4% 1%',width:'400px',draw:true}})
  setTimeout(()=>{
    window.location.href='/Game'
  },1000)
  clearInterval(x)
} 
else if(this.state.twoone==this.state.player2 && this.state.twotwo==this.state.player2 && this.state.twothree==this.state.player2){
  this.setState({open:'true',modaltext:`${this.state.player2Name} has won`,modalstyle:{textAlign:'center',margin:'4% 1%',width:'400px',draw:true}})
  setTimeout(()=>{
    window.location.href='/Game'
  },1000)
  clearInterval(x)
} 
else if(this.state.threeone==this.state.player1 && this.state.threetwo==this.state.player1 && this.state.threethree==this.state.player1){
  this.setState({open:'true',modaltext:`${this.state.player1Name} has won`,modalstyle:{textAlign:'center',margin:'4% 1%',width:'400px',draw:true}})
  setTimeout(()=>{
    window.location.href='/Game'
  },1000)
  clearInterval(x)
} 
else if(this.state.threeone==this.state.player2 && this.state.threetwo==this.state.player2 && this.state.threethree==this.state.player2){
  this.setState({open:'true',modaltext:`${this.state.player2Name} has won`,modalstyle:{textAlign:'center',margin:'4% 1%',width:'400px',draw:true}})
  setTimeout(()=>{
    window.location.href='/Game'
  },1000)
  clearInterval(x)
} 


else if(this.state.oneone==this.state.player1 && this.state.twoone==this.state.player1 && this.state.threeone==this.state.player1){
  this.setState({open:'true',modaltext:`${this.state.player1Name} has won`,modalstyle:{textAlign:'center',margin:'4% 1%',width:'400px',draw:true}})
  setTimeout(()=>{
    window.location.href='/Game'
  },1000)
  clearInterval(x)
} 
else if(this.state.oneone==this.state.player2 && this.state.twoone==this.state.player2 && this.state.threeone==this.state.player2){
  this.setState({open:'true',modaltext:`${this.state.player2Name} has won`,modalstyle:{textAlign:'center',margin:'4% 1%',width:'400px',draw:true}})
  setTimeout(()=>{
    window.location.href='/Game'
  },1000)
  clearInterval(x)
} 


else if(this.state.twotwo==this.state.player1 && this.state.threetwo==this.state.player1 && this.state.onetwo==this.state.player1){
  this.setState({open:'true',modaltext:`${this.state.player1Name} has won`,modalstyle:{textAlign:'center',margin:'4% 1%',width:'400px',draw:true}})
  setTimeout(()=>{
    window.location.href='/Game'
  },1000)
  clearInterval(x)
} 

else if(this.state.twotwo==this.state.player2 && this.state.threetwo==this.state.player2 && this.state.onetwo==this.state.player2){
  this.setState({open:'true',modaltext:`${this.state.player2Name} has won`,modalstyle:{textAlign:'center',margin:'4% 1%',width:'400px',draw:true}})
  setTimeout(()=>{
    window.location.href='/Game'
  },1000)
  clearInterval(x)
}  




else if(this.state.twothree==this.state.player1 && this.state.onethree==this.state.player1 && this.state.threethree==this.state.player1){
  this.setState({open:'true',modaltext:`${this.state.player1Name} has won`,modalstyle:{textAlign:'center',margin:'4% 1%',width:'400px',draw:true}})
  setTimeout(()=>{
    window.location.href='/Game'
  },1000)
  clearInterval(x)
} 


else if(this.state.twothree==this.state.player2 && this.state.onethree==this.state.player2 && this.state.threethree==this.state.player2){
  this.setState({open:'true',modaltext:`${this.state.player2Name} has won`,modalstyle:{textAlign:'center',margin:'4% 1%',width:'400px',draw:true}})
  setTimeout(()=>{
    window.location.href='/Game'
  },1000)
  clearInterval(x)
} 
else if(this.state.oneone==this.state.player1 && this.state.twotwo==this.state.player1 && this.state.threethree==this.state.player1){
  this.setState({open:'true',modaltext:`${this.state.player1Name} has won`,modalstyle:{textAlign:'center',margin:'4% 1%',width:'400px',draw:true}})
  setTimeout(()=>{
    window.location.href='/Game'
  },1000)
  clearInterval(x)
} 

else if(this.state.oneone==this.state.player2 && this.state.twotwo==this.state.player2 && this.state.threethree==this.state.player2){
  this.setState({open:'true',modaltext:`${this.state.player2Name} has won`,modalstyle:{textAlign:'center',margin:'4% 1%',width:'400px',draw:true}})
  setTimeout(()=>{
    window.location.href='/Game'
  },1000)
  clearInterval(x)
} 


else if(this.state.onethree==this.state.player2 && this.state.twotwo==this.state.player2 && this.state.threeone==this.state.player2){
  this.setState({open:'true',modaltext:`${this.state.player2Name} has won`,modalstyle:{textAlign:'center',margin:'4% 1%',width:'400px',draw:true}})
  setTimeout(()=>{
    window.location.href='/Game'
  },1000)
  clearInterval(x)
} 


else if(this.state.onethree==this.state.player1 && this.state.twotwo==this.state.player1 && this.state.threeone==this.state.player1){
  this.setState({open:'true',modaltext:`${this.state.player1Name} has won`,modalstyle:{textAlign:'center',margin:'4% 1%',width:'400px',draw:true}})
  setTimeout(()=>{
    window.location.href='/Game'
  },1000)
  clearInterval(x)
} 

else if(this.state.oneone!="" && this.state.onetwo!="" && this.state.onethree!=""&&this.state.twoone!="" && this.state.twotwo!="" && this.state.twothree!=""&& this.state.threeone!="" && this.state.threetwo!="" && this.state.threethree!=""){
if(this.state.draw==false){
  this.setState({open:'true',modaltext:`Game has been drawn`,modalstyle:{textAlign:'center',margin:'4% 1%',width:'400px'}})
  setTimeout(()=>{
    window.location.href='/Game'
  },1000)
  clearInterval(x)
  
}
}
    })
  }
  componentWillMount() {
    let gamedata=localStorage.getItem("GameData")
    gamedata=JSON.parse(gamedata)
    
      this.setState({
        player1Name: gamedata.player1Name,
        player2Name: gamedata.player2Name
      })
      if(gamedata.player1Fcheck==true && gamedata.player2Scheck==true){
        this.setState({
          player1: "X",
          player2: 'O',
        })
        
      }
      else if(gamedata.player2Fcheck==true && gamedata.player1Scheck==true){
        this.setState({
          player1: "O",
          player2: 'X',
        })
        
      }
      this.result()
        }

  tick11 = () => {
    if (this.state.turn == 1 && (this.state.oneone != this.state.player1 && this.state.oneone != this.state.player2)) {

      this.setState({
        oneone: this.state.player1,
        turn: 2,
        player1turn:undefined,
        player2turn:'*'
      })
    }


    else if (this.state.turn == 2 && (this.state.oneone != this.state.player1 && this.state.oneone != this.state.player2)) {

      this.setState({
        oneone: this.state.player2,
        turn: 1,
        player1turn:'*',
        player2turn:undefined
      })
    }


  }
  tick12 = () => {
    if (this.state.turn == 1 && (this.state.onetwo != this.state.player1 && this.state.onetwo != this.state.player2)) {

      this.setState({
        onetwo: this.state.player1,
        turn: 2,
        player1turn:undefined,
        player2turn:'*'
      })
    }


    else if (this.state.turn == 2 && (this.state.onetwo != this.state.player1 && this.state.onetwo != this.state.player2)) {

      this.setState({
        onetwo: this.state.player2,
        turn: 1,
        player1turn:'*',
        player2turn:undefined
      })
    }
  }
  tick13 = () => {
    if (this.state.turn == 1 && (this.state.onethree != this.state.player1 && this.state.onethree != this.state.player2)) {

      this.setState({
        onethree: this.state.player1,
        turn: 2,
        player1turn:undefined,
        player2turn:'*'
      })
    }


    else if (this.state.turn == 2 && (this.state.onethree != this.state.player1 && this.state.onethree != this.state.player2)) {

      this.setState({
        onethree: this.state.player2,
        turn: 1,
        player1turn:'*',
        player2turn:undefined
      })
    }
  }
  tick21 = () => {
    if (this.state.turn == 1 && (this.state.twoone != this.state.player1 && this.state.twoone != this.state.player2)) {

      this.setState({
        twoone: this.state.player1,
        turn: 2,
        player1turn:undefined,
        player2turn:'*'
      })
    }


    else if (this.state.turn == 2 && (this.state.twoone != this.state.player1 && this.state.twoone != this.state.player2)) {

      this.setState({
        twoone: this.state.player2,
        turn: 1,
        player1turn:'*',
        player2turn:undefined
      })
    }
  }
  tick22 = () => {
    if (this.state.turn == 1 && (this.state.twotwo != this.state.player1 && this.state.twotwo != this.state.player2)) {

      this.setState({
        twotwo: this.state.player1,
        turn: 2,
        player1turn:undefined,
        player2turn:'*'
      })
    }


    else if (this.state.turn == 2 && (this.state.twotwo != this.state.player1 && this.state.twotwo != this.state.player2)) {

      this.setState({
        twotwo: this.state.player2,
        turn: 1,
        player1turn:'*',
        player2turn:undefined
      })
    }
  }
  tick23 = () => {
    if (this.state.turn == 1 && (this.state.twothree != this.state.player1 && this.state.twothree != this.state.player2)) {

      this.setState({
        twothree: this.state.player1,
        turn: 2,
        player1turn:undefined,
        player2turn:'*'
      })
    }


    else if (this.state.turn == 2 && (this.state.twothree != this.state.player1 && this.state.twothree != this.state.player2)) {

      this.setState({
        twothree: this.state.player2,
        turn: 1,
        player1turn:'*',
        player2turn:undefined
      })
    }
  }

  tick31 = () => {
    if (this.state.turn == 1 && (this.state.threeone != this.state.player1 && this.state.threeone != this.state.player2)) {

      this.setState({
        threeone: this.state.player1,
        turn: 2,
        player1turn:undefined,
        player2turn:'*'
      })
    }


    else if (this.state.turn == 2 && (this.state.threeone != this.state.player1 && this.state.threeone != this.state.player2)) {

      this.setState({
        threeone: this.state.player2,
        turn: 1,
        player1turn:'*',
        player2turn:undefined
      })
    }
  }

  tick32 = () => {
    if (this.state.turn == 1 && (this.state.threetwo != this.state.player1 && this.state.threetwo != this.state.player2)) {

      this.setState({
        threetwo: this.state.player1,
        turn: 2,
        player1turn:undefined,
        player2turn:'*'
      })
    }


    else if (this.state.turn == 2 && (this.state.threetwo != this.state.player1 && this.state.threetwo != this.state.player2)) {

      this.setState({
        threetwo: this.state.player2,
        turn: 1,
        player1turn:'*',
        player2turn:undefined
      })
    }
  }

  tick33 = () => {
    if (this.state.turn == 1 && (this.state.threethree != this.state.player1 && this.state.threethree != this.state.player2)) {

      this.setState({
        threethree: this.state.player1,
        turn: 2,
        player1turn:undefined,
        player2turn:'*'
      })
    }


    else if (this.state.turn == 2 && (this.state.threethree != this.state.player1 && this.state.threethree != this.state.player2)) {

      this.setState({
        threethree: this.state.player2,
        turn: 1,
        player1turn:'*',
        player2turn:undefined
      })
    }
  }


  render() {
    return (
      <div className="container">
      <div className="row justify-content-center">
    <h1 style={{color:'white',margin:'auto'}}>{this.state.player1Name}({this.state.player1}){this.state.player1turn} Vs {this.state.player2Name}({this.state.player2}){this.state.player2turn}</h1>
        </div>
    

      <div className="row justify-content-center" style={{position:'relative',top:'25px'}}>
        
        <table>
          <tr>
            <td className='first' onClick={() => this.tick11()}>{this.state.oneone}</td>
            <td className='second' onClick={() => this.tick12()}>{this.state.onetwo}</td>
            <td className='third' onClick={() => this.tick13()}>{this.state.onethree}</td>

          </tr>
          <tr>
            <td className='first' onClick={() => this.tick21()}>{this.state.twoone}</td>
            <td className='second' onClick={() => this.tick22()}>{this.state.twotwo}</td>
            <td className='third' onClick={() => this.tick23()}>{this.state.twothree}</td>
          </tr>
          <tr>
            <td className='firstbottom' onClick={() => this.tick31()}>{this.state.threeone}</td>
            <td className='secondbottom' onClick={() => this.tick32()}>{this.state.threetwo}</td>
            <td className='thirdbottom' onClick={() => this.tick33()}>{this.state.threethree}</td>
          </tr>

        </table>



        <Modalcom  modalstate={this.state.open} modaltext={this.state.modaltext} closemodal={this.closemodalfunc} modalstyle={this.state.modalstyle}/>
        </div>
        
        <div className="row justify-content-center"  style={{position:'relative',top:'45px',paddingLeft:'3%'}}>

        <button type="button" className="btn btn-light" style={{margin:'0% 1%'}} onClick={()=>{window.location.href='/Game'}}>Reset</button>
        <button type="button" className="btn btn-danger" style={{margin:'0% 1%'}} onClick={()=>{browserHistory.replace('/')}}>New Game</button>

        </div>

      </div>
    )
  }
}

export default App;
