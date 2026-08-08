import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import TeamCard from "../components/TeamCard/TeamCard";
import AnimatedSection from "../components/AnimatedSection/AnimatedSection";
import team from "../data/team";

function Home() {
  useEffect(() => {
    document.title = "Culture Barber Lounge";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Luxury barber shop experience with precision cuts and elevated grooming in a modern minimalist space.",
      );
  }, []);

  return (
    <Box>
      <Hero />
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Stack spacing={4}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Meet the Team
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: 700 }}
          >
            The team behind the experience. Skilled barbers. Quality service.
              Consistent results. Here to build confidence and connection within
              our community. Book your appointment below.
          </Typography>

          <Grid container spacing={3}>
            {team.map((member) => (
              <Grid size={{ xs: 12, md: 4 }} key={member.name}>
                <AnimatedSection>
                  <TeamCard member={member} />
                </AnimatedSection>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Home;
