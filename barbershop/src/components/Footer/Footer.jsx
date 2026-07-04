import { Box, Container, Grid, Stack, Typography } from '@mui/material'

function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: '1px solid rgba(255,255,255,0.08)', py: { xs: 6, md: 8 }, mt: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              THE BARBER CO.
            </Typography>
            <Typography color="text.secondary">
              Minimalist grooming, crafted with precision and calm confidence.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Visit
            </Typography>
            <Typography color="text.secondary">
              18 Mercer Street<br />New York, NY 10013
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Follow
            </Typography>
            <Stack direction="row" spacing={2}>
              <Typography color="text.secondary">Instagram</Typography>
              <Typography color="text.secondary">TikTok</Typography>
              <Typography color="text.secondary">Pinterest</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
