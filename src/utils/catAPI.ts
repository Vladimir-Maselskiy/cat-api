import { IBreed } from '../interfaces/interfaces';
const { default: axios } = require('axios');

const api_key =
  'live_VP9zePhnIIvgDNuUfZpRJ3lDPi6Abg7MklzF1KK5Uh1vF8HKqRsWIdrkktg8Iujn';

axios.defaults.baseURL = 'https://api.thecatapi.com';
axios.defaults.headers.common['x-api-key'] = api_key;

export const getBreeds = (params: {
  limit?: string;
  page?: string;
  hasBreeds?: string;
  breedIds?: string;
}): Promise<any[]> => {
  const {
    limit = '1',
    page = '1',
    hasBreeds = '0',
    breedIds = '',
  } = params;
  return axios
    .get(
      `/v1/images/search?limit=${limit}&page=${page}&attach_breed=20&has_breeds=${hasBreeds}&breed_ids=${breedIds}`
    )
    .then(
      (resp: {
        data: {
          map: (arg0: (el: any) => any) => {
            (): any;
            new (): any;
            sort: {
              (arg0: (a: any, b: any) => boolean): any;
              new (): any;
            };
          };
        };
      }) => {
        return resp.data
          .map((el: { breeds: string | any[] }) => {
            if (el.breeds.length === 0)
              return { ...el, breeds: [{ name: '' }] };
            return el;
          })
          .sort(
            (
              a: { breeds: { name: number }[] },
              b: { breeds: { name: number }[] }
            ) => b.breeds[0].name > a.breeds[0].name
          );
      }
    );
};

export const getBreedsName = (): Promise<IBreed[]> => {
  return axios
    .get('/v1/breeds')
    .then(
      (resp: { data: { name: string; id: string }[] }) =>
        resp.data.map(breed => ({
          name: breed.name,
          id: breed.id,
        }))
    );
};

export const getBreedsByBreedID = (
  id: string | undefined
): Promise<any[]> => {
  return axios
    .get(`/v1/images/search?breed_ids=${id}&limit=20`)
    .then((resp: { data: any }) => resp.data);

  // return resp.data.map(breed => breed.name);
};

const catAPI = {
  getBreeds,
  getBreedsName,
  getBreedsByBreedID,
};
export default catAPI;
