import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {
  FormControlLabel,
  Radio,
  Button,
  TextareaAutosize,
} from "@mui/material";

const Counter = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Text Field */}
      <Controller
        name="textField"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Text Field"
            error={!!errors.textField}
            helperText={errors.textField?.message}
          />
        )}
      />

      {/* Number Field */}
      <Controller
        name="numberField"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            type="number"
            label="Number Field"
            error={!!errors.numberField}
            helperText={errors.numberField?.message}
          />
        )}
      />

      {/* Select Field */}
      <Controller
        name="selectField"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl>
            <InputLabel>Select Field</InputLabel>
            <Select
              {...field}
              label="Select Field"
              error={!!errors.selectField}
              helperText={errors.selectField?.message}
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </FormControl>
        )}
      />

      {/* Multi-Select Field */}
      <Controller
        name="multiSelectField"
        control={control}
        defaultValue={[]}
        render={({ field }) => (
          <FormControl>
            <InputLabel>Multi-Select Field</InputLabel>
            <Select
              {...field}
              label="Multi-Select Field"
              multiple
              error={!!errors.multiSelectField}
              helperText={errors.multiSelectField?.message}
            >
              <MenuItem value="value1">Value 1</MenuItem>
              <MenuItem value="value2">Value 2</MenuItem>
              <MenuItem value="value3">Value 3</MenuItem>
            </Select>
          </FormControl>
        )}
      />

      {/* Radio Field */}
      <FormControl>
        <InputLabel>Radio Field</InputLabel>
        <Controller
          name="radioField"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <>
              <FormControlLabel
                control={<Radio {...field} />}
                label="Option 1"
              />
              <FormControlLabel
                control={<Radio {...field} />}
                label="Option 2"
              />
              <FormControlLabel
                control={<Radio {...field} />}
                label="Option 3"
              />
            </>
          )}
        />
      </FormControl>

      {/* Text Area */}
      <Controller
        name="textArea"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextareaAutosize
            {...field}
            minRows={3}
            placeholder="Text Area"
            style={{ width: "100%" }}
            error={!!errors.textArea}
          />
        )}
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default Counter;
