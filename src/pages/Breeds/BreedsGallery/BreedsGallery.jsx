// import { Box } from 'components/Box/Box';
// import { StyledBreeds } from './StyledBreeds.styled';
// import { useState } from 'react';

import {
  StyledBreedsGallery,
  StyledHoverIMGBox,
  StyledHoverName,
  StyledIMG,
  StyledItem,
} from './BreedsGallery.styled';

export const BreedsGallery = ({ breeds }) => {
  return (
    breeds && (
      <StyledBreedsGallery perPage={breeds.length}>
        {breeds.map((el, index) => {
          return (
            <StyledItem
              key={el.id}
              gridPlace={
                breeds.length > 20 ? (index % 20).toString() : index.toString()
              }
            >
              <StyledHoverIMGBox>
                <StyledHoverName>
                  {el.breeds[0].name !== '' ? el.breeds[0].name : '(^◔ᴥ◔^)'}
                </StyledHoverName>
              </StyledHoverIMGBox>
              <StyledIMG src={el.url} alt={el.id} />
            </StyledItem>
          );
        })}
      </StyledBreedsGallery>
    )
  );
};
