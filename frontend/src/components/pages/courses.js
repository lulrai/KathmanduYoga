import React from 'react';
import { Grid } from '@mui/material';
import RecipeReviewCard from '../cardcomponent'; // Correct case

const coursesData = [
  {
    title: "Pranayama",
    date: "Ongoing",
    image: "/static/images/cards/pranayama.jpg", // Path to the image
    description: "Learn the art of breath control to enhance your physical and mental well-being.",
  },
  {
    title: "Asana",
    date: "Ongoing",
    image: "/static/images/cards/asana.jpg", // Path to the image
    description: "Explore various yoga postures to improve flexibility, strength, and balance.",
  },
  {
    title: "Yoga Nidra",
    date: "Ongoing",
    image: "/static/images/cards/yoga-nidra.jpg", // Path to the image
    description: "Experience deep relaxation and guided meditation for restorative sleep.",
  },
  {
    title: "Meditation",
    date: "Ongoing",
    image: "/static/images/cards/meditation.jpg", // Path to the image
    description: "Practice mindfulness and meditation techniques to calm the mind and enhance focus.",
  },
  {
    title: "Mudra and Bandha",
    date: "Ongoing",
    image: "/static/images/cards/mudra-bandha.jpg", // Path to the image
    description: "Learn hand gestures and body locks to channel energy and enhance your practice.",
  },
];

export default function Courses() {
  return (
    <Grid container spacing={2}>
      {coursesData.map((course, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <RecipeReviewCard
            title={course.title}
            date={course.date}
            image={course.image}
            description={course.description}
          />
        </Grid>
      ))}
    </Grid>
  );
}
