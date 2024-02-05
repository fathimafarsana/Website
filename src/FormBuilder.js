import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Box, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';

// FormBuilder component
const FormBuilder = ({ formFields, setFormFields, addField, moveField, removeField }) => {
  const onDragEnd = (result) => {
    if (!result.destination) return;
    moveField(result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="formFields">
        {(provided) => (
          <Box
            {...provided.droppableProps}
            ref={provided.innerRef}
            sx={{ minHeight: '200px', border: '1px dashed #ccc', padding: '10px' }}
          >
            {formFields && formFields.length > 0 ? (
              formFields.map((field, index) => (
                <Draggable key={field.fieldKey} draggableId={field.fieldKey} index={index}>
                  {(provided) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      sx={{ marginBottom: '10px' }}
                    >
                      <Typography>{field.label}</Typography>
                      <Button
                        onClick={() => {
                          removeField(index);
                          setFormFields((prevFields) =>
                            prevFields.filter((_, i) => i !== index)
                          );
                        }}
                        startIcon={<ClearIcon />}
                      >
                        Remove
                      </Button>
                    </Box>
                  )}
                </Draggable>
              ))
            ) : (
              <Typography sx={{ marginTop: '50px' }}>No fields added</Typography>
            )}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>

      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => {
          if (typeof addField === 'function') {
            const newField = {
              fieldKey: `field_${Date.now()}`,
              label: 'New Field',
              required: false,
              view: true,
              fullWidth: false,
            };
            addField(newField); 
          }
        }}
        sx={{ marginTop: '10px' }}
      >
        Add Field
      </Button>

    </DragDropContext>
  );
};

export default FormBuilder;
