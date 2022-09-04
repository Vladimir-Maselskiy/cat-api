const { default: axios } = require('axios');

const api_key =
  'live_VP9zePhnIIvgDNuUfZpRJ3lDPi6Abg7MklzF1KK5Uh1vF8HKqRsWIdrkktg8Iujn';

axios.defaults.headers.common['x-api-key'] = api_key;

export const getBreeds = () => {
  return axios.get('https://api.thecatapi.com/v1/images/search?limit=20');
};

const catAPI = { getBreeds };
export default catAPI;
