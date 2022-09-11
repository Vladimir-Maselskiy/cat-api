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

  useEffect(() => {
    catAPI.getBreeds().then(resp => setBreeds(resp));
  }, []);

  const onChangeLimit = option => {
    setLimit(option.value);
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
          ></BreedsBar>
        </Box>

        <Box mt={20}>
          {breeds && <BreedsGallery breeds={breeds.slice(0, limit)} />}
        </Box>
      </Box>
    </Box>
  );
};
