import { BackBotton } from 'components/BackBotton/BackBotton';
import { Box } from 'components/Box/Box';
import { PageTitle } from 'components/PageTitle/PageTitle';
import catAPI from 'utils/catAPI';
import { BreedsSelect } from '../BreedsSelect/BreedsSelect';

export const BreedsBar = ({ setBreeds }) => {
  const onChange = option => {
    catAPI.getBreedsByBreedID(option.value.id).then(resp => setBreeds(resp));
  };

  return (
    <Box display="flex">
      <BackBotton />
      <PageTitle title="BREEDS" />
      <BreedsSelect onChange={onChange} />
    </Box>
  );
};
