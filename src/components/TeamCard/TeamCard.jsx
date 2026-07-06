import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'

function TeamCard({ member }) {
  return (
    <Card
      sx={{
        width: '100%',
        height: 520,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        mx: 'auto',
      }}
    >
      <CardMedia component="img" image={member.image} alt={member.name} sx={{ height: 260, objectFit: 'cover' }} />
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 1.5,
          p: 3,
        }}
      >
        <Box>
          <Typography variant="h6">{member.name}</Typography>
          <Typography color="primary.main" sx={{ mb: 1 }}>
            {member.role}
          </Typography>
        </Box>
        <Typography color="text.secondary" sx={{ minHeight: 96 }}>
          {member.bio}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default TeamCard
