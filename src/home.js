import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Modalcom from './modal'
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            player1Fsign: 'X',
            player1Ssign: 'O',
            player2Fsign: 'X',
            player2Ssign: 'O',
            player1Fcheck: true,
            player1Scheck: false,
            player2Fcheck: true,
            player2Scheck: false,
            player1Name: undefined,
            player2Name: undefined,
            open: false,
            modaltext: "",
            modalstyle: {}

        }
    }

    final = () => {
        if ((this.state.player1Name != undefined && this.state.player2Name != undefined)) {
            if ((this.state.player1Fcheck == true && this.state.player2Fcheck == false && this.state.player1Scheck == false && this.state.player2Scheck == true) || (this.state.player1Fcheck == false && this.state.player2Fcheck == true && this.state.player1Scheck == true && this.state.player2Scheck == false)) {
                let gamedata = {
                    player1Name: this.state.player1Name,
                    player2Name: this.state.player2Name,
                    player1Fcheck: this.state.player1Fcheck,
                    player1Scheck: this.state.player1Scheck,
                    player2Fcheck: this.state.player2Fcheck,
                    player2Scheck: this.state.player2Scheck
                }
                localStorage.setItem("GameData", JSON.stringify(gamedata))
                browserHistory.replace('/Game')
            }
            else {
                this.setState({ open: 'true', modaltext: "You could not play with the same signs", modalstyle: { textAlign: 'center', margin: '2%', width: '700px' } })


            }
        }
        else {
            // alert("Please Enter Names Completely")
            this.setState({ open: 'true', modaltext: "Please enter valid Names", modalstyle: { textAlign: 'center', margin: '2%', width: '500px' } })
        }
    }
    closemodalfunc = () => {
        this.setState({ open: false })
    }
    render() {
        return (
            <div className='container'>
                <div className='container' style={{ width: '300px', marginTop: '2%', color: 'white', textAlign: 'center' }}>
                    <h1 style={{ fontWeight: 'bold', borderBottom: '1px dotted white', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', padding: '2%' ,textShadow:'3px 1px 0.5em'}}>TIC TAC TOE</h1>

                </div>

                <div style={{ width: '300px', marginTop: '2%', border: '1px solid black', padding: '2%', borderRadius: '1%', backgroundColor: '#1d1c1c',color:'white' }} className='container'>

                    <div className="form-group">
                        <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter player one name" onChange={(event) => this.setState({ player1Name: event.target.value })} style={{ marginBottom: '3%' }} />
                        <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter player two name" onChange={(event) => this.setState({ player2Name: event.target.value })} style={{ marginBottom: '3%' }} />



                        <div className="form-check form-check-block">
                            <label style={{ display: 'block' }}>Choose player one sign</label>

                            <label className="form-check-label" style={{ display: "block" }}>
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value={this.state.player1Fsign} checked={this.state.player1Fcheck} onChange={() => this.setState({ player1Fcheck: true, player1Scheck: false })} />X
  </label>
                            <label className="form-check-label" style={{ display: "block" }}>
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value={this.state.player1Ssign} checked={this.state.player1Scheck} onChange={() => this.setState({ player1Scheck: true, player1Fcheck: false })} />O
  </label>
                        </div>



                        <div className="form-check form-check-block">
                            <label style={{ display: 'block' }}>Choose player two sign</label>

                            <label className="form-check-label" style={{ display: "block" }}>
                                <input className="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio3" value={this.state.player2Fsign} checked={this.state.player2Fcheck} onChange={() => this.setState({ player2Fcheck: true, player2Scheck: false })} /> X
  </label>
                            <label className="form-check-label" style={{ display: "block" }}>
                                <input className="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio4" value={this.state.player2Ssign} checked={this.state.player2Scheck} onChange={() => this.setState({ player2Scheck: true, player2Fcheck: false })} /> O
  </label>
                        </div>

                    </div>
                    <button type="submit" className="btn btn-primary" onClick={() => this.final()} style={{backgroundColor:'#043d67'}}>Submit</button>
                    <Modalcom modalstate={this.state.open} modaltext={this.state.modaltext} closemodal={this.closemodalfunc} modalstyle={this.state.modalstyle} />
                </div>
              
            </div>
        )
    }
}

export default Home