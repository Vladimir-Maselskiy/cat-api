import { Box } from '../../../components/Box/Box';
import { StyledIMG } from './SelectedView.styled';

interface IProps {
  currentImg: { url?: string; id?: string } | null;
}

export const SelectedView = ({ currentImg }: IProps) => {
  return (
    <Box
      display="block"
      height={360}
      mt={20}
      position="relative"
    >
      {currentImg && (
        <StyledIMG
          src={currentImg.url}
          alt={currentImg.id}
        />
      )}
    </Box>
  );
};
