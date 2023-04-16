import { themeOptions } from '@/themeOptions'
import styled from '@emotion/styled'
import { Container, Theme, ThemeProvider, createTheme } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import type { ReactElement } from 'react'
import { Header } from './Header'
import { SideNav } from './SideNav'

interface IBaseLayout {
    children?: React.ReactNode
}

const theme: Theme = createTheme(themeOptions)

const StyledBaseLayout = styled.div`
    display: flex;
`

export const BaseLayout: React.FC<IBaseLayout> = ({
    children,
}): ReactElement => {
    return (
        <StyledBaseLayout>
            <ThemeProvider theme={theme}>
                {/* CssBaseline needs a child of ThemeProvider at some point in the DOM structure */}
                <CssBaseline />
                <Header />
                <SideNav />
                <Container>{children}</Container>
            </ThemeProvider>
        </StyledBaseLayout>
    )
}
