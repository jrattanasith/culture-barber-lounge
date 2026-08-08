import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import AnimatedSection from "../components/AnimatedSection/AnimatedSection";
import TeamCard from "../components/TeamCard/TeamCard";
import team from "../data/team";

function Team() {
  useEffect(() => {
    document.title = "Team | Culture Barber Lounge";
  }, []);

  return (
    <Box sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <Stack spacing={2} sx={{ mb: 6, maxWidth: 700 }}>
            <Typography variant="overline" color="primary">
              Our Barbers
            </Typography>
            <Typography variant="h2">Meet the Team</Typography>
            <Typography color="text.secondary">
              The team behind the experience. Skilled barbers. Quality service.
              Consistent results. Here to build confidence and connection within
              our community. Book your appointment below.
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
  );
}

export default Team;
