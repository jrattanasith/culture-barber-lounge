import { Box, Card, Container, Grid, Stack, Typography } from '@mui/material'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined'
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined'
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined'
import AnimatedSection from '../AnimatedSection/AnimatedSection'

const featureItems = [
  { icon: <CalendarTodayOutlinedIcon />, title: 'Easy Booking', text: 'Reserve your appointment in just a few clicks with flexible scheduling.' },
  { icon: <ContentCutOutlinedIcon />, title: 'Expert Barbers', text: 'Quality cuts, clean fades, and attention to every detail.' },
  { icon: <SpaOutlinedIcon />, title: 'Premium Products', text: 'We use trusted products that help you look and feel your best.' },
  { icon: <ChairOutlinedIcon />, title: 'Modern Space', text: 'An intentionally calm interior built around clean lines and light.' },
]

function Features() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'rgba(255,255,255,0.02)' }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Built around quality and comfort.
          </Typography>
        </AnimatedSection>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          {featureItems.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={item.title}>
              <AnimatedSection delay={index * 0.08}>
                <Card sx={{ p: 3, height: '100%' }}>
                  <Stack spacing={2}>
                    <Box sx={{ color: 'primary.main', fontSize: '1.6rem' }}>{item.icon}</Box>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography color="text.secondary">{item.text}</Typography>
                  </Stack>
                </Card>
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Features
