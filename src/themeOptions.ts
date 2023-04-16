import { ThemeOptions } from '@mui/material'

const sideNavWidth = '240px'

const borderColor = 'rgba(210, 210, 210, 0.20)'

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: 'rgba(12, 117, 228, 0.91)',
        },
        secondary: {
            main: '#b8b8b9',
        },
        background: {
            default: '#000030',
            paper: '#000E3C',
        },
        text: {
            primary: '#53c1ec',
        },
        divider: `${borderColor}`,
    },
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: '#53c1ec',
                },
            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: '40px',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    width: `calc(100% - ${sideNavWidth})`,
                    marginLeft: `${sideNavWidth}`,
                    backgroundImage: 'none',
                    borderWidth: 0,
                    borderStyle: 'solid',
                    borderColor: `${borderColor}`,
                    borderBottomWidth: 'thin',
                },
                positionFixed: true,
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
                    boxShadow: 'border-box',
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingTop: '150px',
                    position: 'relative',
                },
            },
        },
    },
    typography: {
        fontFamily: 'system-ui',
    },
}
