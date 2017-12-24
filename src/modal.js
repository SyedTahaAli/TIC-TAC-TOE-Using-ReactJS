import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
 
export default class Modalcomp extends React.Component {
 
 
 
  render() {
    return (
      <div>
        <Modal open={this.props.modalstate} onClose={this.props.closemodal}>
          <h2 style={this.props.modalstyle}>{this.props.modaltext}</h2>
        </Modal>
      </div>
    );
  }
}


