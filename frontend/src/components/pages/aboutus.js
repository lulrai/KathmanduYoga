import React from "react";
import "./aboutus.css"; // Create an external CSS file for better styling
import { Container, Typography, Box } from "@mui/material";

function AboutUs() {
  const whatsappNumber = "9851168145";

  return (
    <Container className="about-us-container">
      <header className="header">
        <Typography variant="h1" align="center" className="main-title">
          Kathmandu School of Yoga
        </Typography>
      </header>

      <Box className="inspirers" mb={4}>
        <Typography variant="h2" align="center" className="section-title">
          Inspirers
        </Typography>
        <Box className="inspirer" mb={2}>
          <Typography variant="h3" className="inspirer-name">
            Swami Sivananda
          </Typography>
          <Typography variant="body1">
            Serve, Love, Give, Purify, Meditate, Realise
          </Typography>
        </Box>
        <Box className="inspirer" mb={2}>
          <Typography variant="h3" className="inspirer-name">
            Swami Satyananda
          </Typography>
          <Typography variant="body1">
            All forms of yoga have just one purpose in mind: to train the animal
            in man; to rend the instincts asunder and evolve a new personality.
          </Typography>
        </Box>
        <Box className="inspirer">
          <Typography variant="h3" className="inspirer-name">
            Swami Niranjanananda
          </Typography>
          <Typography variant="body1">
            If I see myself in you and I feel you in myself then whom do I love?
            This is the concept of unconditional love.
          </Typography>
        </Box>
      </Box>

      <blockquote className="quote">
        <Typography variant="h4" align="center" className="quote-text">
          "Yoga is not an ancient myth buried in oblivion. It is the most
          valuable inheritance of the present. It is the essential need of today
          and the culture of tomorrow."
        </Typography>
        <Typography variant="body2" align="center" className="quote-author">
          - Paramahamsa Satyananda
        </Typography>
      </blockquote>

      <Box className="approach" mb={4}>
        <Typography variant="h2" align="center" className="section-title">
          Psycho Yogic Approach
        </Typography>
        <Typography variant="body1" align="center">
          For Physical Fitness, Mental Agility, Emotional Harmony, and Spiritual
          Verve
        </Typography>
      </Box>

      <Box className="index">
        <Typography variant="h2" align="center" className="section-title">
          Index
        </Typography>
        <Box className="index-item" mb={2}>
          <Typography variant="h3">
            Kathmandu School of Yoga
          </Typography>
          <Typography variant="body1">
            Kathmandu School of Yoga is a registered yoga institution with the
            Government of Nepal...
          </Typography>
        </Box>
        <Box className="index-item">
          <Typography variant="h3">
            About Us
          </Typography>
          <Typography variant="body1">
            Kathmandu School of Yoga is founded by Sannyasi Premananda (Shiva
            Basyal)...
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default AboutUs;
