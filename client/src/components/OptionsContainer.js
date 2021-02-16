import React, {useState} from 'react';
import {Grid, TextField } from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

export const OptionsContainer = (props) => {
  const [value, setValue] = useState('Option 1');

  return (
    <Grid container spacing={1} alignItems="flex-end">
      <Grid item>
        {props.type === "Multiple choice" ? <RadioButtonUncheckedIcon /> : <CheckBoxOutlineBlankIcon/>}
      </Grid>
      <Grid item>
        <TextField
          value={value}
          fullWidth
          onChange={(e) => setValue(e.target.value)}
        />
      </Grid>
    </Grid>
  );
}
