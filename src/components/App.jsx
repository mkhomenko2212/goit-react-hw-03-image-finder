// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };


import { Component } from "react";
import { toast } from "react-toastify";


import { fetchImages } from "services/api";

import { SearchBar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "components/Button/Button";
import { Modal } from "components/Modal/Modal";
import { Loader } from "components/Loader/Loader";
import imagesMapper from "utils/mapper";

export class App extends Component {
  state = {
    page: 1,
    images: [],
    largeImg: null,
    isLoading: false,
    query: '',
  };


  //  componentDidUpdate(_, prevState) {
  //   if (prevState.page !== this.state.page) {
  //     this.getImages(this.state.page);
  //   }
  // }

  // getImages = page => {
  //   this.setState({ isLoading: true });
  //   fetchImages(page)
  //     .then(data => {
  //       this.setState({ images: [...this.state.images, ...imagesMapper(data)] });
  //     })
  //     .finally(() => this.setState({ isLoading: false }));
  // };

  async componentDidUpdate(_, prevState) {

    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    const { query, page } = this.state;
    
        if (prevQuery !== nextQuery) {
      try {
        this.setState({ isLoading: true, page: 1, images: [] });
        const images = await fetchImages(query);
        this.setState({
          images: imagesMapper(images.data.hits),
        });
      } catch {
        return toast.error("We're sorry, nothing is found");
      } finally {
        this.setState({ isLoading: false });
       }
      }

    if (prevPage !== nextPage && nextPage !==1) {
         try {
        this.setState({ isLoading: true});
        const newImages = await fetchImages(query, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...imagesMapper(newImages.data.hits)],
        }));
      } catch {
        return toast.error("We're sorry, nothing is found");
      } finally {
        this.setState({ isLoading: false });
      }
    }   
  
  }

  handleSearch =  query  => {
    this.setState({ query });
  };

  handleLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

 handleModal = largeImg => {
    this.setState({ largeImg });
  };

  closeModal = () => {
    this.setState({ largeImg: null });
  };


  render() {
        const { images, isLoading, largeImg, query } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handleSearch} />

         {isLoading && <Loader />}
        {images.length > 0 && (
          <>
            <ImageGallery
              images={this.state.images}
              onClick={this.handleModal}
            />
            <Button onClick={this.handleLoadMore} />
          </>)}
        
      {largeImg && (
          <Modal
            largeImg={largeImg}
            alt={query}
            onClose={this.closeModal}
          />
        )}
      </div>
    )
  }
}