import AddIcon from '@mui/icons-material/Add'
import ChecklistIcon from '@mui/icons-material/Checklist'
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
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'

const sideNavOptions = [
    { name: 'My Checklists', icon: <ChecklistIcon />, href: '/my-checklists' },
    { name: 'New Checklist', icon: <AddIcon />, href: '' },
]

export const SideNav = (): ReactElement => {
    const router = useRouter()

    return (
        <Drawer variant="permanent" anchor="left">
            <Toolbar>{'React Playground'}</Toolbar>
            <Divider />
            <List>
                {sideNavOptions.map((option) => (
                    <ListItem key={option.name} disablePadding>
                        <ListItemButton
                            color={'primary'}
                            onClick={() => router.push(option.href)}
                        >
                            <ListItemIcon>{option.icon}</ListItemIcon>
                            <ListItemText primary={option.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}
