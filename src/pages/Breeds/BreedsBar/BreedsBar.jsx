import { BackBotton } from 'components/BackBotton/BackBotton';
import { Box } from 'components/Box/Box';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { useState } from 'react';
import { BreedsSelect } from '../BreedsSelect/BreedsSelect';

export const BreedsBar = () => {
  const [breeds, setBreeds] = useState([]);
  return (
    <Box display="flex">
      <BackBotton />
      <PageTitle title="BREEDS" />
      <BreedsSelect breeds={breeds} />
    </Box>
  );
};
