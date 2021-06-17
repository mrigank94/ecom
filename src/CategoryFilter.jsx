import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function CategoryFilter() {
  const [value, setValue] = React.useState('All');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Category</FormLabel>
      <RadioGroup aria-label="category1" name="category1" value={value} onChange={handleChange}>
        <FormControlLabel value="All" control={<Radio />} label="All" />
        <FormControlLabel value="Furniture" control={<Radio />} label="Furniture" />
        <FormControlLabel value="Kitchen" control={<Radio />} label="Kitchen" />
        <FormControlLabel value="Apparel" control={<Radio />} label="Apparel" />
        <FormControlLabel value="Electronics" control={<Radio />} label="Electronics" />
      </RadioGroup>
    </FormControl>
  );
}