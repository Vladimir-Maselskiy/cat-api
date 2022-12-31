import {
  initialCurrentBreed,
  initialLimit,
  initialOrder,
  initialType,
} from 'data/const';
import { MyOptionType } from 'interfaces/interfaces';
import { useEffect, useState } from 'react';
import { ActionMeta, SingleValue } from 'react-select';
import catAPI from 'utils/catAPI';
import {
  clearArray,
  getArrayOfBreedsWithCurrentType,
} from 'utils/getArrayOfBreedsWithCurrentType';
import { getPlaceholders } from 'utils/getPlaceholders';
import { sortVisibleImageItems } from 'utils/sortVisibleImageItems';
import { Box } from '../../components/Box/Box';
import { Spinner } from '../../components/Spinner/Spinner';
import { GalleryBar } from './GalleryBar/GalleryBar';
import { GalleryImagesGallery } from './GalleryImagesGallery/GalleryImagesGallery';

export const Gallery = () => {
  const placeholders = getPlaceholders();

  const [breeds, setBreeds] = useState<any[] | null>(null);

  const [limit, setLimit] =
    useState<MyOptionType>(initialLimit);

  const [order, setOrder] =
    useState<MyOptionType>(initialOrder);

  const [type, setType] =
    useState<MyOptionType>(initialType);
  const [currentBreed, setCurrentBreed] =
    useState<MyOptionType>(initialCurrentBreed);

  const [visibleBreeds, setVisibleBreeds] = useState<
    any[] | null
  >(null);

  useEffect(() => {
    catAPI
      .getBreeds({ limit: '20', hasBreeds: '0' })
      .then(setBreeds);
  }, []);

  useEffect(() => {
    if (breeds && limit)
      setVisibleBreeds(
        breeds.slice(0, parseInt(limit.value))
      );
  }, [limit, breeds]);

  const onChange = (
    newValue: SingleValue<MyOptionType>,
    actionMeta: ActionMeta<MyOptionType>
  ): void => {
    switch (actionMeta.name) {
      case 'ORDER':
        if (newValue) setOrder(newValue);
        if (breeds)
          setBreeds(
            sortVisibleImageItems({
              visibleBreeds: breeds,
              order: newValue?.value,
            })
          );
        break;
      case 'TYPE':
        if (newValue) setType(newValue);
        if (newValue?.value && breeds) {
          clearArray();
          getArrayOfBreedsWithCurrentType({
            type: newValue.value,
            breeds,
            setBreeds,
          });
        }

        break;
      case 'BREED':
        if (newValue) setCurrentBreed(newValue);
        break;
      case 'LIMIT':
        if (newValue) setLimit(newValue);
        break;
    }
  };

  const onReloadButtonClic = () => {
    setBreeds([]);
    setCurrentBreed(initialCurrentBreed);
    setType(initialType);
    setOrder(initialOrder);
    setLimit(initialLimit);
    catAPI
      .getBreeds({ limit: '20', hasBreeds: '0' })
      .then(setBreeds);
  };

  return (
    <>
      <Box width={640}>
        <GalleryBar
          onChange={onChange}
          onReloadButtonClic={onReloadButtonClic}
          placeHolders={placeholders}
          values={{ limit, currentBreed, order, type }}
        />
      </Box>
      <Box
        position="relative"
        mt={20}
        display="flex"
        flexGrow={2}
        maxHeight={700}
      >
        {breeds && breeds.length > 0 ? (
          <GalleryImagesGallery breeds={visibleBreeds} />
        ) : (
          <Spinner />
        )}
      </Box>
    </>
  );
};
