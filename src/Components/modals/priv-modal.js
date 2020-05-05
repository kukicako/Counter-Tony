import React from 'react';
import ReactDOM from 'react-dom';
import './priv-modal.scss'

const Modal = ({ isShowing, hide, component }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="priv-modal-overlay"/>
    <div className="priv-modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="priv-modal">
        <div className="priv-modal-header">
          <button type="button" className="priv-modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {component}
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;