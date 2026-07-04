import { Box, Grid, Typography } from '@mui/material'
import gallery from '../../data/gallery'

function GalleryGrid() {
  return (
    <Grid container spacing={3}>
      {gallery.map((item) => (
        <Grid size={{ xs: 12, md: 6 }} key={item.title}>
          <Box sx={{ borderRadius: 4, overflow: 'hidden' }}>
            <Box component="img" src={item.image} alt={item.title} sx={{ width: '100%', height: 320, objectFit: 'cover' }} />
            <Box sx={{ p: 3, bgcolor: 'background.paper' }}>
              <Typography variant="h6">{item.title}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}

export default GalleryGrid
