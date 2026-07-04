import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import AnimatedSection from '../AnimatedSection/AnimatedSection'

function ServicesPreview({ services }) {
  return (
    <Box>
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} spacing={2} sx={{ mb: 4 }}>
        <Box>
          <Typography variant="overline" color="primary">
            Services
          </Typography>
          <Typography variant="h3">Signature care, sharpened to perfection.</Typography>
        </Box>
      </Stack>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={service.title}>
            <AnimatedSection delay={index * 0.08}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {service.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 2 }}>
                    {service.description}
                  </Typography>
                  <Typography color="primary.main" variant="h6">
                    {service.price}
                  </Typography>
                </CardContent>
              </Card>
            </AnimatedSection>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ServicesPreview
