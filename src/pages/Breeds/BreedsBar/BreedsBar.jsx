import { BackBotton } from 'components/BackBotton/BackBotton';
import { Box } from 'components/Box/Box';
import { PageTitle } from 'components/PageTitle/PageTitle';

export const BreedsBar = () => {
  return (
    <Box display="flex">
      <BackBotton />
      <PageTitle title="BREEDS" />
    </Box>
  );
};
