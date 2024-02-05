import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(51, 188, 126)',
        },
        secondary: {
            main: 'rgb(35, 131, 88)',
        },
        error: {
            main: '#Eb5454',
        },
    },
    typography: {
        fontFamily: 'Lexend, sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue"',
    },
    components: {
        MuiCssBaseline:{
            styleOverrides: {
                '*::-webkit-scrollbar': {
                    width: '0.4em',
                    height: '0.4em',
                },
                '*::-webkit-scrollbar-track': {
                    WebkitBorderRadius: 10,
                    borderRadius: 10,
                    transition: 'background-color 0.75s ease',
                    '&:hover': {
                        backgroundColor: 'rgba(240, 240, 240, 0.2)'
                    }
                },
                '*::-webkit-scrollbar-thumb': {
                    WebkitBorderRadius: 10,
                    borderRadius: 10,
                    backgroundColor: 'transparent',
                    transition: 'background-color 0.5s ease',
                    '&:hover': {
                        backgroundColor: 'rgb(149,149,149)',
                    },
                    '&:active': {
                        backgroundColor: 'rgb(192, 192, 192)',
                    }
                },
                '*::-webkit-scrollbar-thumb:vertical':{
                    transition: 'background-color 0.5s ease'
                },
                '&:hover::-webkit-scrollbar-thumb':{
                    backgroundColor: 'rgb(192, 192, 192)'
                },
                fontSize: 14,
                '@media (min-width: 768px)': {
                    fontSize: 16,
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgb(244, 245, 245)',
                    boxShadow: 'none',
                    color: 'rgb(0, 0, 0)',
                    width: 'calc(100% - 60px)'
                }
            }
        },
        MuiDrawer: {
            styleOverrides: {
                root: {
                    width: 60
                },
                paper: {
                    width: 'inherit',
                    backgroundColor: 'rgb(39, 41, 55)',
                    color: 'rgb(255, 255, 255)'
                }
            }
        },
        MuiList: {
            styleOverrides: {
                root: {
                    listStyle: 'none',
                    padding: '8px 0px',
                    margin: 0
                }
            }
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    padding: 0,
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    height: 52,
                    borderRadius: 8,
                    margin: 5,
                    justifyContent: 'center',
                    color: 'rgb(255, 255, 255)',
                    '&.Mui-selected': {
                        backgroundColor: 'rgb(51, 188, 126)',
                        '&:hover': {
                            backgroundColor: 'rgba(51, 188, 126, 0.8)'
                        }
                    },
                }
            },
        },
        MuiButton: {
            styleOverrides: {
                contained: {
                    color: "#ffffff",
                },
                root: {
                    textTransform: "none",
                    fontSize: 13,
                    fontWeight: 600
                }
            }
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    margin: '4px 0px 0px'
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: 'rgba(0, 0, 0, 0.87)',
                    fontSize: 13,
                    fontWeight: 500,
                    paddingLeft: 6
                }
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    paddingLeft: 6,
                    marginLeft: 0
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    fontSize: 14
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 400
                }
            }
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    border: 0,
                    textTransform: 'none',
                    margin: 4,
                    "&.Mui-selected": {
                        color: 'rgb(255, 255, 255)',
                        backgroundColor: 'rgb(51, 188, 126)',
                        borderRadius: '5px !important',
                        "&:hover": {
                            backgroundColor: 'rgb(35, 131, 88)'
                        }
                    },
                    "&:hover": {
                        borderRadius: '5px !important',
                    }
                },
            }
        },
        MuiTable: {
            styleOverrides: {
                root: {
                    borderSpacing: 0,
                    overflow: 'auto'
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    height: 42,
                    '&:hover': {
                        backgroundColor: 'rgb(250, 250, 250)',
                        cursor: 'pointer',
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                sizeSmall: {
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 1.5,
                    padding: '6px 16px',
                    minWidth: 200
                },
                paddingCheckbox: {
                    width: 24,
                    padding: '0px 12px 0px 16px'
                }
            }
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: 'rgb(204, 204, 204)',
                    padding: 0,
                    '&.Mui-checked': {
                        color: 'primary',
                    },
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: 'rgba(0,0,0,0.14)'
                }
            }
        }
    }
});

export default theme;