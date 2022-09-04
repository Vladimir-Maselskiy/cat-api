import { Box } from 'components/Box/Box';
// import { StyledBreeds } from './StyledBreeds.styled';
import catAPI from '../../utils/catAPI';
import { useState } from 'react';
import { BreedsGallery } from './BreedsGallery/BreedsGallery';
import { useEffect } from 'react';
// import { getBreeds } from '../../utils/catAPI';

export const Breeds = () => {
  const [breeds, setBreeds] = useState(null);
  //   console.log(catAPI);
  useEffect(() => {
    catAPI.getBreeds().then(resp => setBreeds(resp));
  }, []);
  return (
    <Box p="30px 30px 30px 65px">
      <Box>
        <form>
          <input />
        </form>
      </Box>

      <Box>{breeds && <BreedsGallery breeds={breeds} />}</Box>
    </Box>
  );
};
