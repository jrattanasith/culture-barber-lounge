import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import AnimatedSection from '../components/AnimatedSection/AnimatedSection'
import TeamCard from '../components/TeamCard/TeamCard'
import team from '../data/team'

function Team() {
  useEffect(() => {
    document.title = 'Team | The Barber Co'
  }, [])

  return (
    <Box sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <Stack spacing={2} sx={{ mb: 6, maxWidth: 700 }}>
            <Typography variant="overline" color="primary">
              Our Barbers
            </Typography>
            <Typography variant="h2">Precision-led artistry, delivered with calm confidence.</Typography>
            <Typography color="text.secondary">
              Every appointment is shaped by experience, restraint, and a deep respect for craftsmanship.
            </Typography>
          </Stack>
        </AnimatedSection>
        <Grid container spacing={3}>
          {team.map((member) => (
            <Grid size={{ xs: 12, md: 4 }} key={member.name}>
              <AnimatedSection>
                <TeamCard member={member} />
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Team
