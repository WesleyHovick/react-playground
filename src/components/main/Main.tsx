import styled from '@emotion/styled'
import { Container, Paper, Typography } from '@mui/material'

interface IMain {
    children?: React.ReactNode
}

export const Main: React.FC<IMain> = ({ children }) => {
    return (
        <>
            <Container>
                <Typography>{'Hello'}</Typography>
            </Container>
        </>
    )
}
