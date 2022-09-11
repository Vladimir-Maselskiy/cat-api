import { useEffect, useState } from 'react';
import Select from 'react-select';
import catAPI from 'utils/catAPI';

export const BreedsSelect = ({ onChange }) => {
  const [options, setOptions] = useState([]);
  const [breedsNames, setBreedsNames] = useState([]);

  useEffect(() => {
    catAPI.getBreedsName().then(resp => {
      setBreedsNames(resp);
    });
  }, []);

  useEffect(() => {
    setOptions([
      { value: { id: 'allBreeds', name: 'All breeds' }, label: 'All breeds' },
      ...breedsNames.map(breed => ({ value: breed, label: breed.name })),
    ]);
  }, [breedsNames]);

  const customStyles = {
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
      borderRadius: 10,
      backgroundColor: '#F8F8F7',
      border: 'none',
      minHeight: 40,
      width: 226,
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
