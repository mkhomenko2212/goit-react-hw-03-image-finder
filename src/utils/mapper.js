const imagesMapper = imageList => {
    return imageList.map(({ id, webformatURL, largeImageURL }) => {
        return { id, webformatURL, largeImageURL }
    });
}


export default imagesMapper;