import { BackBotton } from '../../../components/BackBotton/BackBotton';
import { Box } from '../../../components/Box/Box';
import { PageTitle } from '../../../components/PageTitle/PageTitle';

export const SelectedBar = () => {
  return (
    <Box display="flex">
      <BackBotton />
      <PageTitle title="VOTING" />
    </Box>
  );
};
