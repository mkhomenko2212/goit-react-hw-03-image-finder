
import axios from 'axios'

axios.defaults.baseURL = 'https://pixabay.com/api/';

const KEY = '28568850-7f26656e1d144ef2778ce96e8';


export async function fetchImages(query, page = 1) {
    const rawData = await axios.get(`https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return rawData;
}

// export const fetchImages = async (query, page = 1) => {
//     return fetch(
//         `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
//     ).then(response => {
//         if (response.ok) {
//             return response.json();
//         }
//         return Promise.reject(
//             new Error(`We're sorry, nothing is found for "${query}".`)
//         );
//     });

// };