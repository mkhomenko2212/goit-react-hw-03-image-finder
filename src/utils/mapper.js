const imagesMapper = imageList => {
    return imageList.map(({ id, webformatURL, largeImageURL, tags }) => {
        return { id, webformatURL, largeImageURL,alt: tags }
    });
}


export default imagesMapper;