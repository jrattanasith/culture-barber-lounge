import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'


function Hero() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        backgroundImage:
          'linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.72) 100%), url("./src/assets/interior images/Screenshot 2026-07-03 at 9.35.43 PM.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} sx={{ maxWidth: 700, py: 12 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Typography variant="overline" color="primary">
              Vallejo Barber Shop
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '3.2rem', md: '5.5rem' }, lineHeight: 0.95 }}>
              Cuts with Culture
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
            <Typography color="text.secondary" sx={{ fontSize: { xs: '1rem', md: '1.15rem' }, maxWidth: 560 }}>
              Clean cuts, modern style, and a barbershop experience you'll enjoy.
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button variant="contained" color="primary" href="https://booksy.com/en-us/1305466_andrew-li_barber-shop_103424_benicia?do=invite&_branch_match_id=1449877403488860804&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVT8lzSik3jiopjkiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUA1TmotjwAAAA%3D" target="_blank" rel="noreferrer">
                Book Now
              </Button>
              <Button variant="outlined" color="secondary" href="/services">
                Explore Services
              </Button>
            </Stack>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero
