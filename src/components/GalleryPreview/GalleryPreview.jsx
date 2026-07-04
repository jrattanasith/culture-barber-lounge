import { Box, Grid, Typography } from '@mui/material'
import AnimatedSection from '../AnimatedSection/AnimatedSection'

function GalleryPreview({ gallery }) {
  return (
    <Box>
      <Typography variant="overline" color="primary" sx={{ mb: 1, display: 'block' }}>
        Gallery
      </Typography>
      <Typography variant="h3" sx={{ mb: 3 }}>
        Fresh cuts. Friendly atmosphere.
      </Typography>
      <Grid container spacing={2}>
        {gallery.map((item, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={item.title}>
            <AnimatedSection delay={index * 0.06}>
              <Box sx={{ borderRadius: 4, overflow: 'hidden' }}>
                <Box component="img" src={item.image} alt={item.title} sx={{ width: '100%', height: 240, objectFit: 'cover' }} />
              </Box>
            </AnimatedSection>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default GalleryPreview
