import type { ReactElement } from 'react'

import { Container, ThemeProvider, createTheme } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

interface IBaseLayout {
    children?: ReactElement
}

const darkTheme = createTheme({
    palette: {
        background: {
            default: '#111d2d'
        },
        text: {
            primary: '#ffffff'
        }
    }
})

export const BaseLayout: React.FC<IBaseLayout> = ({ children }) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline enableColorScheme={true} />
            <Container>
                { children }
            </Container>
        </ThemeProvider>
    )
}