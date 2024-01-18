// Sidebar.js
import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <List>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="About" />
        </ListItem>
        {/* Add more sidebar items as needed */}
      </List>
    </Drawer>
  );
};

export default Sidebar;
