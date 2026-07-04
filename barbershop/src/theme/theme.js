import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#87AE73' },
    secondary: { main: '#FDFBD4' },
    background: { default: '#050505', paper: '#111111' },
    text: { primary: '#FFFFFF', secondary: '#C7C7C7' },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: { fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' },
    h2: { fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.06em' },
    h3: { fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' },
    h4: { fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.03em' },
    h5: { fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' },
    h6: { fontFamily: 'Bebas Neue, sans-serif' },
  },
  shape: { borderRadius: 18 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 999,
          fontWeight: 600,
          padding: '0.8rem 1.4rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: '0 20px 45px rgba(0,0,0,0.28)',
          border: '1px solid rgba(255,255,255,0.06)',
          backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
        },
      },
    },
  },
})

export default theme
