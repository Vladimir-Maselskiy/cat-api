import { BackBotton } from 'components/BackBotton/BackBotton';
import { Box } from 'components/Box/Box';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { TCat } from 'interfaces/interfaces';
import { BreedsGallery } from 'pages/Breeds/BreedsGallery/BreedsGallery';
import { useParams } from 'react-router-dom';

interface IProps {
  groups: {
    likes: TCat[];
    favourites: TCat[];
    dislikes: TCat[];
  };
}

export const CatsGroupsLayout = ({ groups }: IProps) => {
  let currentGroup: TCat[] = [];
  const { group: groupName } = useParams();
  if (
    groupName === 'likes' ||
    groupName === 'favourites' ||
    groupName === 'dislikes'
  ) {
    currentGroup = groups[groupName];
  }

  return (
    <>
      <Box display="flex">
        <BackBotton />
        {groupName && (
          <PageTitle
            title={groupName.toUpperCase()}
            isActiveColor={true}
          />
        )}
      </Box>
      <Box mt={20}>
        <BreedsGallery breeds={currentGroup.slice(0, 20)} />
      </Box>
    </>
  );
};
