import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import AnimatedSection from "../components/AnimatedSection/AnimatedSection";
import cultureLogo from "../assets/culture-logo.jpeg";

function Contact() {
  useEffect(() => {
    document.title = "Contact | Culture Barber Lounge";
  }, []);

  return (
    <Box sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <AnimatedSection>
              <Stack spacing={2}>
                <Typography variant="overline" color="primary">
                  Visit Us
                </Typography>
                <Typography variant="h2">
                  Book your next appointment.
                </Typography>
                <Typography color="text.secondary">
                  2000 Columbus Pkwy unit 2010, Benicia, CA 94510
                  <br />
                  Sunday - Monday: Closed <br />
                  Tuesday - Friday 10:00 AM - 6:00 PM <br />
                  Saturday 9:00 PM - 5:00 PM
                  <br />
                  (369)235-4364
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href="https://booksy.com/en-us/1800376_culture-barber-lounge_barber-shop_103424_benicia?utm_source=ig&utm_medium=social&utm_content=link_in_bio#ba_s=dl_1"
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    bgcolor: "white",
                    color: "black",
                    borderRadius: "50px",
                    fontWeight: 600,
                    "&:hover": {
                      bgcolor: "#f0f0f0",
                    },
                  }}
                >
                  Reserve on Booksy
                </Button>
              </Stack>
            </AnimatedSection>
          </Grid>
          <Grid item xs={12} md={6}>
            <AnimatedSection>
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  height: 360,
                  bgcolor: "grey.900",
                }}
              >
                <Box
                  component="img"
                  src={cultureLogo}
                  alt="Culture Barber Lounge logo"
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
