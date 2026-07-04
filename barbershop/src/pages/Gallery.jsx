import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import AnimatedSection from '../components/AnimatedSection/AnimatedSection'
import gallery from '../data/gallery'

function Gallery() {
  useEffect(() => {
    document.title = 'Gallery | The Barber Co'
  }, [])

  return (
    <Box sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <Stack spacing={2} sx={{ mb: 6 }}>
            <Typography variant="overline" color="primary">
              Gallery
            </Typography>
            <Typography variant="h2">A modern space, a refined finish.</Typography>
          </Stack>
        </AnimatedSection>
        <Grid container spacing={3}>
          {gallery.map((item) => (
            <Grid size={{ xs: 12, md: 6 }} key={item.title}>
              <AnimatedSection>
                <Box sx={{ borderRadius: 4, overflow: 'hidden' }}>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{ width: '100%', height: 320, objectFit: 'cover' }}
                  />
                  <Box sx={{ p: 3, bgcolor: 'background.paper' }}>
                    <Typography variant="h6">{item.title}</Typography>
                  </Box>
                </Box>
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Gallery
