import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import AnimatedSection from '../components/AnimatedSection/AnimatedSection'
import shop3 from '../assets/interior-images/shop-3.png'

function Contact() {
  useEffect(() => {
    document.title = 'Contact | Culture Barber Lounge'
  }, [])

  return (
    <Box sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <AnimatedSection>
              <Stack spacing={2}>
                <Typography variant="overline" color="primary">
                  Visit Us
                </Typography>
                <Typography variant="h2">Book your next appointment.</Typography>
                <Typography color="text.secondary">
                  2000 Columbus Pkwy unit 2010, Benicia, CA 94510<br />
                  Mon – Sat: 10:00 AM – 5:00 PM<br />
                  +1 (212) 555-0134
                </Typography>
                <Button variant="contained" color="primary" href="https://booksy.com/en-us/1305466_andrew-li_barber-shop_103424_benicia?do=invite&_branch_match_id=1449877403488860804&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVT8lzSik3jiopjkiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUA1TmotjwAAAA%3D#reviews-section" target="_blank" rel="noreferrer">
                  Reserve on Booksy
                </Button>
              </Stack>
            </AnimatedSection>
          </Grid>
          <Grid item xs={12} md={6}>
            <AnimatedSection>
              <Box sx={{ borderRadius: 4, overflow: 'hidden', height: 360, bgcolor: 'grey.900' }}>
                <Box
                  component="img"
                  src={shop3}
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
