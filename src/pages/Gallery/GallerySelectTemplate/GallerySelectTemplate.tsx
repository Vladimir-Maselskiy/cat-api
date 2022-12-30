import React from 'react';
import { useEffect, useState } from 'react';
import Select, {
  ActionMeta,
  PropsValue,
  SingleValue,
  StylesConfig,
} from 'react-select';
import { MyOptionType } from '../../../interfaces/interfaces';
import { StyledSelectBox } from './GallarySelectTemplate.styled';
// import catAPI from 'utils/catAPI';

interface IProp {
  onChange?: (
    newValue: SingleValue<MyOptionType>,
    actionMeta: ActionMeta<MyOptionType>
  ) => void;
  initialOptions: string[];
  name: string;
  placeholder: string;
  value: PropsValue<MyOptionType>;
}

type IsMulti = false;

export const GallarySelectTemplate = ({
  onChange,
  initialOptions,
  name,
  placeholder,
  value,
}: IProp) => {
  const [options, setOptions] = useState<MyOptionType[]>(
    []
  );

  useEffect(() => {
    setOptions([
      ...initialOptions.map(optionName => ({
        value: optionName.toUpperCase(),
        label: optionName,
      })),
    ]);
  }, [initialOptions]);

  const customStyles: StylesConfig<MyOptionType, IsMulti> =
    {
      container: (provided, state) => ({
        ...provided,
        display: 'inline-block',
        borderRadius: '10px',
        width: '100%',
      }),

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
      control: (_, state) => ({
        // ...provided,
        // marginLeft: 10,
        display: 'flex',
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        boxShadow: 'none',
        border: 'none',
        minHeight: 40,
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
    <StyledSelectBox>
      <Select
        placeholder={placeholder}
        options={options}
        styles={customStyles}
        onChange={onChange}
        name={name}
        value={value}
      ></Select>
    </StyledSelectBox>
  );
};
