import { Box } from 'components/Box/Box';
import { StyledIMG } from './VotingView.styled';

export const VotingView = ({ currentImg }) => {
  return (
    <Box display="block" height={360} mt={20} position="relative">
      <StyledIMG src={currentImg.url} alt={currentImg.id} />
    </Box>
  );
};
