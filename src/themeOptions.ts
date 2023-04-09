import { ThemeOptions } from "@mui/material";

export const themeOptions: ThemeOptions = {
    palette: {
        text: {
            primary: '#ffffff'
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#111d2d'
                }
            }
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#051c40'
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: '#ffffff'
                }
            }
        }
    }
}