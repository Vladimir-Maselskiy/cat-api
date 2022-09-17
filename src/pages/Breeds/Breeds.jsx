import { Box } from 'components/Box/Box';
import catAPI from '../../utils/catAPI';
import { useState } from 'react';
import { BreedsGallery } from './BreedsGallery/BreedsGallery';
import { useEffect } from 'react';
import { BreedsBar } from './BreedsBar/BreedsBar';

export const Breeds = () => {
  const [breeds, setBreeds] = useState(null);
  const [limit, setLimit] = useState(10);
  const [visibleBreeds, setVisibleBreeds] = useState(null);

  useEffect(() => {
    catAPI.getBreeds(20).then(setBreeds);
  }, []);

  useEffect(() => {
    if (breeds) setVisibleBreeds(breeds.slice(0, limit));
  }, [limit, breeds]);

  const onChangeLimit = option => {
    setLimit(option.value);
  };

  const sortBreeds = order => {
    console.log(order);

    setVisibleBreeds([
      ...visibleBreeds.sort((a, b) => {
        if (order === 'DESC') return a.breeds[0].name > b.breeds[0].name;
        return a.breeds[0].name < b.breeds[0].name;
      }),
    ]);
  };

  return (
    <>
      <BreedsBar
        setBreeds={setBreeds}
        onChangeLimit={onChangeLimit}
        sortBreeds={sortBreeds}
      ></BreedsBar>
      <Box mt={20}>{breeds && <BreedsGallery breeds={visibleBreeds} />}</Box>
    </>
  );
};
