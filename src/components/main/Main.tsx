import styled from "@emotion/styled";
import { AppBar, Container, Paper } from "@mui/material"

const CustomPaper = styled(Paper)`
  height: 40px;
//   background-color: white;
`

const MainContainer = styled.div`
    margin-left: 240px;
`

const Header = styled.header`
`

interface IMain {
    children?: React.ReactNode
}

export const Main: React.FC<IMain> = ({ children }) => {
    return (
        <>
            <MainContainer>
                {/* <MainHeader />
                <CustomPaper variant='outlined' color="text"/> */}
            </MainContainer>
        </>
    )
}