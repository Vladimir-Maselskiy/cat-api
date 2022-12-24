// import Select from 'react-select';
import React from 'react';
import Select, { StylesConfig } from 'react-select';
import {
  IPropReactSelect,
  MyOptionType,
} from '../../../interfaces/interfaces';
type IsMulti = false;

export const LimitImagesSelect = ({
  onChangeLimit,
}: IPropReactSelect) => {
  const options = [
    { value: '5', label: 'Limit: 5' },
    { value: '10', label: 'Limit: 10' },
    { value: '15', label: 'Limit: 15' },
    { value: '20', label: 'Limit: 20' },
  ];

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
        marginLeft: 10,
        boxShadow: 'none',
        borderRadius: 10,
        backgroundColor: '#F8F8F7',
        border: 'none',
        height: 40,
        width: 101,
        cursor: 'pointer',
      }),

      indicatorSeparator: provided => ({
        ...provided,
        display: 'none',
      }),

      singleValue: provided => ({
        ...provided,
        color: '#8C8C8C',
      }),

      valueContainer: provided => ({
        ...provided,
        paddingRight: 0,
        fontSize: 16,
        whiteSpace: 'nowrap',
      }),

      dropdownIndicator: provided => ({
        ...provided,
        padding: '0 8px 0 0',
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
      placeholder={'Limit :10'}
      options={options}
      styles={customStyles}
      onChange={onChangeLimit}
    ></Select>
  );
};
