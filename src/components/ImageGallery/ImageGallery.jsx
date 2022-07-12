
import PropTypes from "prop-types";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

import { Gallery } from "./ImageGallery.styled";

export const ImageGallery = ({ images, onClick }) => {
  return (
    <>
      <Gallery>
        {images.map(({ id, webformatURL, largeImageURL, alt }) => (
          <ImageGalleryItem
            onClick={onClick}
            key={id}
            small={webformatURL}
            large={largeImageURL}
            alt={alt}
          />
        ))}
      </Gallery>
    </>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array,
};


// export class ImageGallery extends Component {
//   state = {
//     page: 1,
//     images: [],
//     largeImg: null,
//     isLoading: false,
//     // status: Status.IDLE,
//   }

//  async componentDidUpdate(prevProps, prevState) {
//     const prevQuery = prevProps.query;
//     const nextQuery = this.props.query;

//     const prevPage = prevState.page;
//     const nextPage = this.state.page;

//     if (prevQuery !== nextQuery) {
//       try {
//         this.setState({ isLoading: true, });
//         const images = await fetchImages(this.props.query);
//         this.setState({
//           images
//         });
//       } catch {
//         return toast.error("We're sorry, nothing is found for ${query}");
//       } finally {
//         this.setState({ isLoading: false });
//        }
//       }

//     if (prevPage !== nextPage && nextPage !==1) {
//          try {
//         this.setState({ isLoading: true});
//         const newImages = await fetchImages(this.props.query, this.state.page);
//         this.setState(prevState => ({
//           images: [...prevState.images, ...newImages],
//         }));
//       } catch {
//         return toast.error("We're sorry, nothing is found for ${query}");
//       } finally {
//         this.setState({ isLoading: false });
//       }
//     }   
//   }

//   handleLoadMore = () => {
//     this.setState(({ page }) => ({ page: page + 1 }));
//   };

//  handleModal = largeImg => {
//     this.setState({ largeImg});
//   };

//   closeModal = () => {
//     this.setState({ largeImg: null });
//   };
//   render() {
//     const { images, isLoading, largeImg } = this.state;
//     const { query } = this.props;

//     return (
//       <div>
//         {images.map(({ id, webformatURL, largeImageURL }) => (
//           <ImageGalleryItem
//             onClick={this.handleModal}
//             key={id}
//             small={webformatURL}
//           large={largeImageURL}/>
//         ))}
//         {isLoading && <Loader />}
//         {largeImg && (
//           <Modal
//             largeImg={largeImg}
//             alt={query}
//           onClose={this.closeModal}/>
//         )}
//         {images.length > 0 && !isLoading && <Button onClick={this.handleLoadMore} />}
//       </div>
     
//     )
// }
//   }

//   ImageGallery.propTypes = {
//   query: PropTypes.string,
// };