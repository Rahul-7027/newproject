import {
  FormControlLabel,
  MenuItem,
  Switch,
  TextField,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import FieldPalette from "./FieldPalette";

export default function FieldEditor({ field, onChange }) {
  const { label, helpText, required, type } = field;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={9}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          {type.replace("_", " ").toUpperCase()}
        </Typography>

        <FormControlLabel
          control={
            <Switch
              checked={required}
              onChange={(e) => onChange({ required: e.target.checked })}
            />
          }
          label="Make as required"
        />

        <TextField
          label="Add field label"
          value={label}
          onChange={(e) => onChange({ label: e.target.value })}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Add help text"
          value={helpText}
          onChange={(e) => onChange({ helpText: e.target.value })}
          fullWidth
          margin="normal"
        />

        <TextField
          select
          label="Field type"
          value={type}
          onChange={(e) => onChange({ type: e.target.value })}
          fullWidth
          margin="normal"
        >
          <MenuItem value="short_answer">Short Answer</MenuItem>
          <MenuItem value="paragraph">Paragraph</MenuItem>
          <MenuItem value="dropdown">Dropdown</MenuItem>
          <MenuItem value="radio">Radio</MenuItem>
          <MenuItem value="yesno">Yes / No</MenuItem>
          <MenuItem value="upload">Upload</MenuItem>
          <MenuItem value="image">Image</MenuItem>
        </TextField>
      </Grid>
    </Grid>
  );
}
