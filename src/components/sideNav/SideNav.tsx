import type { ReactElement } from 'react'
import {
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
    { name: 'Checklists', icon: <ChecklistIcon />},
    { name: 'New Checklist', icon: <AddIcon />}
]

export const SideNav = (): ReactElement => {
    return (
        <>
            <CssBaseline />
            <Drawer variant='permanent' anchor='left'>
                <Toolbar>
                    {'React Playground'}
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
        </>
    )
}