import { Box, Button, Container, Stack, Typography } from '@mui/material'
import AnimatedSection from '../AnimatedSection/AnimatedSection'

function CTA() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'rgba(135,174,115,0.12)' }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} spacing={3}>
            <Box sx={{ maxWidth: 650 }}>
              <Typography variant="overline" color="primary">
                Reserve Your Visit
              </Typography>
              <Typography variant="h3">Set your appointment with your barber.</Typography>
            </Box>
            <Button variant="contained" color="primary" href="https://booksy.com/en-us/1305466_andrew-li_barber-shop_103424_benicia?do=invite&_branch_match_id=1449877403488860804&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVT8lzSik3jiopjkiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUA1TmotjwAAAA%3D" target="_blank" rel="noreferrer">
              Book an appointment
            </Button>
          </Stack>
        </AnimatedSection>
      </Container>
    </Box>
  )
}

export default CTA
