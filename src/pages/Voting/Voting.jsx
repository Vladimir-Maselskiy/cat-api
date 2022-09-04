import { Box } from 'components/Box/Box';
import { StyledVoting } from './StyledVoting.styled';

export const Voting = ({ children }) => {
  return (
    <Box>
      <Box>
        <form>
          <input />
        </form>
      </Box>
      <Box></Box>
      <StyledVoting>{children}</StyledVoting>
    </Box>
  );
};
