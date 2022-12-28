import { MyOptionType } from 'interfaces/interfaces';
import React, { useEffect, useState } from 'react';
import { ActionMeta, SingleValue } from 'react-select';
import catAPI from 'utils/catAPI';
import {
  clearArray,
  getArrayOfBreedsWithCurrentType,
} from 'utils/getArrayOfBreedsWithCurrentType';
import { sortVisibleImageItems } from 'utils/sortVisibleImageItems';
import { Box } from '../../components/Box/Box';
import { Spinner } from '../../components/Spinner/Spinner';
import { GalleryBar } from './GalleryBar/GalleryBar';
import { GalleryImagesGallery } from './GalleryImagesGallery/GalleryImagesGallery';

export const Gallery = () => {
  const [breeds, setBreeds] = useState<any[] | null>(null);
  const [limit, setLimit] = useState<string | undefined>(
    '5'
  );
  const [visibleBreeds, setVisibleBreeds] = useState<
    any[] | null
  >(null);

  useEffect(() => {
    console.log('visibleBreeds', visibleBreeds);
  }, [visibleBreeds]);

  useEffect(() => {
    catAPI
      .getBreeds({ limit: '20', hasBreeds: '0' })
      .then(setBreeds);
  }, []);

  useEffect(() => {
    if (breeds && limit)
      setVisibleBreeds(breeds.slice(0, +limit));
  }, [limit, breeds]);

  const onChange = (
    newValue: SingleValue<MyOptionType>,
    actionMeta: ActionMeta<MyOptionType>
  ): void => {
    switch (actionMeta.name) {
      case 'ORDER':
        if (breeds)
          setBreeds(
            sortVisibleImageItems({
              visibleBreeds: breeds,
              order: newValue?.value,
            })
          );
        break;
      case 'TYPE':
        if (newValue?.value && breeds) {
          clearArray();
          getArrayOfBreedsWithCurrentType({
            type: newValue.value,
            breeds,
          }).then(setBreeds);
        }

        break;
      case 'BREED':
        break;
      case 'LIMIT':
        if (newValue?.value)
          setLimit(parseInt(newValue.value).toString());
        break;
    }
    console.log('newValue', newValue);
    console.log('actionMeta', actionMeta);
  };

  return (
    <>
      <Box width={640}>
        <GalleryBar
          // setBreeds={setBreeds}
          onChange={onChange}

          // sortBreeds={sortBreeds}
        />
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
