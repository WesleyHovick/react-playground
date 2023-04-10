import type { ReactElement } from 'react'
import { 
    AppBar, 
    CssBaseline, 
    Divider, 
    Drawer, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText, 
    Toolbar 
} from '@mui/material'

import ChecklistIcon from '@mui/icons-material/Checklist'
import AddIcon from '@mui/icons-material/Add'

const sideNavOptions = [
    { name: 'My Routines', icon: <ChecklistIcon />},
    { name: 'New Training Routine', icon: <AddIcon />}
]

export const SideNav = (): ReactElement => {
    return (
        <>
            <CssBaseline />
            <AppBar>
                <Drawer variant='permanent' anchor='left'>
                    <Toolbar>
                        {'RL Training Calendar'}
                    </Toolbar>
                    <Divider />
                    <List>
                        {
                            sideNavOptions.map((option) => (
                                <ListItem key={option.name} disablePadding>
                                    <ListItemButton color={'primary'}>
                                        <ListItemIcon>
                                            {option.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={option.name} />
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>
                </Drawer>
            </AppBar>
        </>
    )
}