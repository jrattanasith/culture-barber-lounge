import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'

function ReviewCard() {
  return (
    <Card sx={{ p: 1 }}>
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="overline" color="primary">
            Client Love
          </Typography>
          <Typography variant="h4">“The most polished cut I’ve had in years.”</Typography>
          <Typography color="text.secondary">
            I got an amazing cut, provides awesome conversations about anything you can think of, and overall very polite.
          </Typography>
          <Stack direction="row" spacing={0.5}>
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon key={index} color="primary" />
            ))}
          </Stack>
          <Typography variant="body2" color="text.secondary">
            — Jack R, Fairfield
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default ReviewCard
