import catAPI from './catAPI';

type TPropType = {
  type: string;
};
type TPropExtention = {
  extention: string;
};

type TParams = {
  breeds: any[];
  setBreeds: React.Dispatch<
    React.SetStateAction<any[] | null>
  >;
};

type TGetBreedsByExtention = TParams & TPropExtention;
type TGetArrayOfBreedsWithCurrentType = TParams & TPropType;

let typedBreeds: any[] = [];
let page = 0;

const getBreedsByExtention = async ({
  extention,
  breeds,
  setBreeds,
}: TGetBreedsByExtention) => {
  if (extention === 'any') {
    typedBreeds = [...typedBreeds, ...breeds];
  }
  if (extention === 'jpg' || extention === 'gif') {
    typedBreeds = [
      ...typedBreeds,
      ...breeds.filter(
        breed => breed.url.split('.').pop() === extention
      ),
    ];
  }

  if (typedBreeds.length > 20) {
    typedBreeds = typedBreeds.slice(0, 20);
  }
  setBreeds(typedBreeds);
  if (typedBreeds.length < 20) {
    page += 1;
    const newBreeds = await catAPI.getBreeds({
      limit: '20',
      page: String(page),
    });
    const type =
      extention === 'jpg' ? 'STATIC' : 'ANIMATED';
    await getArrayOfBreedsWithCurrentType({
      type,
      breeds: newBreeds,
      setBreeds,
    });
  }
};

export const getArrayOfBreedsWithCurrentType = async ({
  type,
  breeds,
  setBreeds,
}: TGetArrayOfBreedsWithCurrentType): Promise<any[]> => {
  if (typedBreeds.length === 20) return breeds;
  if (type === 'STATIC') {
    await getBreedsByExtention({
      extention: 'jpg',
      breeds,
      setBreeds,
    });
    return typedBreeds;
  }
  if (type === 'ANIMATED') {
    await getBreedsByExtention({
      extention: 'gif',
      breeds,
      setBreeds,
    });
    return typedBreeds;
  }
  await getBreedsByExtention({
    extention: 'any',
    breeds,
    setBreeds,
  });
  return typedBreeds;
};

export const clearArray = () => {
  typedBreeds = [];
  page = 0;
};
