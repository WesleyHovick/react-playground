import { AppBar, Toolbar, Typography } from '@mui/material'

interface IHeader {
    pageName?: string
}

export const Header: React.FC<IHeader> = ({ pageName }) => {
    return (
        <AppBar>
            <Toolbar color="main">
                <Typography variant="h4">{pageName}</Typography>
            </Toolbar>
        </AppBar>
    )
}
