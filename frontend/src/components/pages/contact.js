import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "32px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
  },
  title: {
    fontWeight: "600",
    color: "#333",
    marginBottom: "16px",
  },
  contactInfo: {
    color: "#555",
    marginBottom: "24px",
  },
  email: {
    cursor: "pointer",
    color: "#3f51b5",
    textDecoration: "underline",
    fontWeight: "bold",
    marginTop: "8px",
  },
  button: {
    marginTop: "16px",
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
    marginBottom: "16px",
  },
  buttonHover: {
    "&:hover": {
      backgroundColor: "#3f51b5",
      color: "#fff",
    },
  },
  whatsappButton: {
    backgroundColor: "#25D366", // WhatsApp green color
    "&:hover": {
      backgroundColor: "#1EBE57",
    },
  },
}));

function Contact() {
  const classes = useStyles();
  const phoneNumber = "+9779851168145"; // Nepal phone number
  const email = "kathmanduyoga@gmail.com"; // Email

  const openMap = () => {
    window.open("https://maps.app.goo.gl/eTNFqxGANcJnYVP5A", "_blank");
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/9779851168145", "_blank"); // Nepal country code +977
  };

  const openViber = () => {
    window.open("viber://chat?number=%2B9779851168145", "_blank"); // Viber link
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  };

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h3" className={classes.title} align="center">
        Contact Us
      </Typography>
      <Typography variant="body1" className={classes.contactInfo} align="center">
        Contact information for Kathmandu Yoga.
        <p>Dhobighat near Dhungedhara, Lalitpur, Nepal.</p>
        <p>+977-98511-68145, +977-98030-28296</p>
        {/* Email with click to copy functionality */}
        <p 
          className={classes.email} 
          onClick={copyEmailToClipboard}
        >
          {email}
        </p>
      </Typography>
      
      <div className={classes.buttonRow}>
        <Button
          variant="contained"
          className={`${classes.button} ${classes.whatsappButton}`}
          onClick={openWhatsApp}
        >
          Contact on WhatsApp
        </Button>

        <Button
          variant="contained"
          color="secondary"
          className={`${classes.button} ${classes.buttonHover}`}
          onClick={openViber}
        >
          Contact on Viber
        </Button>
      </div>

      <Button 
        variant="contained" 
        color="primary" 
        className={`${classes.button} ${classes.buttonHover}`} 
        onClick={openMap}
      >
        Open Google Maps
      </Button>
    </Container>
  );
}

export default Contact;
