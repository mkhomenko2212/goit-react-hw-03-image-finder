import PropTypes from 'prop-types';

export const ImageGalleryItem = ({large, small, alt, onClick }) => {
    return (
        <li onClick={() => onClick(large)}>
            <img src={small} alt={alt} />
        </li>
    );
}



ImageGalleryItem.propTypes = {
  large: PropTypes.string.isRequired,
  small: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};