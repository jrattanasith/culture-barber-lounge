import { Box, Container, Grid, Stack, Typography } from '@mui/material'

function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: '1px solid rgba(255,255,255,0.08)', py: { xs: 6, md: 8 }, mt: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Culture Barber Lounge
            </Typography>
            <Typography color="text.secondary">
              Helping you look your best, one cut at a time.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Visit Us
            </Typography>
            <Typography color="text.secondary">
              2000 Columbus Pkwy unit 2010<br />Benicia, CA 94510
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Follow
            </Typography>
            <Stack direction="row" spacing={2}>
              <Typography color="text.secondary">Instagram</Typography>
              <Typography color="text.secondary">TikTok</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
