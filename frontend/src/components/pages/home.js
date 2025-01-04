import React from "react";
import { Box, Container, Typography, Grid, Button, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Zoom, Fade } from "@mui/material";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  banner: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    objectPosition: "top",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    marginBottom: "32px",
  },
  welcomeText: {
    fontWeight: "700",
    color: "#333",
    marginBottom: "24px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },
  subheading: {
    fontWeight: "600",
    color: "#555",
    marginBottom: "16px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
  },
  description: {
    color: "#333",
    fontSize: "18px",
    fontFamily: "Georgia, serif",
    textAlign: "center",
    marginBottom: "40px",
    lineHeight: "1.6",
  },
  container: {
    padding: "32px",
    backgroundColor: "#f9f9f9",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    marginTop: "40px",
    textAlign: "center",
  },
  section: {
    marginTop: "40px",
    textAlign: "center",
    padding: "24px",
    borderRadius: "20px",
  },
  gridItem: {
    padding: "16px",
  },
  button: {
    marginTop: "16px",
    fontWeight: "600",
    textTransform: "none",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#555",
    },
    borderRadius: "30px",
  },
  about: {
    backgroundColor: "#d8f5d8", // light green
    color: "#333",
  },
  why: {
    backgroundColor: "#d0ebff", // light blue
    color: "#333",
  },
  nature: {
    backgroundColor: "#fff3e0", // light orange
    color: "#333",
  },
  schedule: {
    backgroundColor: "#e8eaf6", // light purple
    color: "#333",
  },
  practices: {
    backgroundColor: "#ffebee", // light pink
    color: "#333",
  },
  costs: {
    backgroundColor: "#e0f7fa", // light cyan
    color: "#333",
  },
}));

function Home() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Container className={classes.container}>
      <Zoom in={true} style={{ transitionDelay: "200ms" }}>
        <Box
          component="img"
          src="/static/images/everest-banner.jpg"
          alt="Mount Everest"
          className={classes.banner}
        />
      </Zoom>
      <Fade in={true} style={{ transitionDelay: "400ms" }}>
        <Typography variant="h2" className={classes.welcomeText}>
          Welcome to Kathmandu Yoga
        </Typography>
      </Fade>
      <Fade in={true} style={{ transitionDelay: "600ms" }}>
        <Typography variant="body1" className={classes.description}>
          Your journey to wellness starts here.
        </Typography>
      </Fade>

      <Paper className={`${classes.section} ${classes.about}`} elevation={3}>
        <Typography variant="h4" className={classes.subheading}>
          About Kathmandu Yoga
        </Typography>
        <Typography variant="body1" className={classes.description}>
          Kathmandu Yoga is a registered yoga institution with the Government of
          Nepal. It deals with the various dimensions of the needs and interests
          of its aspirants. It follows the systems of teaching founded by
          Paramahamsa Satyananda Saraswati, the Founder of Satyananda Yoga or
          Bihar Yoga.
        </Typography>
      </Paper>

      <Paper className={`${classes.section} ${classes.why}`} elevation={3}>
        <Typography variant="h4" className={classes.subheading}>
          Why Kathmandu Yoga?
        </Typography>
        <Typography variant="body1" className={classes.description}>
          • Thousands of aspirants from more than 42 countries and 5 continents
          have been inspired. <br />
          • The founder instructor (Shiva Basyal) holds a Master’s Degree in
          Yoga Psychology in First Class from the first Yoga University in the
          world (Bihar Yoga Bharati at Bihar School of Yoga, Munger, India).{" "}
          <br />
          • He has been a dedicated practitioner and teacher of Yoga for the
          last 26 years. <br />
          • He is the first registered and certified yoga master in Nepal. <br />
          • Kathmandu Yoga is a registered yoga school. <br />
          • Kathmandu Yoga gives more emphasis to your personal need and
          interest. <br />
          • Syllabus is based upon classical (original) scriptures. <br />
          • Kathmandu Yoga provides customized and one-on-one and group
          tutorials based on Yoga Chakra concept. <br />
          • Please note that we are NOT just for physical fitness but deal with
          the mind/body/spirit interplay which may make you experience Yoga
          beyond just the physical body.
        </Typography>
      </Paper>

      <Paper className={`${classes.section} ${classes.nature}`} elevation={3}>
        <Typography variant="h4" className={classes.subheading}>
          Nature of the Class
        </Typography>
        <Typography variant="body1" className={classes.description}>
          The practical session is completely guided with instructions. During
          the practices more emphasis is given on intensifying the
          feelings/experience of the particular practice on physical, mental and
          spiritual aspects with higher awareness. Personalized, customized and
          one-on-one tutorials are also provided. We focus on one-on-one
          sessions, but if you would like to come in a group (like friends,
          family, spouse or children) you are most welcome.
        </Typography>
      </Paper>

      <Paper className={`${classes.section} ${classes.schedule}`} elevation={3}>
        <Typography variant="h4" className={classes.subheading}>
          Time Schedule
        </Typography>
        <Typography variant="body1" className={classes.description}>
          Schedules are flexible. Classes can be arranged at any time on any day
          depending upon your and our conveniences. All appointments are
          required to be made in advance.
        </Typography>
      </Paper>

      <Paper className={`${classes.section} ${classes.practices}`} elevation={3}>
        <Typography variant="h4" className={classes.subheading}>
          Synopsis of the Practices
        </Typography>
        <Typography variant="body1" className={classes.description}>
          A practical session generally covers Asanas (Body Postures),
          Pranayamas (Scientific Techniques of Conscious Breathing), Mudras
          (psychic gestures), Bandhas (psychic locks), some Shatkarmas (yogic
          cleansing), Yoga Nidra/Relaxation (psychic sleep) Dharana
          (Concentration) followed by Guided Meditation. The theory of the
          practices is well explained.
        </Typography>
      </Paper>

      <Paper className={`${classes.section} ${classes.costs}`} elevation={3}>
        <Typography variant="h4" className={classes.subheading}>
          Costs
        </Typography>
        <Typography variant="body1" className={classes.description}>
          Costs vary according to the package. Please contact us for more
          information.
        </Typography>
      </Paper>

      <div className={classes.section}>
        <Typography variant="h4" className={classes.subheading}>
          Ready to Begin?
        </Typography>
        <Typography variant="body1" className={classes.description}>
          Explore the path to wellness with Kathmandu Yoga.
        </Typography>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </Button>
      </div>
    </Container>
  );
}

export default Home;
