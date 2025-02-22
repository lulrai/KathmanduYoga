import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        marginTop: "40px",
      }}
    >
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} Kathmandu Yoga. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;