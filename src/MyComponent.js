import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Popover,
  IconButton,
} from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MenuIcon from "@mui/icons-material/Menu";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function MyComponent({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();
  const [forecasts, setForecasts] = useState([]);
  const [hiddenColumns, setHiddenColumns] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
    const initialData = [
      { date: "2024-01-22", temperatureC: 30, temperatureF: 86, summary: "Warm", city: "New City" },
      { date: "2024-01-23", temperatureC: 18, temperatureF: 64, summary: "Cool", city: "Cool City" },
      { date: "2024-01-24", temperatureC: 20, temperatureF: 67, summary: "Cool", city: "Cool City" },
      { date: "2024-01-25", temperatureC: 23, temperatureF: 77, summary: "Cool", city: "Cool City" },
      { date: "2024-01-26", temperatureC: 18, temperatureF: 81, summary: "Cool", city: "Cool City" },
    ];

    setForecasts(initialData);
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

  const handleAddCircleClick = () => {
    navigate("/form-builder");
  };
  

  const handleRowSelect = (date) => {
    const updatedSelectedRows = [...selectedRows];
    const index = updatedSelectedRows.indexOf(date);

    if (index === -1) {
      updatedSelectedRows.push(date);
    } else {
      updatedSelectedRows.splice(index, 1);
    }

    setSelectedRows(updatedSelectedRows);
  };

  const handleSelectAll = () => {
    const allDates = forecasts.map((forecast) => forecast.date);
    const updatedSelectedRows = isAllRowsSelected ? [] : allDates;
    setSelectedRows(updatedSelectedRows);
  };

  const isAllRowsSelected = selectedRows.length === forecasts.length;

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleToggleColumn = (columnName) => {
    setHiddenColumns((prevHiddenColumns) => {
      const updatedHiddenColumns = prevHiddenColumns.includes(columnName)
        ? prevHiddenColumns.filter((col) => col !== columnName)
        : [...prevHiddenColumns, columnName];

      return updatedHiddenColumns;
    });
  };

  const ColumnConfigItem = ({ columnName, index }) => {
    const [{ isDragging }, drag] = useDrag({
      type: "COLUMN",
      item: { columnName, index },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    });

    return (
      <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
        <ListItem button>
          <ListItemIcon>
            <DragIndicatorIcon />
          </ListItemIcon>
          <ListItemText primary={columnName} />
          <Checkbox
            checked={!hiddenColumns.includes(columnName)}
            onChange={() => handleToggleColumn(columnName)}
          />
        </ListItem>
      </div>
    );
  };

  return (
    <Container sx={{ margin: 0, padding: 2, marginRight: 0, height: "100vh", marginLeft: 0, marginTop:10 }}>
      <Drawer variant="persistent" anchor="left" open={true} sx={{ width: 60, zIndex: 1 }}>
        <List>
          <ListItem button onClick={handleHomeClick}>
          <ListItemIcon style={{ color: 'white' }}>
    <HomeIcon  />
            </ListItemIcon>
          </ListItem>

          <ListItem button onClick={handleCreateClick}>
          <ListItemIcon style={{ color: 'white' }}>
              <CreateIcon />
            </ListItemIcon>
          </ListItem>

          <ListItem button onClick={handleAddCircleClick}>
          <ListItemIcon style={{ color: 'white' }}>
              <AddCircleIcon />
            </ListItemIcon>
          </ListItem>

          <ListItem button onClick={handleExitToAppClick}>
          <ListItemIcon style={{ color: 'white' }}>
              <ExitToAppIcon />
            </ListItemIcon>
          </ListItem>

         

        </List>
      </Drawer>

      <div sx={{ marginLeft: 0, width: "calc(100% - 60px)", marginTop: 100 , marginRight:0}}>
        <Typography variant="h4" gutterBottom>
          Weather Forecast
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <input type="checkbox" onChange={handleSelectAll} checked={isAllRowsSelected} />
              </TableCell>

              {!hiddenColumns.includes("date") && <TableCell>Date</TableCell>}
              {!hiddenColumns.includes("temperatureC") && <TableCell>Temp. (C)</TableCell>}
              {!hiddenColumns.includes("temperatureF") && <TableCell>Temp. (F)</TableCell>}
              {!hiddenColumns.includes("summary") && <TableCell>Summary</TableCell>}
              {!hiddenColumns.includes("city") && <TableCell>City</TableCell>}

              <TableCell>
                <IconButton
                  aria-label="column-config"
                  aria-controls="column-menu"
                  aria-haspopup="true"
                  onClick={handleMenuClick}
                >
                  <MenuIcon />
                </IconButton>
                {forecasts.length > 0 && (
                  <Popover id="column-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                    <DndProvider backend={HTML5Backend}>
                      <List>
                        {forecasts[0] &&
                          Object.keys(forecasts[0]).map((columnName, index) => (
                            <ColumnConfigItem key={columnName} columnName={columnName} index={index} />
                          ))}
                      </List>
                    </DndProvider>
                  </Popover>
                )}
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {forecasts.map((forecast) => (
              <TableRow key={forecast.date}>
                <TableCell>
                  <input
                    type="checkbox"
                    onChange={() => handleRowSelect(forecast.date)}
                    checked={selectedRows.includes(forecast.date)}
                  />
                </TableCell>
                {!hiddenColumns.includes("date") && <TableCell>{forecast.date}</TableCell>}
                {!hiddenColumns.includes("temperatureC") && <TableCell>{forecast.temperatureC}</TableCell>}
                {!hiddenColumns.includes("temperatureF") && <TableCell>{forecast.temperatureF}</TableCell>}
                {!hiddenColumns.includes("summary") && <TableCell>{forecast.summary}</TableCell>}
                {!hiddenColumns.includes("city") && <TableCell>{forecast.city}</TableCell>}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Container>
  );
}

export default MyComponent;
