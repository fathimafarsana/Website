import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Container,
  InputBase,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";




const MyComponent = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleExitToAppClick = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  
  const handleCreateClick = () => {
    navigate("/counter");
  };

  const handleHomeClick = () => {
    navigate("/home");
  };

  return (
    <Container sx={{ margin: 0, padding: 2, marginRight: 0, height: "100vh"}}>
      <AppBar position="fixed" >
        <Toolbar >
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%", marginLeft: "100px"  }}>
            <div style={{ display: "flex", bgcolor: "background.paper", borderRadius: 4 }}>
              <InputBase
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
                sx={{
                  ml: 2,
                  bgcolor: "white",
                  borderRadius: "20px",
                  padding: "10px",
                }}
              />
              <IconButton color="inherit" edge="end">
                <SearchIcon />
              </IconButton>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <IconButton color="inherit">
                <Badge badgeContent={3} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      <Toolbar /> {/* Spacer to push content below the fixed AppBar */}

      {/* Rest of your component */}
      <Drawer variant="persistent" anchor="left" open={true} sx={{ width: 60, zIndex: 1 }}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
          </ListItem>

          <ListItem button onClick={handleHomeClick}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
          </ListItem>

          <ListItem button onClick={handleCreateClick}>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
          </ListItem>

          <ListItem button onClick={handleExitToAppClick}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>

      <div sx={{ marginLeft: 60, width: "calc(100% - 60px)", marginTop: 64 }}>
        {/* You can add your main content here */}
        
      </div>
    </Container>
  );
};

export default MyComponent;
