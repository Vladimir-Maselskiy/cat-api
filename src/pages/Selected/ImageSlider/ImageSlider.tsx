import { useEffect, useState } from 'react';

import { Box } from '../../../components/Box/Box';
import {
  DotsBox,
  StyledDot,
  StyledIMG,
} from './ImageSlider.styled';

interface IProps {
  visibleBreeds: { url?: string; id?: string }[] | null;
  setIdOfVisibleBreed: (n: number) => void;
}

export const ImageSlider = ({
  visibleBreeds,
  setIdOfVisibleBreed,
}: IProps) => {
  const [indexOfVisibleImage, setIndexOfVisibleImage] =
    useState<number>(0);

  useEffect(() => {
    setIdOfVisibleBreed(indexOfVisibleImage);
  }, [indexOfVisibleImage, setIdOfVisibleBreed]);

  return (
    <Box height={360} position="relative">
      {visibleBreeds && (
        <>
          <DotsBox>
            {visibleBreeds.map((breed, index) => {
              const activDot =
                indexOfVisibleImage === index
                  ? true
                  : false;
              return (
                <StyledDot
                  isActiv={activDot}
                  onClick={() => {
                    setIndexOfVisibleImage(index);
                  }}
                />
              );
            })}
          </DotsBox>
          <StyledIMG
            loading="eager"
            src={visibleBreeds[indexOfVisibleImage].url}
            alt={visibleBreeds[indexOfVisibleImage].id}
          />
        </>
      )}
    </Box>
  );
};
