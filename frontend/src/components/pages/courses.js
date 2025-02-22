import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Grid, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

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
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  card: {
    minWidth: 275,
  },
  card1: {
    backgroundColor: '#FFEBEE',
  },
  card2: {
    backgroundColor: '#E3F2FD',
  },
  card3: {
    backgroundColor: '#E8F5E9',
  },
  card4: {
    backgroundColor: '#FFF3E0',
  },
  card5: {
    backgroundColor: '#F3E5F5',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#000',
  },
  cardContent: {
    marginTop: 2,
  },
}));

const coursesData = [
  {
    title: "<strong>General Package</strong>",
    description: "A practical session of 1 hour to maintain general health and wellbeing...",
  },
  {
    title: "<strong>Specific Packages</strong>",
    description: "These packages are tailored for individuals or groups...", 
  },
  {
    title: "<strong>Intensive Packages</strong>",
    description: "For those keen to deepen their knowledge...",
  },
  {
    title: "<strong>Certification Course on Yogic Studies</strong>",
    description: "A comprehensive course covering the philosophical foundations...",
  },
];

export default function Courses() {
  const classes = useStyles();
  const [expandedCourse, setExpandedCourse] = useState(null);

  const handleLearnMoreClick = (index) => {
    setExpandedCourse(expandedCourse === index ? null : index);
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h3" className={classes.title}>
        Our Courses
      </Typography>
      <Grid container spacing={3}>
        {coursesData.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={`${classes.card} ${classes['card' + (index + 1)]}`}>
              <CardContent>
                <Typography variant="h5" gutterBottom 
                  dangerouslySetInnerHTML={{ __html: course.title }} 
                />
                <Typography className={classes.cardSubtitle}>
                  {course.description.split(' ').slice(0, 10).join(' ')}...
                </Typography>
                {expandedCourse === index && (
                  <Box className={classes.cardContent}>
                    <Typography variant="body2">
                      {course.description}
                    </Typography>
                  </Box>
                )}
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleLearnMoreClick(index)}>
                  {expandedCourse === index ? "Show Less" : "Learn More"}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
