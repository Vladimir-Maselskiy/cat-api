import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';

export const BreedsSelect = ({ breeds }) => {
  const [value, setValue] = useState(10);

  const handleMemuItemClick = e => {
    console.log(e.target.dataset.value);
    setValue(e.target.dataset.value);
  };
  return (
    <FormControl
      sx={{
        width: 226,
        height: 40,
        ml: '10px',
        borderBottomColor: 'red',
      }}
    >
      <InputLabel id="demo-simple-select-label"></InputLabel>
      <Select
        sx={{
          height: 40,
          color: '#8C8C8C',
          borderRadius: '10px',
        }}
        // variant="filled"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={console.log('handleChange')}
      >
        <MenuItem value={10} onClick={handleMemuItemClick}>
          Ten
        </MenuItem>
        <MenuItem value={20} onClick={handleMemuItemClick}>
          Twenty
        </MenuItem>
        <MenuItem value={30} onClick={handleMemuItemClick}>
          Thirty
        </MenuItem>
      </Select>
    </FormControl>
  );
};
