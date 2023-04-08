import type { ReactElement } from 'react'
import type { Theme } from '@mui/material'

import { Container, ThemeProvider, createTheme } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

interface IBaseLayout {
    children?: ReactElement
}

const darkTheme: Theme = createTheme({
    palette: {
        background: {
            default: '#111d2d'
        },
        text: {
            primary: '#ffffff'
        }
    }
})

export const BaseLayout: React.FC<IBaseLayout> = ({ children }): ReactElement => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline enableColorScheme={true} />
            <Container>
                { children }
            </Container>
        </ThemeProvider>
    )
}