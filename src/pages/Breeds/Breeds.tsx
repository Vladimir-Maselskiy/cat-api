import React from 'react';
import { Box } from '../../components/Box/Box';
import catAPI from '../../utils/catAPI';
import { useState } from 'react';
import { BreedsGallery } from './BreedsGallery/BreedsGallery';
import { useEffect } from 'react';
import { BreedsBar } from './BreedsBar/BreedsBar';
import { Spinner } from '../../components/Spinner/Spinner';
import { MyOptionType } from '../../interfaces/interfaces';
import { SingleValue } from 'react-select';
import { sortVisibleImageItems } from 'utils/sortVisibleImageItems';

// interface IBreeds  {}

export const Breeds = () => {
  const [breeds, setBreeds] = useState<any[] | null>(null);
  const [limit, setLimit] = useState<string | undefined>(
    '10'
  );
  const [visibleBreeds, setVisibleBreeds] = useState<
    any[] | null
  >(null);

  useEffect(() => {
    catAPI
      .getBreeds({ limit: '20', hasBreeds: '1' })
      .then(setBreeds);
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

  const sortBreeds = (order: 'DESC' | 'ASC' | 'RANDOM') => {
    if (visibleBreeds) {
      setVisibleBreeds(
        sortVisibleImageItems({ visibleBreeds, order })
      );
    }
  };

  return (
    <>
      <BreedsBar
        setBreeds={setBreeds}
        limit={limit}
        onChangeLimit={onChangeLimit}
        sortBreeds={sortBreeds}
      ></BreedsBar>

      <Box
        position="relative"
        mt={20}
        display="flex"
        flexGrow={2}
        maxHeight={880}
      >
        {breeds ? (
          <BreedsGallery breeds={visibleBreeds} />
        ) : (
          <Spinner />
        )}
      </Box>
    </>
  );
};
