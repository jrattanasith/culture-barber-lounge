import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import shopHeader1 from "../../assets/interior-images/new-shop-header-1.jpeg";
import shopHeader2 from "../../assets/interior-images/new-shop-header-2.jpeg";
import shopHeader3 from "../../assets/interior-images/new-shop-header-3.jpeg";

function Hero() {
  const images = [shopHeader1, shopHeader2, shopHeader3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 250);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.2) 100%), url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: fade ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} sx={{ maxWidth: 700, py: 12 }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "3.2rem", md: "5.5rem" },
                lineHeight: 0.95,
              }}
            >
              Culture
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <Typography
              color="text.secondary"
              sx={{ fontSize: { xs: "1rem", md: "1.15rem" }, maxWidth: 560 }}
            >
              Creativity • Consistency • Community <br />
              Precision Cuts • Modern Grooming <br />
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
}

export default Hero;
