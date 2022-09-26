import { Box } from 'components/Box/Box';
import { GallarySelectTemplate } from '../GallerySelectTemplate/GallerySelectTemplate';
import { StyledTitle } from '../StyledGallery.styled';

export const GalleryOrderSelect = prop => {
  const { title } = prop;
  return (
    <Box width={290}>
      <StyledTitle>{title}</StyledTitle>
      <GallarySelectTemplate {...prop} />
    </Box>
  );
};
