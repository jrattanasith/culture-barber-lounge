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
            <Typography variant="h2">Meet our team of barbers</Typography>
            <Typography color="text.secondary">
              Every cut is done with care, precision, and attention to detail.
              Because a great haircut isn't just about looking good—it's about
              feeling confident.
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
