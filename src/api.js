import axios from 'axios';

const searchImages = async (term) => {
   const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID mWiaG2p6FiYU1EDnjUwF_4UNxKww2ke5GnGpsvsKmUk',
        },
        params: {
            query: term,
        },
    });

    //console.log(response.data.results);

    return response.data.results;
}

export default searchImages;