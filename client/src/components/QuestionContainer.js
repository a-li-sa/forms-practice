import React, {useState} from 'react';
import {Box, FormControl, Grid, MenuItem, Paper, Select, TextField} from "@material-ui/core";

import { OptionsContainer } from './OptionsContainer'

export const QuestionContainer = () => {
  const [question, setQuestion] = useState('');
  const [type, setType] = useState('Multiple choice')

  return (
    <Box m={2} mb={1} p={4} component={Paper}>
      <Grid container>
        <Grid item xs={8}>
          <TextField
            variant="filled"
            placeholder="Question"
            value={question}
            fullWidth
            onChange={(e) => setQuestion(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl variant="outlined" fullWidth>
            <Select
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              <MenuItem value="Multiple choice">Multiple choice</MenuItem>
              <MenuItem value="Checkboxes">Checkboxes</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <OptionsContainer type={type}/>
    </Box>
  )
}
