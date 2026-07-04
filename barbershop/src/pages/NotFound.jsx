import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  useEffect(() => {
    document.title = '404 | The Barber Co'
  }, [])

  return (
    <Box sx={{ py: { xs: 16, md: 20 }, minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="sm">
        <Stack spacing={3} alignItems="flex-start">
          <Typography variant="overline" color="primary">
            404 Error
          </Typography>
          <Typography variant="h1">Page not found.</Typography>
          <Typography color="text.secondary">
            The page you are looking for has moved or no longer exists.
          </Typography>
          <Button component={Link} to="/" variant="contained" color="primary">
            Return home
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default NotFound
