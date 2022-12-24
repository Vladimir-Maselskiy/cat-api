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
// import catAPI from 'utils/catAPI';
// import { BreedsSelect } from '../BreedsSelect/BreedsSelect';
// import { DescSortButton } from '../DescSortButton/DescSortButton';
// import { AscSortButton } from '../AscSortButton/AscSortButton';
// import { LimitImagesSelect } from '../LimitImagesSelect/LimitImagesSelect';

export const GalleryBar = () =>
  //   {
  //   setBreeds,
  //   onChangeLimit,
  //   sortBreeds,
  // }
  {
    // const onChange = option => {
    //   if (option.value.id === 'allBreeds') {
    //     catAPI.getBreeds().then(resp => setBreeds(resp));
    //     return;
    //   }
    //   catAPI.getBreedsByBreedID(option.value.id).then(resp => setBreeds(resp));
    // };
    const [breedSelectOptions, setBreedSelectOptions] =
      useState(['None']);
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
