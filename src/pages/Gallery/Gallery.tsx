import { MyOptionType } from 'interfaces/interfaces';
import React, { useEffect, useState } from 'react';
import { SingleValue } from 'react-select';
import catAPI from 'utils/catAPI';
import { Box } from '../../components/Box/Box';
import { Spinner } from '../../components/Spinner/Spinner';
import { GalleryBar } from './GalleryBar/GalleryBar';
import { GalleryImagesGallery } from './GalleryImagesGallery/GalleryImagesGallery';

export const Gallery = () => {
  const [breeds, setBreeds] = useState<any[] | null>(null);
  const [limit, setLimit] = useState<string | undefined>(
    '10'
  );
  const [visibleBreeds, setVisibleBreeds] = useState<
    any[] | null
  >(null);

  useEffect(() => {
    catAPI.getBreeds({ limit: '5' }).then(setBreeds);
  }, []);

  useEffect(() => {
    if (breeds && limit)
      setVisibleBreeds(breeds.slice(0, +limit));
  }, [limit, breeds]);

  const onChangeLimit = (
    option: SingleValue<MyOptionType>
  ): void => {
    setLimit(option?.value);
  };

  const sortBreeds = (order: 'DESC' | 'ASK' | 'RANDOM') => {
    if (visibleBreeds) {
      setVisibleBreeds([
        ...visibleBreeds.sort((a, b) => {
          if (order === 'DESC') {
            if (a.breeds[0].name < b.breeds[0].name)
              return 1;
            if (a.breeds[0].name > b.breeds[0].name)
              return -1;
            return 0;
          }

          if (b.breeds[0].name > a.breeds[0].name)
            return -1;
          if (b.breeds[0].name < a.breeds[0].name) return 1;
          return 0;
        }),
      ]);
    }
  };
  return (
    <>
      <Box width={640}>
        <GalleryBar
          // setBreeds={setBreeds}
          onChangeLimit={onChangeLimit}
          // sortBreeds={sortBreeds}
        />
        {/* <Box mt={20}>{breeds && <BreedsGallery breeds={visibleBreeds} />}</Box> */}
      </Box>
      <Box
        position="relative"
        mt={20}
        display="flex"
        flexGrow={2}
      >
        {breeds ? (
          <GalleryImagesGallery breeds={visibleBreeds} />
        ) : (
          <Spinner />
        )}
      </Box>
    </>
  );
};
