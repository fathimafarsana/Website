// Layout.jsx
import React from "react";
import { CssBaseline, Drawer, List, ListItem, ListItemIcon, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Sidebar = () => {
  return (
    <Drawer variant="permanent" sx={{ width: 60, flexShrink: 0 }}>
      <List>
        <ListItem button component={Link} to="/app/home">
          <ListItemIcon style={{ color: 'white' }}>
            <HomeIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button component={Link} to="/app/my-component">
          <ListItemIcon style={{ color: 'white' }}>
            <CreateIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button component={Link} to="/app/form">
          <ListItemIcon style={{ color: 'white' }}>
            <ExitToAppIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button component={Link} to="/app/formbuilder">
          <ListItemIcon style={{ color: 'white' }}>
            <AddCircleIcon />
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Container sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
        <Sidebar />
        <Container sx={{ paddingTop: 4, paddingBottom: 4, overflowY: "auto", flexGrow: 1 }}>
          <Typography variant="h4" sx={{ marginBottom: 0,marginLeft:2, fontSize: "2.5rem", fontWeight: "bold", color: "white", position: "fixed", top: 0, left: 60, right: 0, backgroundColor: "skyblue", zIndex: 1000, padding: 2 }}>
            ABCS
          </Typography>
          <div sx={{ marginTop: 60, height: "calc(100% - 60px)", overflowY: "auto" }}>
            {children}
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Layout;
