import React, { Component } from "react";

class Modal extends Component {

  onClose = (e) => {
    this.props.onClose();
  };

  render() {
    if (!this.props.showModal) {
      return (
        null
      );
    }
    return (
      <div className="modal">
        <div>
          {this.props.children}
        </div>
        <div>
          <button
            className="search-button modal-button"
            onClick={e => {
              this.onClose(e);
            }}
          >
            CLOSE
          </button>
        </div>
      </div>
    );
  }
}

export default Modal