import type { ReactElement } from 'react'
import { AppBar, AppBarProps, CssBaseline, Divider, Drawer, DrawerProps, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';

const sideNavWidth = 240

const drawerProps: DrawerProps = {
    sx: {
        width: sideNavWidth, 
        flexShring: 0, 
        '& .MuiDrawer-paper': {
            width: sideNavWidth,
            boxSizing: 'border-box'            
        }
    },
    variant: 'permanent',
    anchor: 'left'
}

const appBarProps: AppBarProps = {
    sx: {
        width: `calc(100% - ${sideNavWidth}px)`, 
        ml: `${sideNavWidth}px`
    },
    position: 'fixed'
}

export const SideNav = (): ReactElement => {
    return (
        <>
            <CssBaseline />
            <AppBar {...appBarProps}>
                <Drawer {...drawerProps}>
                    <Toolbar>
                        {'RL Training Calendar'}
                    </Toolbar>
                    <Divider />
                    <List>
                        <ListItem key={'Home'} disablePadding>
                            <ListItemButton color={'primary'}>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Home'} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer>
            </AppBar>
        </>
    )
}