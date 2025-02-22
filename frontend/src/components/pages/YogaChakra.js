import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "40px",
    background: "linear-gradient(145deg, #f8f9fa, #e9ecef)",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    marginTop: "40px",
    position: 'relative',
    overflow: 'hidden',
  },
  diagramContainer: {
    margin: '40px 0',
    padding: '20px',
    background: '#fff',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    position: 'relative',
    transform: 'rotate(-1deg)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'rotate(0deg)',
    },
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '15px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    display: 'block',
    margin: '0 auto',
  }
}));

function YogaChakra() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Box 
        className={classes.diagramContainer}
        sx={{ textAlign: 'center', padding: '40px 20px', margin: '60px auto' }}
      >
        <img
          src="/static/images/yogachakra.png"
          alt="Yoga Chakra Diagram"
          className={classes.image}
        />
      </Box>
    </Container>
  );
}

export default YogaChakra;
