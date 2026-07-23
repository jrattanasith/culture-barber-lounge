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
            Crafted by our team
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: 700 }}
          >
            We keep it simple—great cuts, attention to detail, and styles that
            leave you looking and feeling your best.
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
            <Button 
  variant="contained" 
  href="#/team"
  sx={{ 
    display: 'inline-flex' , // Keeps layout behavior identical
    bgcolor: 'white',
    color: 'black',
    borderRadius: '50px',
    fontWeight: 600,
    border: 'none', // Ensures no outlined border remnants remain
    '&:hover': {
      bgcolor: '#f0f0f0', // Keeps the exact same subtle grey hover effect
    },
  }}
>
  Meet the full team
</Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Home;
