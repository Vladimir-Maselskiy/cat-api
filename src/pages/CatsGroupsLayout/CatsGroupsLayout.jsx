import { BackBotton } from 'components/BackBotton/BackBotton';
import { Box } from 'components/Box/Box';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { BreedsGallery } from 'pages/Breeds/BreedsGallery/BreedsGallery';
import { useParams } from 'react-router-dom';

export const CatsGroupsLayout = ({ groups }) => {
  const { group: groupName } = useParams();
  const currentGroup = groups[groupName];
  console.log(currentGroup);

  return (
    <>
      <Box display="flex">
        <BackBotton />
        <PageTitle title={groupName.toUpperCase()} />
      </Box>
      <Box mt={20}>
        <BreedsGallery breeds={currentGroup.slice(0, 20)} />
      </Box>
    </>
  );
};
