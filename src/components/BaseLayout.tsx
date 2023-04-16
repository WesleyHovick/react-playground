import type { ReactElement } from 'react'
import type { Theme } from '@mui/material'

import { Container, ThemeProvider, createTheme } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { themeOptions } from '@/themeOptions'

interface IBaseLayout {
    children?: React.ReactNode
}

const theme: Theme = createTheme(themeOptions)

export const BaseLayout: React.FC<IBaseLayout> = ({ children }): ReactElement => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                { children }
            </Container>
        </ThemeProvider>
    )
}