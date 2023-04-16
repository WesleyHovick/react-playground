import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from '@mui/material'
import type { ReactElement } from 'react'

import AddIcon from '@mui/icons-material/Add'
import ChecklistIcon from '@mui/icons-material/Checklist'

const sideNavOptions = [
    { name: 'Checklists', icon: <ChecklistIcon /> },
    { name: 'New Checklist', icon: <AddIcon /> },
]

export const SideNav = (): ReactElement => {
    return (
        <>
            <Drawer variant="permanent" anchor="left">
                <Toolbar>{'React Playground'}</Toolbar>
                <Divider />
                <List>
                    {sideNavOptions.map((option) => (
                        <ListItem key={option.name} disablePadding>
                            <ListItemButton color={'primary'}>
                                <ListItemIcon>{option.icon}</ListItemIcon>
                                <ListItemText primary={option.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    )
}
