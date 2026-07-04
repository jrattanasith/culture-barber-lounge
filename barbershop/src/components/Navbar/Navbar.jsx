import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Team', to: '/team' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled ? 'rgba(0,0,0,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          transition: '0.3s ease',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1, px: { xs: 2, md: 4 } }}>
          <Button component={Link} to="/" color="inherit" sx={{ p: 0, minWidth: 0 }}>
            <Typography variant="h5" sx={{ letterSpacing: '0.18em' }}>
              THE BARBER CO.
            </Typography>
          </Button>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navItems.map((item) => (
              <Button key={item.to} component={Link} to={item.to} color="inherit" sx={{ opacity: location.pathname === item.to ? 1 : 0.75 }}>
                {item.label}
              </Button>
            ))}
          </Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <Button variant="outlined" color="secondary" sx={{ display: { xs: 'none', md: 'inline-flex' } }} href="https://booksy.com" target="_blank" rel="noreferrer">
              Book Now
            </Button>
            <IconButton color="inherit" sx={{ display: { xs: 'inline-flex', md: 'none' } }} onClick={() => setMobileOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)} PaperProps={{ sx: { bgcolor: 'background.default', width: 260 } }}>
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Navigate
          </Typography>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.to} disablePadding>
                <ListItemButton component={Link} to={item.to} onClick={() => setMobileOpen(false)}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Navbar
