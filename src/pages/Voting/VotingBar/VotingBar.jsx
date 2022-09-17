import { BackBotton } from 'components/BackBotton/BackBotton';
import { Box } from 'components/Box/Box';
import { PageTitle } from 'components/PageTitle/PageTitle';
// import catAPI from 'utils/catAPI';

export const VotingBar = () => {
  return (
    <Box display="flex">
      <BackBotton />
      <PageTitle title="VOTING" />
    </Box>
  );
};
