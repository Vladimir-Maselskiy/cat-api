const { default: axios } = require('axios');

const api_key =
  'live_VP9zePhnIIvgDNuUfZpRJ3lDPi6Abg7MklzF1KK5Uh1vF8HKqRsWIdrkktg8Iujn';

axios.defaults.baseURL = 'https://api.thecatapi.com';
axios.defaults.headers.common['x-api-key'] = api_key;

export const getBreeds = () => {
  return axios.get('/v1/images/search?limit=20').then(resp => {
    return resp.data
      .map(el => {
        if (el.breeds.length === 0) return { ...el, breeds: [{ name: '' }] };
        return el;
      })
      .sort((a, b) => b.breeds[0].name > a.breeds[0].name);
  });
};

export const getBreedsName = () => {
  return axios
    .get('/v1/breeds')
    .then(resp => resp.data.map(breed => ({ name: breed.name, id: breed.id })));
};

export const getBreedsByBreedID = id => {
  return axios
    .get(`/v1/images/search?breed_ids=${id}&limit=20`)
    .then(resp => resp.data);

  // return resp.data.map(breed => breed.name);
};

const catAPI = { getBreeds, getBreedsName, getBreedsByBreedID };
export default catAPI;
