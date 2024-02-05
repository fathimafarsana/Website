import React, { useMemo, useState } from 'react';
import FormBuilder from './FormBuilder';
import {
  Box,
  Grid,
  IconButton,
  Stack,
  Typography,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  MenuItem,
  Select,
} from "@mui/material";
import TextField from '@mui/material/TextField';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({});
  const [formFields, setFormFields] = useState([]);

  const onSubmit = (data) => {
    setFormData(data);
  };

  const addField = (newField) => {
    console.log('Adding field:', newField);
    setFormFields((prevFields) => [...prevFields, newField]);
  };

  const moveField = (dragIndex, hoverIndex) => {
    const draggedField = formFields[dragIndex];
    const updatedFields = [...formFields];
    updatedFields.splice(dragIndex, 1);
    updatedFields.splice(hoverIndex, 0, draggedField);
    setFormFields(updatedFields);
  };

  const removeField = (indexToRemove) => {
    setFormFields((prevFields) => prevFields.filter((_, index) => index !== indexToRemove));
  };

  const selectField = watch("selectField");

  const options = useMemo(() => {
    return [
      { label: 'One', id: 1 },
      { label: 'Two', id: 2 },
      { label: 'Three', id: 3 },
      { label: 'Four', id: 4 },
    ];
  }, []);

  return (
    <React.Fragment>
      <Grid container direction="row">
        <Grid item xs={12} lg={6}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            p={2}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
            >
              <IconButton onClick={() => navigate(-1)}>
                <ArrowBackIcon />
              </IconButton>
              <Typography fontSize={16} fontWeight={700}>
                Post Data
              </Typography>
            </Stack>
            <Button
              variant="outlined"
              onClick={() => navigate(-1)}
              disableElevation
              color="error"
            >
              Cancel
            </Button>
          </Stack>
        </Grid>
        <Grid item lg={6} />
      </Grid>

      <Box p={2} px={5}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item xs={12} lg={6}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
              >
                
                <Grid item xs={12} md={6}>
                  <FormLabel>Form Builder</FormLabel>
                  <FormBuilder
                    formFields={formFields}
                    setFormFields={setFormFields}
                    addField={addField}
                    moveField={moveField}
                    removeField={removeField}
                  />
                </Grid>
               
              </Grid>
            </Grid>
            <Grid item lg={6}>

            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Stack
              direction="row"
              justifyContent="flex-end"
              spacing={2}
              sx={{ padding: 1.5 }}
            >
              <Button
                variant="outlined"
                onClick={() => reset()}
                disableElevation
              >
                Reset
              </Button>
              <Button type="submit" variant="contained" disableElevation>
                Submit
              </Button>
            </Stack>
          </Grid>
        </form>
      </Box>
    </React.Fragment>
  );
}