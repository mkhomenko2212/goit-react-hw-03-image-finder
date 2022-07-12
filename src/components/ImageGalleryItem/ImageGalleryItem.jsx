import PropTypes from 'prop-types';

import { ImgItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({large, small, alt, onClick }) => {
    return (
        <ImgItem onClick={() => onClick(large)}>
            <Image src={small} alt={alt} />
        </ImgItem>
    );
}



ImageGalleryItem.propTypes = {
  large: PropTypes.string.isRequired,
  small: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};