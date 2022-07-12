import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyled } from './Modal.styled';

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
          
            <Overlay onClick={this.handelBackdropClick}>
                <ModalStyled>
                    <img src={largeImg} alt={alt} />
                </ModalStyled>
                </Overlay>,
          
            modalRoot
        )
    }
}

Modal.propTypes = {
    largeImg: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
}
