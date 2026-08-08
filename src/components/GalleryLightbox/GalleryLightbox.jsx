import { Box, Modal, Typography } from "@mui/material";

function GalleryLightbox({ selectedImage, onClose }) {
  return (
    <Modal
      open={Boolean(selectedImage)}
      onClose={onClose}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          bgcolor: "rgba(0,0,0,0.85)",
          p: 4,
        }}
      >
        {selectedImage && (
          <Box>
            <Box
              component="img"
              src={selectedImage.image}
              alt={selectedImage.title}
              sx={{
                maxWidth: "90vw",
                maxHeight: "80vh",
                display: "block",
              }}
            />

            <Typography color="white" sx={{ mt: 2 }}>
              {selectedImage.title}
            </Typography>
          </Box>
        )}
      </Box>
    </Modal>
  );
}

export default GalleryLightbox;