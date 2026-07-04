import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import AnimatedSection from '../components/AnimatedSection/AnimatedSection'
import services from '../data/services'

function Services() {
  useEffect(() => {
    document.title = 'Services | The Barber Co'
  }, [])

  return (
    <Box sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <Stack spacing={2} sx={{ mb: 6, maxWidth: 700 }}>
            <Typography variant="overline" color="primary">
              Signature Services
            </Typography>
            <Typography variant="h2">Tailored grooming, elevated detail.</Typography>
            <Typography color="text.secondary">
              From precision cuts to premium skin rituals, every appointment is designed around quiet luxury and unmistakable polish.
            </Typography>
          </Stack>
        </AnimatedSection>
        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid size={{ xs: 12, md: 6 }} key={service.title}>
              <AnimatedSection>
                <Box sx={{ p: 4, border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4 }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                    <Typography variant="h5">{service.title}</Typography>
                    <Typography variant="h6" color="primary">{service.price}</Typography>
                  </Stack>
                  <Typography color="text.secondary" sx={{ mb: 2 }}>
                    {service.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Duration: {service.duration}
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
