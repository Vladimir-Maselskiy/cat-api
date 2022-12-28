import React from 'react';
import { BackBotton } from '../../../components/BackBotton/BackBotton';
import { Box } from '../../../components/Box/Box';
import { PageTitle } from '../../../components/PageTitle/PageTitle';
import { useEffect, useState } from 'react';
import catAPI from '../../../utils/catAPI';
import { GalleryBreedSelect } from '../GalleryBreedSelect/GalleryBreedSelect';
import { GalleryLimitSelect } from '../GalleryLimitSelect/GalleryLimitSelect';
import { GalleryOrderSelect } from '../GalleryOrderSelect/GalleryOrderSelect';
import { GalleryTypeSelect } from '../GalleryTypeSelect/GalleryTypeSelect';
import { ActionMeta, SingleValue } from 'react-select';
import { MyOptionType } from 'interfaces/interfaces';

interface IProps {
  setBreeds?: (t: any) => void;
  onChangeLimit: (
    newValue: SingleValue<MyOptionType>,
    actionMeta: ActionMeta<MyOptionType>
  ) => void;
  sortBreeds?: (order: string) => void;
  limit?: string | undefined;
}

export const GalleryBar = ({
  setBreeds,
  onChangeLimit,
  sortBreeds,
  limit,
}: IProps) => {
  const [breedSelectOptions, setBreedSelectOptions] =
    useState<string[]>(['None']);
  // const [limit, setLimit] = useState(5);
  // const [visibleBreeds, setVisibleBreeds] = useState(null);

  useEffect(() => {
    catAPI.getBreedsName().then(resp => {
      const breeds = resp.map(breed => breed.name);
      setBreedSelectOptions(p => [...p, ...breeds]);
    });
  }, []);

  const orderSelectOptions = ['Random', 'Desc', 'Asc'];
  const typeSelectOptions = ['All', 'Static', 'Animated'];
  const limitSelectOptions = [
    '5 items per page',
    '10 items per page',
    '15 items per page',
    '20 items per page',
  ];

  return (
    <>
      <Box display="flex">
        <BackBotton />
        <PageTitle title="GALLERY" />

        {/* <BreedsSelect onChange={onChange} />
    <LimitImagesSelect onChangeLimit={onChangeLimit} />
    <AscSortButton sortBreeds={sortBreeds} />
    <DescSortButton sortBreeds={sortBreeds} /> */}
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        bg="#F8F8F7"
        mt={20}
        p="10px 20px 20px 20px"
        borderRadius={20}
      >
        <GalleryOrderSelect
          title="ORDER"
          initialOptions={orderSelectOptions}
        />
        <GalleryTypeSelect
          title="TYPE"
          initialOptions={typeSelectOptions}
        />
        <GalleryBreedSelect
          title="BREED"
          initialOptions={breedSelectOptions}
        />
        <GalleryLimitSelect
          title="LIMIT"
          initialOptions={limitSelectOptions}
        />
      </Box>
    </>
  );
};
