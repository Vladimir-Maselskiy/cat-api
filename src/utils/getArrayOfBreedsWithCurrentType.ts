type TParams = {
  type: string;
  breeds: any[];
};
let typedBreeds: any[] = [];

export const getArrayOfBreedsWithCurrentType = async ({
  type,
  breeds,
}: TParams): Promise<any[]> => {
  if (type === 'ALL') return breeds;
  if (type === 'STATIC') {
    typedBreeds = [
      ...typedBreeds,
      ...breeds.filter(
        breed => breed.url.split('.').pop() === 'jpg'
      ),
    ];
    // return typedBreeds;
  }
  return typedBreeds;
};
