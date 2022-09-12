import { Box } from 'components/Box/Box';
// import { StyledBreeds } from './StyledBreeds.styled';
import catAPI from '../../utils/catAPI';
import { useState } from 'react';
import { BreedsGallery } from './BreedsGallery/BreedsGallery';
import { useEffect } from 'react';
import { BreedsBar } from './BreedsBar/BreedsBar';
// import { getBreeds } from '../../utils/catAPI';

export const Breeds = () => {
  const [breeds, setBreeds] = useState(null);
  const [limit, setLimit] = useState(10);
  const [visibleBreeds, setVisibleBreeds] = useState(null);

  useEffect(() => {
    catAPI.getBreeds().then(setBreeds);
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
    <Box p="30px 30px 30px 65px">
      <Box bg="#FFFFFF" borderRadius={20}>
        <form>
          <input />
        </form>
      </Box>
      <Box bg="#FFFFFF" mt={20} borderRadius={20} p={20}>
        <Box>
          <BreedsBar
            setBreeds={setBreeds}
            onChangeLimit={onChangeLimit}
            sortBreeds={sortBreeds}
          ></BreedsBar>
        </Box>

        <Box mt={20}>{breeds && <BreedsGallery breeds={visibleBreeds} />}</Box>
      </Box>
    </Box>
  );
};
