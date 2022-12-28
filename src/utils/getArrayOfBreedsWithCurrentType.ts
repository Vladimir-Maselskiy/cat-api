import catAPI from './catAPI';

type TParams = {
  type: string;
  breeds: any[];
};
let typedBreeds: any[] = [];
let page = 0;

const getBreedsByExtention = async ({
  extention,
  breeds,
}: {
  extention: string;
  breeds: any[];
}) => {
  typedBreeds = [
    ...typedBreeds,
    ...breeds.filter(
      breed => breed.url.split('.').pop() === extention
    ),
  ];
  if (typedBreeds.length < 20) {
    page += 1;
    const newBreeds = await catAPI.getBreeds({
      limit: '20',
      page: String(page),
    });
    await getArrayOfBreedsWithCurrentType({
      type: extention === 'jpg' ? 'STATIC' : 'ANIMATED',
      breeds: newBreeds,
    });
  }
};

export const getArrayOfBreedsWithCurrentType = async ({
  type,
  breeds,
}: TParams): Promise<any[]> => {
  console.log('typedBreeds', typedBreeds);
  if (type === 'STATIC') {
    await getBreedsByExtention({
      extention: 'jpg',
      breeds,
    });
    return typedBreeds;
  }
  if (type === 'ANIMATED') {
    await getBreedsByExtention({
      extention: 'gif',
      breeds,
    });
    return typedBreeds;
  }
  return breeds;
};

export const clearArray = () => {
  typedBreeds = [];
  page = 0;
};
