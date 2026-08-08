import { Box, Modal, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

function GalleryLightbox({ selectedImage, onClose }) {
  return (
    <Modal
      open={Boolean(selectedImage)}
      onClose={onClose}
      closeAfterTransition
    >
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            style={{
              width: "100vw",
              height: "100vh",
            }}
          >
            <Box
              onClick={onClose}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                bgcolor: "rgba(0, 0, 0, 0.85)",
                p: 4,
                cursor: "pointer",
              }}
            >
              <Box
                onClick={(event) => event.stopPropagation()}
                sx={{
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                }}
              >
                <Box
                  component="img"
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "80vh",
                    display: "block",
                    borderRadius: 2,
                  }}
                />

                <Typography
                  variant="h6"
                  color="white"
                  sx={{ mt: 2 }}
                >
                  {selectedImage.title}
                </Typography>

                <Typography color="grey.400">
                  {selectedImage.barber || ""}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
}

export default GalleryLightbox;