import React, { useState } from 'react';
import { Box, Container, Paper, TextField } from '@material-ui/core';

import { QuestionContainer } from '../components'

export const AppContainer = () => {
  const [title, setTitle] = useState("Untitled");
  const [description, setDescription] = useState("")
  return (
    <Container maxWidth="md">
      <Box m={2} mb={1} p={4} component={Paper}>
        <TextField
          inputProps={{style: {fontSize: 36}}}
          InputLabelProps={{style: {fontSize: 36}}}
          value={title}
          fullWidth
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          placeholder="Form description"
          value={description}
          fullWidth
          onChange={(e) => setDescription(e.target.value)}
        />
      </Box>
      <QuestionContainer/>
    </Container>
  )
}
