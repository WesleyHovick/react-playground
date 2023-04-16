import styled from '@emotion/styled'
import { Container, Paper, Typography } from '@mui/material'

const CustomPaper = styled(Paper)`
    height: 40px;
    //   background-color: white;
`

const MainContainer = styled.div`
    margin-left: 240px;
    border: 1px solid white;
    margin-top: 128px;
`

const Header = styled.header``

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
