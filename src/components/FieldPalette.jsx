import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Grid,
  Box,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import NotesIcon from '@mui/icons-material/Notes';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ImageIcon from '@mui/icons-material/Image';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const elements = [
  {
    title: 'TEXT ELEMENTS',
    items: [
      { type: 'short_answer', label: 'Short Answer', icon: <TextFieldsIcon /> },
      { type: 'paragraph', label: 'Paragraph', icon: <NotesIcon /> },
    ],
  },
  {
    title: 'MULTIPLE CHOICE',
    items: [
      { type: 'dropdown', label: 'Dropdown', icon: <ArrowDropDownIcon /> },
      { type: 'radio', label: 'Radio', icon: <RadioButtonCheckedIcon /> },
      { type: 'yesno', label: 'Yes / No', icon: <VisibilityIcon /> },
      { type: 'checkbox', label: 'Checkbox', icon: <CheckBoxIcon /> },
    ],
  },
  {
    title: 'MEDIA ELEMENT',
    items: [
      { type: 'upload', label: 'Upload', icon: <CloudUploadIcon /> },
      { type: 'image', label: 'Image', icon: <ImageIcon /> },
    ],
  },
];

export default function FieldPalette() {
  const [search, setSearch] = useState('');

  const filteredElements = elements.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.label.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter(section => section.items.length > 0);
  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search element"
        fullWidth
        sx={{ mb: 2 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
      />

      {filteredElements.map((section) => (
        <Box key={section.title} sx={{ mb: 3 }}>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 600,
              color: '#777',
              textTransform: 'uppercase',
              mb: 1,
              display: 'block',
            }}
          >
            {section.title}
          </Typography>

          <Grid container spacing={1}>
            {section.items.map((item) => (
              <Grid item xs={6} key={item.type}>
                <Box
                  draggable
                  onDragStart={(e) => e.dataTransfer.setData('fieldType', item.type)}
                  sx={{
                    p: 2,
                    textAlign: 'center',
                    backgroundColor: '#f9f9f9',
                    borderRadius: 2,
                    border: '1px solid #e0e0e0',
                    cursor: 'grab',
                    transition: 'all 0.2s',
                    '&:hover': {
                      backgroundColor: '#f3f3f3',
                    },
                  }}
                >
                  <Box mb={1} color="#444">
                    {item.icon}
                  </Box>
                  <Typography variant="body2" fontWeight={500}>
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Paper>
  );
}
