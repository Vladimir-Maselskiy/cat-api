import { BackBotton } from '../../../components/BackBotton/BackBotton';
import { Box } from '../../../components/Box/Box';
import { PageTitle } from '../../../components/PageTitle/PageTitle';

interface IProps {
  id: string;
}

export const SelectedBar = ({ id }: IProps) => {
  return (
    <Box display="flex">
      <BackBotton />
      <PageTitle title="BREEDS" isActiveColor={false} />
      <PageTitle title={id} isActiveColor={true} />
    </Box>
  );
};
