import { Box } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import AnimatedSection from "../AnimatedSection/AnimatedSection";
import gallery from "../../data/gallery";

function GalleryMasonry({ onImageClick }) {
  return (
    <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
      {gallery.map((item, idx) => (
        <AnimatedSection key={idx}>
          <Box
            onClick={() => onImageClick(item)}
            sx={{
              cursor: "pointer",
              overflow: "hidden",
              borderRadius: 3,
            }}
          >
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              sx={{
                width: "100%",
                display: "block",
              }}
            />
          </Box>
        </AnimatedSection>
      ))}
    </Masonry>
  );
}

export default GalleryMasonry;