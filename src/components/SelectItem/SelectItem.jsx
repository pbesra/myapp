import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectItem=({setName})=> {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    setName(event.target.value);
  };

  return (
    <Box sx={{minWidth:"200px"}}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{width:"300px"}}
        >
          <MenuItem value={"prakash"}>Prakash</MenuItem>
          <MenuItem value={"abay"}>Abay</MenuItem>
          <MenuItem value={"reena"}>Reena</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectItem;
