import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import Hero from '../components/Hero/Hero'
import Features from '../components/Features/Features'
import ServicesPreview from '../components/ServicesPreview/ServicesPreview'
import GalleryPreview from '../components/GalleryPreview/GalleryPreview'
import CTA from '../components/CTA/CTA'
import ReviewCard from '../components/ReviewCard/ReviewCard'
import TeamCard from '../components/TeamCard/TeamCard'
import services from '../data/services'
import team from '../data/team'
import gallery from '../data/gallery'

function Home() {
  useEffect(() => {
    document.title = 'Culture Barber Lounge'
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', 'Luxury barber shop experience with precision cuts and elevated grooming in a modern minimalist space.')
  }, [])

  return (
    <Box>
      <Hero />
      <Features />
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <ServicesPreview services={services.slice(0, 3)} />
      </Container>
      <CTA />
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Stack spacing={4}>
          <GalleryPreview gallery={gallery.slice(0, 3)} />
          <Box>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Crafted by our team
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 700 }}>
              We keep it simple—great cuts, attention to detail, and styles that leave you looking and feeling your best.
            </Typography>
            <Grid container spacing={3}>
              {team.map((member) => (
                <Grid size={{ xs: 12, md: 4 }} key={member.name}>
                  <TeamCard member={member} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="outlined" color="secondary" href="/team">
              Meet the full team
            </Button>
          </Box>
          <ReviewCard />
        </Stack>
      </Container>
    </Box>
  )
}

export default Home
