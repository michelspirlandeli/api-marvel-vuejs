import axios from 'axios';

const urlBaseMarvel = 'https://gateway.marvel.com:443/v1/public/';
const apiKey = 'CHAVE-PUBLICA-MARVEL-API';

export default {
    getAllComics: (limit, callback) => {
        const urlComics = urlBaseMarvel + 'comics?apikey=' + apiKey + '&limit=' + limit;
        axios.get(urlComics).then((comics) => {
            if (callback) {
                callback(comics);
            }
        })
    }
}