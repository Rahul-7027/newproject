import React from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';
import FormBuilder from './components/FormBuilder';
import FieldPalette from './components/FieldPalette';

export default function App() {
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 3, mb: 3 }}>
        <Typography variant="h6" fontWeight={600} color="primary.dark">
          John’s workspace / Job application
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <FormBuilder />
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
            <FieldPalette />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
