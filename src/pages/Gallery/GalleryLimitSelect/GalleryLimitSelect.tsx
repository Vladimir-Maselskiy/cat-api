import React from 'react';
import { Box } from '../../../components/Box/Box';
import { IPropGallery } from '../../../interfaces/interfaces';
import { GallarySelectTemplate } from '../GallerySelectTemplate/GallerySelectTemplate';
import { StyledTitle } from '../StyledGallery.styled';

export const GalleryLimitSelect = (prop: IPropGallery) => {
  const { title } = prop;
  return (
    <Box width={240}>
      <StyledTitle>{title}</StyledTitle>
      <GallarySelectTemplate {...prop} />
    </Box>
  );
};
