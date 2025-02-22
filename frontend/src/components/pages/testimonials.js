import React from "react";
import { Container, Typography, Grid, Card, CardContent, Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "32px",
    backgroundColor: "#f9f9f9",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    marginTop: "40px",
  },
  title: {
    fontWeight: "700",
    color: "#333",
    marginBottom: "32px",
    textAlign: "center",
  },
  card: {
    padding: "16px",
    textAlign: "center",
  },
  avatar: {
    width: "80px",
    height: "80px",
    margin: "0 auto 16px",
  },
}));

const testimonialsData = [
  {
    name: "John Doe",
    comment: "Kathmandu Yoga transformed my life! The instructors are amazing, and the classes are very relaxing.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    comment: "I love the personalized approach. The sessions are tailored to my needs, and I feel so much better.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Alice Johnson",
    comment: "The best yoga experience I've ever had. Highly recommended for anyone looking to improve their health.",
    image: "https://via.placeholder.com/150",
  },
];

function Testimonials() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h3" className={classes.title}>
        What Our Students Say
      </Typography>
      <Grid container spacing={3}>
        {testimonialsData.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={classes.card}>
              <Avatar src={testimonial.image} alt={testimonial.name} className={classes.avatar} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {testimonial.comment}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Testimonials;
