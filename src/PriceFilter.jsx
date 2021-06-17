import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function PriceFilter() {
  const [value, setValue] = React.useState('Any');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Price</FormLabel>
      <RadioGroup aria-label="price" name="price" value={value} onChange={handleChange}>
      <FormControlLabel value="Any" control={<Radio />} label="Any" />
        <FormControlLabel value="< 1000" control={<Radio />} label="Less than 1000" />
        <FormControlLabel value="in 1000 10000" control={<Radio />} label="1000-10000" />
        <FormControlLabel value="> 10000" control={<Radio />} label=">10000" />
      </RadioGroup>
    </FormControl>
  );
}