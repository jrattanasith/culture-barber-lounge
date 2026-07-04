import { Fab } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

function FloatingBookButton() {
  return (
    <Fab
      color="primary"
      href="https://booksy.com"
      target="_blank"
      rel="noreferrer"
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 1300,
        boxShadow: '0 16px 40px rgba(135,174,115,0.25)',
      }}
      aria-label="Book now"
    >
      <CalendarMonthIcon />
    </Fab>
  )
}

export default FloatingBookButton
