import { Box } from 'components/Box/Box';
import { StyledIMG } from './VotingView.styled';

export const VotingView = ({ currentImg }) => {
  console.log(currentImg);
  return (
    <Box display="block" height={360} mt={20} position="relative">
      <StyledIMG src={currentImg[0].url} alt={currentImg[0].id} />
    </Box>
  );
};
