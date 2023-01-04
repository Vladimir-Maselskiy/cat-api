import { BackBotton } from '../../../components/BackBotton/BackBotton';
import { Box } from '../../../components/Box/Box';
import { PageTitle } from '../../../components/PageTitle/PageTitle';
import { useEffect, useState } from 'react';
import catAPI from '../../../utils/catAPI';
import { GalleryBreedSelect } from '../GalleryBreedSelect/GalleryBreedSelect';
import { GalleryLimitSelect } from '../GalleryLimitSelect/GalleryLimitSelect';
import { GalleryOrderSelect } from '../GalleryOrderSelect/GalleryOrderSelect';
import { GalleryTypeSelect } from '../GalleryTypeSelect/GalleryTypeSelect';
import {
  ActionMeta,
  PropsValue,
  SingleValue,
} from 'react-select';
import { MyOptionType } from 'interfaces/interfaces';
import { ReloadImagesButton } from '../ReloadImagesButton/ReloadImagesButton';
import {
  limitSelectOptions,
  orderSelectOptions,
  typeSelectOptions,
} from '../../../data/const';

interface IProps {
  placeHolders: {
    limit: string;
    currentBreed: string;
    type: string;
    order: string;
  };
  onReloadButtonClic: () => void;
  onChange: (
    newValue: SingleValue<MyOptionType>,
    actionMeta: ActionMeta<MyOptionType>
  ) => void;
  values: {
    limit: PropsValue<MyOptionType>;
    currentBreed: PropsValue<MyOptionType>;
    type: PropsValue<MyOptionType>;
    order: PropsValue<MyOptionType>;
  };
}

export const GalleryBar = ({
  onReloadButtonClic,
  onChange,
  placeHolders,
  values,
}: IProps) => {
  const [breedSelectOptions, setBreedSelectOptions] =
    useState<string[]>(['None']);

  useEffect(() => {
    catAPI.getBreedsName().then(resp => {
      const breeds = resp.map(breed => breed.name);
      setBreedSelectOptions(p => [...p, ...breeds]);
    });
  }, []);

  return (
    <>
      <Box display="flex">
        <BackBotton />
        <PageTitle title="GALLERY" isActiveColor={true} />
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
          onChange={onChange}
          name="ORDER"
          placeholder={placeHolders.order}
          value={values.order}
        />
        <GalleryTypeSelect
          title="TYPE"
          initialOptions={typeSelectOptions}
          onChange={onChange}
          name="TYPE"
          placeholder={placeHolders.type}
          value={values.type}
        />
        <GalleryBreedSelect
          title="BREED"
          initialOptions={breedSelectOptions}
          onChange={onChange}
          name="BREED"
          placeholder={placeHolders.currentBreed}
          value={values.currentBreed}
        />
        <Box display="flex" alignItems="end">
          <GalleryLimitSelect
            title="LIMIT"
            initialOptions={limitSelectOptions}
            onChange={onChange}
            name="LIMIT"
            placeholder={placeHolders.limit}
            value={values.limit}
          />
          <ReloadImagesButton
            onClick={onReloadButtonClic}
          />
        </Box>
      </Box>
    </>
  );
};
