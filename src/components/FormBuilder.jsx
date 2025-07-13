import React, { useState, useEffect } from 'react';
import {
  Paper,
  Box,
  Typography,
  IconButton,
  Button,
  Fade,
  Stack,
  Grid,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';
import FieldEditor from './FieldEditor';

const LOCAL_STORAGE_KEY = 'form_template_data';

export default function FormBuilder() {
  const [fields, setFields] = useState([]);

  // Load saved fields on mount
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setFields(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    const invalidFields = fields.filter(
      (f) => f.required && (!f.label || f.label.trim() === '')
    );

    if (invalidFields.length > 0) {
      alert('Please fill in all required field labels before saving.');
      return;
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(fields));
    alert('Form template saved!');
  };

  const handleFieldChange = (id, updatedField) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, ...updatedField } : field
      )
    );
  };

  // Handle drop from FieldPalette
  const handleDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("fieldType");

    const newField = {
      id: uuidv4(),
      type,
      label: '',
      helpText: '',
      required: false,
    };

    setFields((prev) => [...prev, newField]);
  };

  // Manually add a field
  const handleAddField = () => {
    let type = 'short_answer';

    if (fields.length > 0) {
      type = fields[fields.length - 1].type;
    }

    const newField = {
      id: uuidv4(),
      type,
      label: '',
      helpText: '',
      required: false,
    };

    setFields([...fields, newField]);
  };

  const handleDelete = (id) => {
    setFields(fields.filter((f) => f.id !== id));
  };

  return (
    <Box
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      sx={{
        minHeight: 500,
        p: 3,
        borderRadius: 3,
        border: fields.length === 0 ? '2px dashed #ccc' : 'none',
        backgroundColor: fields.length === 0 ? '#fafafa' : '#fff',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      {fields.length === 0 ? (
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
        >
          🧲 Drag fields here or click below to add one
        </Typography>
      ) : (
        <Grid container spacing={2} columns={12}>
          {fields.map((field) => (
            <Grid item xs={12} md={6} key={field.id}>
              <Fade in>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    mb: 2,
                    position: 'relative',
                    borderRadius: 2,
                    backgroundColor: '#fefefe',
                    boxShadow: '0px 2px 8px rgba(0,0,0,0.06)',
                  }}
                >
                  <IconButton
                    size="small"
                    sx={{ position: 'absolute', right: 12, top: 12 }}
                    onClick={() => handleDelete(field.id)}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                  <FieldEditor field={field} onChange={(updated) => handleFieldChange(field.id, updated)} />
                </Paper>
              </Fade>
            </Grid>
          ))}
        </Grid>
      )}

      {fields.length > 0 && (
        <Stack direction="row" spacing={2} mt={2}>
          <Button
            onClick={handleAddField}
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            fullWidth
            sx={{ flexGrow: 1 }}
          >
            Add Field
          </Button>

          <Button
            variant="outlined"
            color="success"
            startIcon={<SaveIcon />}
            onClick={handleSave}
            fullWidth
            sx={{ flexGrow: 1 }}
          >
            Save
          </Button>
        </Stack>
      )}
    </Box>
  );
}
