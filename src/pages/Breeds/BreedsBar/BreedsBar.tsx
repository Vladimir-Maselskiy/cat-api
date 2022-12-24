import React from 'react';
import { BackBotton } from '../../../components/BackBotton/BackBotton';
import { Box } from '../../../components/Box/Box';
import { PageTitle } from '../../../components/PageTitle/PageTitle';
import catAPI from '../../../utils/catAPI';
import { BreedsSelect } from '../BreedsSelect/BreedsSelect';
import { DescSortButton } from '../DescSortButton/DescSortButton';
import { AscSortButton } from '../AscSortButton/AscSortButton';
import { LimitImagesSelect } from '../LimitImagesSelect/LimitImagesSelect';
import { ActionMeta, SingleValue } from 'react-select';

interface IProps {
  setBreeds: (t: any) => void;
  onChangeLimit: (
    newValue: SingleValue<MyOptionType>,
    actionMeta: ActionMeta<MyOptionType>
  ) => void;
  sortBreeds: (order: string) => void;
}

type MyOptionType = {
  label: string;
  value: string;
};

export const BreedsBar = ({
  setBreeds,
  onChangeLimit,
  sortBreeds,
}: IProps) => {
  const onChange = (option: SingleValue<MyOptionType>) => {
    if (option?.value === 'allBreeds') {
      catAPI.getBreeds().then(resp => setBreeds(resp));
      return;
    }
    catAPI
      .getBreedsByBreedID(option?.value)
      .then(resp => setBreeds(resp));
  };

  return (
    <Box display="flex">
      <BackBotton />
      <PageTitle title="BREEDS" />
      <BreedsSelect onChange={onChange} />
      <LimitImagesSelect onChangeLimit={onChangeLimit} />
      <AscSortButton sortBreeds={sortBreeds} />
      <DescSortButton sortBreeds={sortBreeds} />
    </Box>
  );
};
