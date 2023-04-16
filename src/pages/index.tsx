import { BaseLayout } from '@/components/BaseLayout'
import { Main } from '@/components/main/Main'
import { SideNav } from '@/components/sideNav/SideNav'
import { AppBar, Toolbar, Typography } from '@mui/material'

export default function Home() {
  return (
    <>
      <BaseLayout>
        <AppBar>
          <Toolbar color='main'>
            <Typography variant='h4'>Hello, world!</Typography>
          </Toolbar>
        </AppBar>
        <SideNav />
        <Main />
      </BaseLayout>
    </>
  )
}
