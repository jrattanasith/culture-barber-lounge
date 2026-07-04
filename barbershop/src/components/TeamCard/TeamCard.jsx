import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'

function TeamCard({ member }) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardMedia component="img" image={member.image} alt={member.name} sx={{ height: 280, objectFit: 'cover' }} />
      <CardContent>
        <Typography variant="h6">{member.name}</Typography>
        <Typography color="primary.main" sx={{ mb: 1 }}>
          {member.role}
        </Typography>
        <Typography color="text.secondary">{member.bio}</Typography>
      </CardContent>
    </Card>
  )
}

export default TeamCard
