import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');


export class Modal extends Component { 
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
    }
      componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }


  handelKeydown = e => {
            if (e.code === 'Escape') {
            this.props.onClose()
        }
    }

  handelBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
    };
    
    render() {
        const { largeImg, alt } = this.props;

        return createPortal(
          
            <div onClick={this.handelBackdropClick}>
                <div>
                    <img src={largeImg} alt={alt} />
                </div>
                </div>,
          
            modalRoot
        )
    }
}

Modal.propTypes = {
    largeImg: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
}
