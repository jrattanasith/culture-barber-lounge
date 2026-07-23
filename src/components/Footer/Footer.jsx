import { Box, Container, Grid, Stack, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        py: { xs: 6, md: 8 },
        mt: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Culture Barber Lounge
            </Typography>
            <Typography color="text.secondary">
              Creativity • Consistency • Community <br />
              Precision Cuts • Modern Grooming <br />
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Visit Us
            </Typography>
            <Typography color="text.secondary">
              2010 Columbus Pkwy Unit
              <br />
              Benicia, CA 94510
            </Typography>
            <Typography>(369)235-4364</Typography>
            <Typography>culturebarberlounge707@gmail.com</Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Follow
            </Typography>
            <Stack direction="row" spacing={2}>
              <Typography color="text.secondary">
                <Link
                  href="https://www.instagram.com/culturebarberlounge_/"
                  target="_blank"
                  rel="noopener"
                  color="inherit"
                >
                  Instagram
                </Link>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
