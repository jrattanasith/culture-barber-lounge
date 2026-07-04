import { Fab } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

function FloatingBookButton() {
  return (
    <Fab
      color="primary"
      href="https://booksy.com/en-us/1305466_andrew-li_barber-shop_103424_benicia?do=invite&_branch_match_id=1449877403488860804&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVT8lzSik3jiopjkiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUA1TmotjwAAAA%3D"
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
