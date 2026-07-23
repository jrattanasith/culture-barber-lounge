import { Fab } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

function FloatingBookButton() {
  return (
    <Fab
      href="https://booksy.com/en-us/1800376_culture-barber-lounge_barber-shop_103424_benicia?utm_source=ig&utm_medium=social&utm_content=link_in_bio#ba_s=dl_1"
      target="_blank"
      rel="noreferrer"
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 1300,
        boxShadow: '0 16px 40px rgba(135,174,115,0.25)',
        bgcolor: 'white',
        color: 'black',
        '&:hover': {
          bgcolor: '#f0f0f0',
        },
      }}
      aria-label="Book now"
    >
      <CalendarMonthIcon />
    </Fab>
  )
}

export default FloatingBookButton
