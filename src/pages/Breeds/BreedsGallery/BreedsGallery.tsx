import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledBreedsGallery,
  StyledHoverIMGBox,
  StyledHoverName,
  StyledIMG,
  StyledItem,
} from './BreedsGallery.styled';

interface IProps {
  breeds: any[] | null;
}

export const BreedsGallery = ({ breeds }: IProps) => {
  const navigate = useNavigate();
  return (
    breeds && (
      <StyledBreedsGallery perPage={breeds.length}>
        {breeds.map((el, index) => {
          return (
            <StyledItem
              key={el.id}
              gridPlace={
                breeds.length > 20
                  ? (index % 20).toString()
                  : index.toString()
              }
              onClick={() => navigate(`${el.id}`)}
            >
              <StyledHoverIMGBox>
                <StyledHoverName>
                  {el.breeds[0].name !== ''
                    ? el.breeds[0].name
                    : '(^◔ᴥ◔^)'}
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
