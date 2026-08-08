// import { Box, Container, Grid, Stack, Typography } from "@mui/material";
// import { useEffect } from "react";
// import AnimatedSection from "../components/AnimatedSection/AnimatedSection";
// import gallery from "../data/gallery";

// function Gallery() {
//   useEffect(() => {
//     document.title = "Gallery | Culture Barber Lounge";
//   }, []);

//   return (
//     <Box sx={{ py: { xs: 10, md: 14 } }}>
//       <Container maxWidth="lg">
//         <AnimatedSection>
//           <Stack spacing={2} sx={{ mb: 6 }}>
//             <Typography variant="overline" color="primary">
//               Gallery
//             </Typography>
//             <Typography variant="h2">
//               Every visit is built around quality and comfort
//             </Typography>
//           </Stack>
//         </AnimatedSection>
//         {/* Gallery Section Below */}
//         <Grid container spacing={3} columns={12}>
//           {gallery.map((item, idx) => (
//             <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
//               <AnimatedSection>
//                 <Box sx={{ bgcolor: "background.paper", height: "100%" }}>
//                   <Box
//                     component="img"
//                     src={item.image}
//                     alt={item.title}
//                     sx={{
//                       width: "100%",
//                       aspectRatio: "4 / 3",
//                       objectFit: "cover",
//                       display: "block",
//                       borderRadius: 0,
//                     }}
//                   />
//                   <Box sx={{ p: 3 }}>
//                     <Typography variant="h6">{item.title}</Typography>
//                     <Typography variant="subtitle2" color="text.secondary">
//                       {item.barber || ""}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </AnimatedSection>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// export default Gallery;

import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import GalleryLightbox from "../components/GalleryLightbox/GalleryLightbox";
import GalleryMasonry from "../components/GalleryMasonry/GalleryMasonry";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.title = "Gallery | Culture Barber Lounge";
  }, []);

  return (
    <Box sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">

        <GalleryMasonry 
          onImageClick={setSelectedImage}
        />

        <GalleryLightbox
          selectedImage={selectedImage}
          onClose={() => setSelectedImage(null)}
        />

      </Container>
    </Box>
  );
}

export default Gallery;



