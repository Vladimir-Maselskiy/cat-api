import { useEffect, useState } from 'react';
import Select from 'react-select';
import { StyledSelectBox } from './GallarySelectTemplate.styled';
// import catAPI from 'utils/catAPI';

export const GallarySelectTemplate = ({ onChange, title, initialOptions }) => {
  const [options, setOptions] = useState([]);
  // const [breedsNames, setBreedsNames] = useState([]);

  // useEffect(() => {
  //   catAPI.getBreedsName().then(resp => {
  //     setBreedsNames(resp);
  //   });
  // }, []);

  // useEffect(() => {
  //   setOptions([
  //     { value: { id: 'allBreeds', name: 'All breeds' }, label: 'All breeds' },
  //     ...breedsNames.map(breed => ({ value: breed, label: breed.name })),
  //   ]);
  // }, []);

  useEffect(() => {
    setOptions([
      ...initialOptions.map(optionName => ({
        value: optionName,
        label: optionName,
      })),
    ]);
  }, [initialOptions]);

  const customStyles = {
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

      // border: state.isHovered ? '5px solid #FF868E' : '5px solid #FF868E',
      minHeight: 40,
      // width: '100%',
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
      // left: 10,
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
        placeholder={initialOptions[0]}
        options={options}
        styles={customStyles}
        onChange={onChange}
      ></Select>
    </StyledSelectBox>
  );
};
