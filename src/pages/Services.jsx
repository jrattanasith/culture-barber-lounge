import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import AnimatedSection from '../components/AnimatedSection/AnimatedSection'
import services from '../data/services'

function Services() {
  useEffect(() => {
    document.title = 'Services | Culture Barber Lounge'
  }, [])

  return (
    <Box sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <Stack spacing={2} sx={{ mb: 6, maxWidth: 700 }}>
            <Typography variant="overline" color="primary">
              Signature Services
            </Typography>
            <Typography variant="h2">Quality cuts, every time.</Typography>
            <Typography color="text.secondary">
              Clean cuts, premium grooming, and a comfortable experience from start to finish.
            </Typography>
          </Stack>
        </AnimatedSection>
        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid size={{ xs: 12, md: 6 }} key={service.title}>
              <AnimatedSection>
  <Box sx={{ p: 4, border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4 }}>
    {/* Changed justifyContent to flex-start and added a gap */}
    <Stack direction="row" justifyContent="flex-start" alignItems="center" gap={2} sx={{ mb: 1 }}>
      <Typography variant="h5">{service.title}</Typography>
      {/* Added ml: 'auto' to push the price to the far right */}
      <Typography variant="h6" color="primary" sx={{ ml: '15px' }}>{service.price}</Typography>
    </Stack>
    <Typography color="text.secondary" sx={{ mb: 2 }}>
      {service.description}
    </Typography>
  </Box>
</AnimatedSection>

            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Services
