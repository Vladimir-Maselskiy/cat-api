import { useEffect, useState } from 'react';
import Select, {
  ActionMeta,
  SingleValue,
  StylesConfig,
} from 'react-select';

import catAPI from '../../../utils/catAPI';

import { IBreed } from '../../../interfaces/interfaces';

type IsMulti = false;

type MyOptionType = {
  label: string;
  value: string;
};

interface IProp {
  onChange: (
    newValue: SingleValue<MyOptionType>,
    actionMeta: ActionMeta<MyOptionType>
  ) => void;
}

interface IOption {
  value: string;
  label: string;
}

export const BreedsSelect = ({ onChange }: IProp) => {
  const [options, setOptions] = useState<IOption[]>([]);
  const [breedsNames, setBreedsNames] = useState<IBreed[]>(
    []
  );

  useEffect(() => {
    catAPI.getBreedsName().then(resp => {
      setBreedsNames(resp);
    });
  }, []);

  useEffect(() => {
    setOptions([
      {
        value: '',
        label: 'All breeds',
      },
      ...breedsNames.map(breed => ({
        value: breed.id,
        label: breed.name,
      })),
    ]);
  }, [breedsNames]);

  const customStyles: StylesConfig<MyOptionType, IsMulti> =
    {
      option: (provided, state) => ({
        ...provided,
        borderBottom: 'none',
        backgroundColor: state.isSelected
          ? '#FF868E'
          : state.isFocused
          ? '#FBE0DC'
          : '#F8F8F7',

        color: state.isSelected ? '#FFFFFF' : '#8C8C8C',
        padding: 20,
      }),
      control: provided => ({
        ...provided,
        boxShadow: 'none',
        marginLeft: 10,
        borderRadius: 10,
        backgroundColor: '#F8F8F7',
        border: 'none',
        minHeight: 40,
        width: 226,
        cursor: 'pointer',
      }),

      indicatorSeparator: provided => ({
        ...provided,
        display: 'none',
      }),

      singleValue: provided => ({
        ...provided,
        color: '#8C8C8C',
        lineHeight: 1.5,
      }),

      menu: provided => ({
        ...provided,
        borderRadius: 30,
        width: 300,
        left: 10,
        overflow: '-moz-scrollbars-none',
      }),

      menuList: provided => ({
        ...provided,
        borderRadius: 30,
        padding: 0,
        overflow: '-moz-scrollbars-none',
      }),
    };

  return (
    <Select
      placeholder={'All breeds'}
      options={options}
      styles={customStyles}
      onChange={onChange}
    ></Select>
  );
};
