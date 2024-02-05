import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const FormField = ({ label, key, helperText, placeholder, type, options, heading}) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom sx={{ fontSize: '1rem', textAlign: 'left', fontWeight: 'bold'}}>
        {heading}
      </Typography>
      {type === 'dropdown' ? (
        <TextField
        
        label={label}
        key={key}
        helperText={helperText}
        fullWidth={true}
      >
        {options &&
          options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
    
    ): type == 'checkbox' ? (
      <div >
        {options &&
          options.map((option) => (
            <div key={option.label}>
              <input type="checkbox" id={option.label} defaultChecked={option.checked} />
              <label htmlFor={option.label}>{option.label}</label>
            </div>
          ))}
      </div> 
      ): (
      <TextField
        varient="outlined"
        size="small"

        fullWidth
      />
    )}
  </React.Fragment>
  );
};

const BasicGrid = () => {
  
  const formFields = [
    {
      label: 'Label',
      key: 'labelField',
      helperText: 'Enter label text',
      placeholder: 'Label',
      type: 'text',
      heading: 'Label',
    },
    {
      label: 'Key',
      key: 'keyField',
      helperText: 'Enter key text',
      placeholder: 'Key',
      type: 'text',
      heading: 'Key',
    },
    {
      label: 'Helper Text',
      key: 'helperTextField',
      helperText: 'Enter helper text',
      placeholder: 'Helper Text',
      type: 'text',
      heading: 'Helper Text',
    },
    {
      label: 'Placeholder',
      key: 'placeholderField',
      helperText: 'Enter placeholder text',
      placeholder: 'Placeholder',
      type: 'text',
      heading: 'Place Holder',
    },
    {
      label: 'Type',
      key: 'typeField',
      helperText: 'Select type',
      type: 'dropdown',
      options: [
        { value: 'text', label: 'Text' },
        { value: 'number', label: 'Number' },
      ],
      heading: 'Type',
    },
    {
      type: 'checkbox',
      options: [
        { label: 'Yes', checked: false},
        
      ],
      heading: 'System Field',
    },
    
  ];

  return (
    <Box sx={{ width: '100%', marginTop: 10, marginLeft:0 }}>
      <Grid container spacing={2}>
        {formFields.map((field) => (
          <Grid item key={field.key} xs={12} sm={6} md={6}>
            <Item>
              <FormField {...field} />
            </Item>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Item>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BasicGrid;
