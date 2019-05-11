import React, { Component } from 'react';
import Modal from 'react-modal'
const customStyles = {
    content : {
      top                   : '20%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      borderRadius          : '50px'
    }
  };

class BelowLimitPopup extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.props.closeModal()
    this.setState({modalIsOpen: false});
  }
 
  changeState = modalIsOpen => {
      this.setState({
          modalIsOpen
      })
  }
  render() {
    return (
      <div>
        <Modal
        //   isOpen={this.state.modalIsOpen}
          isOpen={this.props.changeState}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>Cannot withdraw below 500</div>
        </Modal>
      </div>
    );
  }
}

export default BelowLimitPopup;
