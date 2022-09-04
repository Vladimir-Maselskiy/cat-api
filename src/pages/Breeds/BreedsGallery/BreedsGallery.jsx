// import { Box } from 'components/Box/Box';
// import { StyledBreeds } from './StyledBreeds.styled';
// import { useState } from 'react';

import {
  StyledBreedsGallery,
  StyledIMG,
  StyledItem,
} from './BreedsGallery.styled';

export const BreedsGallery = ({ breeds }) => {
  console.log('BreedsGallery');
  return (
    <StyledBreedsGallery perPage={breeds.data.length}>
      {breeds.data.map((el, index) => {
        return (
          <StyledItem
            key={el.id}
            gridPlace={
              breeds.data.length > 20
                ? (index % 20).toString()
                : index.toString()
            }
          >
            <StyledIMG src={el.url} alt={el.id} />
          </StyledItem>
        );
      })}
    </StyledBreedsGallery>
  );
};
