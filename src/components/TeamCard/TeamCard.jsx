import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
  Button,
} from "@mui/material";

function TeamCard({ member }) {
  return (
    <Card
      sx={{
        width: "100%",
        height: 520,
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        overflow: "hidden",
        mx: "auto",
      }}
    >
      <CardMedia
        component="img"
        image={member.image}
        alt={member.name}
        sx={{
          height: 260,
          objectFit: "cover",
          objectPosition:
            member.name === "Nate Diaz" ? "center 20%" : "center 35%",
        }}
      />

      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start", // Pushes all elements upward naturally
          gap: 1.5, // Keeps clean, uniform spacing between elements
          p: 3,
          pb: 1.5, // Reduces the large default bottom padding of CardContent
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: 600, mb: 1.5 }}
          >
            {member.name}
          </Typography>

          {member.booksy && (
            <Button
              variant="contained"
              href={member.booksy}
              target="_blank"
              rel="noreferrer"
              sx={{
                display: "inline-flex",
                bgcolor: "white",
                color: "black",
                borderRadius: "50px",
                fontWeight: 600,
                px: 3,
                "&:hover": {
                  bgcolor: "#f0f0f0",
                },
              }}
            >
              Book Now
            </Button>
          )}
        </Box>

        {/* Removed minHeight so the card shrinks tightly around the actual text length */}
        <Typography color="text.secondary" sx={{ textAlign: "center", mt: 1 }}>
          {member.bio}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TeamCard;
