import React from 'react';
import { Box } from '../../../components/Box/Box';
import { IPropGallery } from '../../../interfaces/interfaces';
import { GallarySelectTemplate } from '../GallerySelectTemplate/GallerySelectTemplate';
import { StyledTitle } from '../StyledGallery.styled';

export const GalleryBreedSelect = (prop: IPropGallery) => {
  const { title } = prop;
  return (
    <Box width={290}>
      <StyledTitle>{title}</StyledTitle>
      <GallarySelectTemplate {...prop} />
    </Box>
  );
};
