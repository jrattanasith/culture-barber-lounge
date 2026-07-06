import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import AnimatedSection from '../components/AnimatedSection/AnimatedSection'
import gallery from '../data/gallery'

function Gallery() {
  useEffect(() => {
    document.title = 'Gallery | Culture Barber Lounge'
  }, [])

  return (
    <Box sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <Stack spacing={2} sx={{ mb: 6 }}>
            <Typography variant="overline" color="primary">
              Gallery
            </Typography>
            <Typography variant="h2">Every visit is built around quality and comfort</Typography>
          </Stack>
        </AnimatedSection>
        <Grid container spacing={3}>
          {gallery.map((item, idx) => (
            <Grid item xs={12} md={6} key={idx}>
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
