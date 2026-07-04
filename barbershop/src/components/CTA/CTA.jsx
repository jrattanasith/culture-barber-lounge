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
              <Typography variant="h3">Set your appointment with a premium grooming ritual.</Typography>
            </Box>
            <Button variant="contained" color="primary" href="https://booksy.com" target="_blank" rel="noreferrer">
              Book an appointment
            </Button>
          </Stack>
        </AnimatedSection>
      </Container>
    </Box>
  )
}

export default CTA
