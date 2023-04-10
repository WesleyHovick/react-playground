import { ThemeOptions } from "@mui/material";

const sideNavWidth = '240px';

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: 'rgba(12,117,228,0.91)',
        },
        secondary: {
            main: '#b8b8b9',
        },
        background: {
            default: '#01050e',
            paper: '#070618',
        },
        text: {
            primary: '#53c1ec',
        },
        divider: 'rgba(197,197,197,0.12)'
    },
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: '#53c1ec'
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: '40px'
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    width: `calc(100% - ${sideNavWidth})`,
                    marginLeft: `${sideNavWidth}`
                },
                positionFixed: true
            },
        },
        MuiDrawer: {
            styleOverrides: {
                root: {
                    width: `${sideNavWidth}`, 
                    flexShrink: 0,
                },
                paper: {
                    width: `${sideNavWidth}`,
                    boxShadow: 'border-box'
                }
            },
        },
    },
    typography: {
        fontFamily: 'system-ui'
    }
};