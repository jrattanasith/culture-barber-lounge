import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import AnimatedSection from '../components/AnimatedSection/AnimatedSection'

function Contact() {
  useEffect(() => {
    document.title = 'Contact | The Barber Co'
  }, [])

  return (
    <Box sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <AnimatedSection>
              <Stack spacing={2}>
                <Typography variant="overline" color="primary">
                  Visit Us
                </Typography>
                <Typography variant="h2">Book your next appointment.</Typography>
                <Typography color="text.secondary">
                  18 Mercer Street, New York, NY 10013<br />
                  Mon – Sat: 9:00 AM – 8:00 PM<br />
                  +1 (212) 555-0134
                </Typography>
                <Button variant="contained" color="primary" href="https://booksy.com" target="_blank" rel="noreferrer">
                  Reserve on Booksy
                </Button>
              </Stack>
            </AnimatedSection>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <AnimatedSection>
              <Box sx={{ borderRadius: 4, overflow: 'hidden', height: 360, bgcolor: 'grey.900' }}>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=80"
                  alt="Barber shop interior"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
                />
              </Box>
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Contact
