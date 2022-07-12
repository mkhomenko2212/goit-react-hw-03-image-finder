import PropTypes from 'prop-types';
import { Component } from 'react';
import { Overlay, ModalStyled } from './Modal.styled';



export class Modal extends Component { 
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
    }
      componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }


    handelKeydown = e => {
        if (e.code === 'Escape') {
            this.props.closeModal()
        }
    };

//   handelBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//     };
    
    render() {
        const { largeImg, alt, closeModal } = this.props;

        return (
          
            <Overlay onClick={closeModal}>
                <ModalStyled>
                    <img src={largeImg} alt={alt} />
                </ModalStyled>
                </Overlay>
          
        
        )
    }
}

Modal.propTypes = {
    largeImg: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
}
